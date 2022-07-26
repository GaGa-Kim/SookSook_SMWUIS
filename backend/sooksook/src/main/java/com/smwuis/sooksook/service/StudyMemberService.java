package com.smwuis.sooksook.service;

import com.smwuis.sooksook.domain.study.StudyBoard;
import com.smwuis.sooksook.domain.study.StudyBoardRepository;
import com.smwuis.sooksook.domain.study.StudyMemberRepository;
import com.smwuis.sooksook.web.dto.study.StudyMemberListResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudyMemberService {

    private final StudyBoardRepository studyBoardRepository;
    private final StudyMemberRepository studyMemberRepository;

    // 스터디 별 정보 조회 (멤버 이름, 글 작성 수와 댓글 작성 수 등)
    @Transactional(readOnly = true)
    public List<StudyMemberListResponseDto> findByAllByStudyBoardId(Long studyBoardId) {
        StudyBoard studyBoard = studyBoardRepository.findById(studyBoardId).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));
        return studyMemberRepository.findAllByStudyBoardId(studyBoard)
                .stream()
                .map(StudyMemberListResponseDto::new)
                .collect(Collectors.toList());
    }
}
