package com.smwuis.sooksook.service;

import com.smwuis.sooksook.domain.study.*;
import com.smwuis.sooksook.repository.UserRepository;
import com.smwuis.sooksook.web.dto.study.StudyPostResponseDto;
import com.smwuis.sooksook.web.dto.study.StudyPostSaveRequestDto;
import com.smwuis.sooksook.web.dto.study.StudyPostUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudyPostService {

    private final StudyPostRepository studyPostRepository;
    private final StudyBoardRepository studyBoardRepository;
    private final FileHandler fileHandler;
    private final StudyFilesRepository studyFilesRepository;
    private final UserRepository userRepository;

    // 스터디 게시글 작성
    @Transactional
    public Long save(StudyPostSaveRequestDto saveRequestDto, List<MultipartFile> files) throws Exception {
        StudyPost studyPost = saveRequestDto.toEntity();
        studyPost.setStudyBoardId(studyBoardRepository.findById(saveRequestDto.getStudyBoardId()).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다.")));
        studyPost.setUser(userRepository.findByEmail(saveRequestDto.getEmail()).orElseThrow(()-> new IllegalArgumentException("해당 유저가 없습니다.")));

        List<StudyFiles> filesList = fileHandler.parseFileInfo(files);

        if(!filesList.isEmpty()) {
            for(StudyFiles studyFiles: filesList) {
                studyPost.addStudyFiles(studyFilesRepository.save(studyFiles));
            }
        }
        return studyPostRepository.save(studyPost).getId();
    }
    
    // 스터디 게시글 수정 - 첨부파일 없을 때
    @Transactional
    public Long update(Long id, StudyPostUpdateRequestDto updateRequestDto) {
        StudyPost studyPost = studyPostRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 게시글이 없습니다."));
        studyPost.update(updateRequestDto.getTitle(),
                updateRequestDto.getContent());
        return id;
    }
    
    // 스터디 게시글 수정 - 첨부파일 있을 때
    @Transactional
    public Long updateWithFiles(Long id, StudyPostUpdateRequestDto updateRequestDto, List<MultipartFile> files) throws Exception {
        StudyPost studyPost = studyPostRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 게시글이 없습니다."));

        List<StudyFiles> filesList = fileHandler.parseFileInfo(files);

        if(!filesList.isEmpty()) {
            for(StudyFiles studyFiles: filesList) {
                studyPost.addStudyFiles(studyFilesRepository.save(studyFiles));
            }
        }
        studyPost.update(updateRequestDto.getTitle(),
                updateRequestDto.getContent());
        return id;
    }
    
    // 스터디 게시글 삭제
    @Transactional
    public void delete(Long id) {
        StudyPost studyPost = studyPostRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 게시글이 없습니다."));
        studyPostRepository.delete(studyPost);
    }
    
    // 특정 스터디 게시판 전체 글 조회
    @Transactional
    public List<StudyPost> allList(Long studyBoardId) {
        StudyBoard studyBoard = studyBoardRepository.findById(studyBoardId).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));
        return studyPostRepository.findByStudyBoardId(studyBoard);
    }
    
    // 스터디 게시글 상세 조회
    @Transactional
    public StudyPostResponseDto findById(Long id, List<Long> fileId) {
        StudyPost studyPost = studyPostRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 게시글이 없습니다."));
        return new StudyPostResponseDto(studyPost, fileId);
    }
}