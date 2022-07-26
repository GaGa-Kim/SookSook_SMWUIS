package com.smwuis.sooksook.service;

import com.smwuis.sooksook.domain.study.StudyBoard;
import com.smwuis.sooksook.domain.study.StudyBoardRepository;
import com.smwuis.sooksook.domain.study.StudyMember;
import com.smwuis.sooksook.domain.study.StudyMemberRepository;
import com.smwuis.sooksook.domain.user.User;
import com.smwuis.sooksook.repository.UserRepository;
import com.smwuis.sooksook.web.dto.study.StudyMemberListResponseDto;
import com.smwuis.sooksook.web.dto.study.StudyMemberSaveRequestDto;
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
    private final UserRepository userRepository;

    // 스터디 가입
    @Transactional
    public Boolean join(StudyMemberSaveRequestDto saveRequestDto) {
        StudyBoard studyBoard = studyBoardRepository.findById(saveRequestDto.getStudyBoardId()).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));

        if(studyBoard.getPassword() == saveRequestDto.getPassword()) {
            StudyMember studyMember = saveRequestDto.toEntity();
            studyMember.setStudyBoardId(studyBoard);
            studyMember.setUser(userRepository.findByEmail(saveRequestDto.getEmail()).orElseThrow(()-> new IllegalArgumentException("해당 유저가 없습니다.")));
            return true;
        }

        else {
            return false;
        }
    }
    
    // 스터디 탈퇴
    @Transactional
    public Long drop(String email, Long studyBoardId) {
        StudyBoard studyBoard = studyBoardRepository.findById(studyBoardId).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));
        User user = userRepository.findByEmail(email).orElseThrow(()-> new IllegalArgumentException("해당 유저가 없습니다."));
        StudyMember studyMember = studyMemberRepository.deleteByStudyBoardIdAndUserId(studyBoard, user);
        return user.getId();
    }

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
