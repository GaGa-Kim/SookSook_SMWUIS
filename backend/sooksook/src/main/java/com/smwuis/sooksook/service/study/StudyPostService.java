package com.smwuis.sooksook.service.study;

import com.smwuis.sooksook.domain.study.*;
import com.smwuis.sooksook.domain.user.User;
import com.smwuis.sooksook.domain.user.UserRepository;
import com.smwuis.sooksook.web.dto.study.StudyPostResponseDto;
import com.smwuis.sooksook.web.dto.study.StudyPostSaveRequestDto;
import com.smwuis.sooksook.web.dto.study.StudyPostUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StudyPostService {

    private final StudyPostRepository studyPostRepository;
    private final StudyBoardRepository studyBoardRepository;
    private final FileHandler fileHandler;
    private final StudyFilesRepository studyFilesRepository;
    private final UserRepository userRepository;
    private final StudyMemberRepository studyMemberRepository;

    // 스터디 게시판 게시글 작성
    @Transactional
    public Long lectureSave(StudyPostSaveRequestDto saveRequestDto, List<MultipartFile> files) throws Exception {
        return save(saveRequestDto, files, "스터디 게시판 게시글");
    }

    // 스터디 외 게시판 게시글 작성
    @Transactional
    public Long NotLectureSave(StudyPostSaveRequestDto saveRequestDto, List<MultipartFile> files) throws Exception {
        return save(saveRequestDto, files, "스터디 외 게시판 게시글");
    }

    // 자료 공유 게시글 작성
    @Transactional
    public Long shareSave(StudyPostSaveRequestDto saveRequestDto, List<MultipartFile> files) throws Exception {
        return save(saveRequestDto, files, "자료 공유 게시글");
    }
    
    // 판매/나눔 게시글 작성
    @Transactional
    public Long sellSave(StudyPostSaveRequestDto saveRequestDto, List<MultipartFile> files) throws Exception {
        return save(saveRequestDto, files, "판매/나눔 게시글");
    }
    
    // 질문 게시글 작성
    @Transactional
    public Long questionSave(StudyPostSaveRequestDto saveRequestDto, List<MultipartFile> files) throws Exception {
        return save(saveRequestDto, files, "질문 게시글");
    }
    
    // 게시글 저장
    @Transactional
    public Long save(StudyPostSaveRequestDto saveRequestDto, List<MultipartFile> files, String category) throws Exception {
        User user = userRepository.findByEmail(saveRequestDto.getEmail()).orElseThrow(()-> new IllegalArgumentException("해당 유저가 없습니다."));

        // 스터디 게시판 게시글이 아닐 경우
        if(saveRequestDto.getStudyBoardId() == null) {
            StudyPost studyPost = saveRequestDto.toEntity();
            studyPost.setUser(user);
            studyPost.setCategory(category);
            user.updatePoints(user.getPoints());

            List<StudyFiles> filesList = fileHandler.parseFileInfo(files);

            if(!filesList.isEmpty()) {
                for(StudyFiles studyFiles: filesList) {
                    studyPost.addStudyFiles(studyFilesRepository.save(studyFiles));
                }
            }
            return studyPostRepository.save(studyPost).getId();
        }

        // 스터디 게시판 게시글일 경우
        else {
            StudyBoard studyBoard = studyBoardRepository.findById(saveRequestDto.getStudyBoardId()).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));
            StudyPost studyPost = saveRequestDto.toEntity();
            studyPost.setStudyBoardId(studyBoard);
            studyPost.setUser(user);
            studyPost.setCategory(category);
            studyBoard.addStudyPost(studyPostRepository.save(studyPost));

            StudyMember studyMember = studyMemberRepository.findByStudyBoardIdAndUserId(studyBoard, user).orElseThrow(()-> new IllegalArgumentException("해당 스터디원이 없습니다."));
            studyMember.updatePost(studyMember.getPosts());

            List<StudyFiles> filesList = fileHandler.parseFileInfo(files);

            if(!filesList.isEmpty()) {
                for(StudyFiles studyFiles: filesList) {
                    studyPost.addStudyFiles(studyFilesRepository.save(studyFiles));
                }
            }
            return studyPostRepository.save(studyPost).getId();
        }
    }
    
    // 스터디 게시글 수정 - 첨부파일 없을 때
    @Transactional
    public String update(Long id, String email, StudyPostUpdateRequestDto updateRequestDto) {
        User user = userRepository.findByEmail(email).orElseThrow(()-> new IllegalArgumentException("해당 유저가 없습니다."));
        StudyPost studyPost = studyPostRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 게시글이 없습니다."));

        if(user.equals(studyPost.getUserId())) {
            studyPost.update(updateRequestDto.getTitle(),
                    updateRequestDto.getContent(),
                    updateRequestDto.getCategory());
            return "게시글 수정 완료";
        }

        else {
            return "게시글 수정 실패";
        }
    }
    
    // 스터디 게시글 수정 - 첨부파일 있을 때
    @Transactional
    public String updateWithFiles(Long id, String email, StudyPostUpdateRequestDto updateRequestDto, List<MultipartFile> files) throws Exception {
        User user = userRepository.findByEmail(email).orElseThrow(()-> new IllegalArgumentException("해당 유저가 없습니다."));
        StudyPost studyPost = studyPostRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 게시글이 없습니다."));

        if(user.equals(studyPost.getUserId())) {
            List<StudyFiles> filesList = fileHandler.parseFileInfo(files);

            if(!filesList.isEmpty()) {
                for(StudyFiles studyFiles: filesList) {
                    studyPost.addStudyFiles(studyFilesRepository.save(studyFiles));
                }
            }
            studyPost.update(updateRequestDto.getTitle(),
                    updateRequestDto.getContent(),
                    updateRequestDto.getCategory());
            return "게시글 수정 완료";
        }

        else {
            return "게시글 수정 실패";
        }
    }
    
    // 스터디 게시글 삭제
    @Transactional
    public String delete(Long id, String email) {
        User user = userRepository.findByEmail(email).orElseThrow(()-> new IllegalArgumentException("해당 유저가 없습니다."));
        StudyPost studyPost = studyPostRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 게시글이 없습니다."));
        
        if(user.equals(studyPost.getUserId())) {
            studyPostRepository.delete(studyPost);
            return "게시글 삭제 완료";
        }

        else {
            return "게시글 삭제 실패";
        }
    }
    
    // 특정 스터디 게시판 전체 글 아이디 조회
    @Transactional
    public List<Long> allList(Long studyBoardId) {
        StudyBoard studyBoard = studyBoardRepository.findById(studyBoardId).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));
        List<StudyPost> studyPostList = studyPostRepository.findAllByStudyBoardId(studyBoard);
        List<Long> studyPostIdList = new ArrayList<>();

        for (StudyPost studyPost: studyPostList) {
            studyPostIdList.add(studyPost.getId());
        }

        return studyPostIdList;
    }
    
    // 스터디 게시글 상세 조회
    @Transactional
    public StudyPostResponseDto findById(Long id, List<Long> fileId) {
        StudyPost studyPost = studyPostRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 게시글이 없습니다."));
        return new StudyPostResponseDto(studyPost, fileId);
    }

    // 카테고리 별 게시글 리스트 조회
    @Transactional
    public List<Long> findByCategory(String category) {
        List<StudyPost> studyPostList = studyPostRepository.findByCategory(category);

        List<Long> studyPostIdList = new ArrayList<>();

        for (StudyPost studyPost: studyPostList) {
            studyPostIdList.add(studyPost.getId());
        }

        return studyPostIdList;

    }
}

