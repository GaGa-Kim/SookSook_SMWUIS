package com.smwuis.sooksook.service;

import com.smwuis.sooksook.domain.study.StudyBoard;
import com.smwuis.sooksook.domain.study.StudyBoardRepository;
import com.smwuis.sooksook.domain.study.StudyPost;
import com.smwuis.sooksook.domain.study.StudyPostRepository;
import com.smwuis.sooksook.web.dto.study.StudyPostResponseDto;
import com.smwuis.sooksook.web.dto.study.StudyPostSaveRequestDto;
import com.smwuis.sooksook.web.dto.study.StudyPostUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudyPostService {

    private final StudyPostRepository studyPostRepository;
    private final StudyBoardRepository studyBoardRepository;

    /* 유저 부분 변경 필요 */

    // 스터디 게시글 작성
    @Transactional
    public Long save(StudyPostSaveRequestDto saveRequestDto) {
        StudyBoard studyBoard = studyBoardRepository.findById(saveRequestDto.getStudyBoardId()).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));
        StudyPost studyPost = saveRequestDto.toEntity();
        studyPost.setStudyBoardId(studyBoard);
        return studyPostRepository.save(studyPost).getId();
    }
    
    // 스터디 게시글 수정
    @Transactional
    public Long update(Long id, Long studyBoardId, StudyPostUpdateRequestDto updateRequestDto) {
        StudyBoard studyBoard = studyBoardRepository.findById(studyBoardId).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));
        StudyPost studyPost = studyPostRepository.findByIdAndStudyBoardId(id, studyBoard).orElseThrow(()-> new IllegalArgumentException("해당 게시글이 없습니다."));
        studyPost.update(updateRequestDto.getTitle(),
                updateRequestDto.getContent());
        return id;
    }
    
    // 스터디 게시글 삭제
    @Transactional
    public void delete(Long id, Long studyBoardId) {
        StudyBoard studyBoard = studyBoardRepository.findById(studyBoardId).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));
        StudyPost studyPost = studyPostRepository.findByIdAndStudyBoardId(id, studyBoard).orElseThrow(()-> new IllegalArgumentException("해당 게시글이 없습니다."));
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
    public StudyPostResponseDto findByIdAndStudyBoardId(Long id, Long studyBoardId) {
        StudyBoard studyBoard = studyBoardRepository.findById(studyBoardId).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));
        StudyPost studyPost = studyPostRepository.findByIdAndStudyBoardId(id, studyBoard).orElseThrow(()-> new IllegalArgumentException("해당 게시글이 없습니다."));
        return new StudyPostResponseDto(studyPost);
    }
}
