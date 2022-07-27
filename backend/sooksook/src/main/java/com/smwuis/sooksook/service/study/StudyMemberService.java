package com.smwuis.sooksook.service.study;

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

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudyMemberService {

    private final StudyBoardRepository studyBoardRepository;
    private final StudyMemberRepository studyMemberRepository;
    private final UserRepository userRepository;

    // 스터디 참여
    @Transactional
    public String join(StudyMemberSaveRequestDto saveRequestDto) {
        User user = userRepository.findByEmail(saveRequestDto.getEmail()).orElseThrow(()-> new IllegalArgumentException("해당 유저가 없습니다."));
        StudyBoard studyBoard = studyBoardRepository.findById(saveRequestDto.getStudyBoardId()).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));
        StudyMember studyMember = studyMemberRepository.findByStudyBoardIdAndUserId(studyBoard, user).orElseThrow(()-> new IllegalArgumentException("해당 스터디원이 없습니다."));

        // 이미 가입한 멤버라면
        if (studyMember.getUserId().getEmail() == saveRequestDto.getEmail()) {
            return "이미 가입한 멤버입니다.";
        }

        // 가입하지 않은 멤버라면
        else {
            Boolean join = password(saveRequestDto);

            if (join) {
                return "스터디에 가입했습니다.";
            }

            else {
                return "비밀번호가 틀려 스터디 가입에 실패했습니다.";
            }
        }
    }

    // 스터디 게시판 비밀번호 확인 및 스터디 가입
    @Transactional
    public Boolean password(StudyMemberSaveRequestDto saveRequestDto) {
        StudyBoard studyBoard = studyBoardRepository.findById(saveRequestDto.getStudyBoardId()).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));

        if(studyBoard.getPassword() == saveRequestDto.getPassword()) {
            StudyMember joinMember = saveRequestDto.toEntity();
            joinMember.setStudyBoardId(studyBoard);
            joinMember.setUser(userRepository.findByEmail(saveRequestDto.getEmail()).orElseThrow(()-> new IllegalArgumentException("해당 유저가 없습니다.")));
            studyBoard.addStudyMember(studyMemberRepository.save(joinMember));
            studyMemberRepository.save(joinMember);
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

    // 내가 참여 중인 스터디
    @Transactional(readOnly = true)
    public List<StudyBoard> myStudy(Long studyBoardId, String email) {
        StudyBoard studyBoard = studyBoardRepository.findById(studyBoardId).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));
        User user = userRepository.findByEmail(email).orElseThrow(()-> new IllegalArgumentException("해당 유저가 없습니다."));
        List<StudyMember> studyList = studyMemberRepository.findAllByStudyBoardIdAndUserId(studyBoard, user);
        List<StudyBoard> studyBoardIdList = new ArrayList<>();

        for(StudyMember studyMember: studyList) {
            studyBoardIdList.add(studyMember.getStudyBoardId());
        }

        return studyBoardIdList;
    }
}

