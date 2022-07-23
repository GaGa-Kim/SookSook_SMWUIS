package com.smwuis.sooksook.service;

import com.smwuis.sooksook.domain.study.StudyBoard;
import com.smwuis.sooksook.domain.study.StudyBoardRepository;
import com.smwuis.sooksook.web.dto.study.StudyBoardResponseDto;
import com.smwuis.sooksook.web.dto.study.StudyBoardSaveRequestDto;
import com.smwuis.sooksook.web.dto.study.StudyBoardUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudyBoardService {

    private final StudyBoardRepository studyBoardRepository;

    /* 유저 부분 변경 필요 */

    // 스터디 모집 게시판 글 작성
    @Transactional
    public Long save(StudyBoardSaveRequestDto saveRequestDto) {
        StudyBoard studyBoard = saveRequestDto.toEntity();
        return studyBoardRepository.save(studyBoard).getId();
    }

    // 스터디 모집 게시판 글 수정
    @Transactional
    public Long update(Long id, StudyBoardUpdateRequestDto updateRequestDto) {
        StudyBoard studyBoard = studyBoardRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));
        studyBoard.update(updateRequestDto.getDepartment(),
                updateRequestDto.getSubject(),
                updateRequestDto.getTitle(),
                updateRequestDto.getContent(),
                updateRequestDto.getNumber(),
                updateRequestDto.getOnoff(),
                updateRequestDto.getPeriod(),
                updateRequestDto.getPassword(),
                updateRequestDto.getCategory(),
                updateRequestDto.getFinished());
        return id;
    }

    // 스터디 모집 게시판 글 삭제
    @Transactional
    public void delete(Long id) {
        StudyBoard studyBoard = studyBoardRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));
        studyBoardRepository.delete(studyBoard);
    }

    // 스터디 모집 게시판 글 리스트 조회
    @Transactional
    public List<StudyBoard> allList(String category) {
        return studyBoardRepository.findByCategory(category);
    }

    // 스터디 모집 게시판 글 상세 조회
    @Transactional
    public StudyBoardResponseDto findById(Long id) {
        StudyBoard studyBoard = studyBoardRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));
        return new StudyBoardResponseDto(studyBoard);
    }

    // 스터디 모집 게시판 학부 별 검색
    @Transactional
    public List<StudyBoard> departmentList(String department) {
        return studyBoardRepository.findByDepartment(department);
    }

}
