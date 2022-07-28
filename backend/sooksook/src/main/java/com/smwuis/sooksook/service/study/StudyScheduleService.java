package com.smwuis.sooksook.service.study;

import com.smwuis.sooksook.domain.study.StudyBoard;
import com.smwuis.sooksook.domain.study.StudyBoardRepository;
import com.smwuis.sooksook.domain.study.StudySchedule;
import com.smwuis.sooksook.domain.study.StudyScheduleRepository;
import com.smwuis.sooksook.domain.user.UserRepository;
import com.smwuis.sooksook.web.dto.study.StudyScheduleResponseDto;
import com.smwuis.sooksook.web.dto.study.StudyScheduleSaveRequestDto;
import com.smwuis.sooksook.web.dto.study.StudyScheduleUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudyScheduleService {

    private final StudyScheduleRepository studyScheduleRepository;
    private final StudyBoardRepository studyBoardRepository;
    private final UserRepository userRepository;

    // 스터디 게시판 스케줄 추가
    @Transactional
    public Long save(StudyScheduleSaveRequestDto saveRequestDto) {
        StudyBoard studyBoard = studyBoardRepository.findById(saveRequestDto.getStudyBoardId()).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));
        StudySchedule studySchedule = saveRequestDto.toEntity();
        studySchedule.setStudyBoardId(studyBoard);
        studySchedule.setUser(userRepository.findByEmail(saveRequestDto.getEmail()).orElseThrow(()-> new IllegalArgumentException("해당 유저가 없습니다.")));
        studyBoard.addStudySchedule(studyScheduleRepository.save(studySchedule));

        return studyScheduleRepository.save(studySchedule).getId();
    }
    
    // 스터디 게시판 스케줄 수정
    @Transactional
    public Long update(Long id, Long studyBoardId, StudyScheduleUpdateRequestDto updateDto) {
        StudyBoard studyBoard = studyBoardRepository.findById(studyBoardId).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));
        StudySchedule studySchedule = studyScheduleRepository.findByIdAndStudyBoardId(id, studyBoard).orElseThrow(()-> new IllegalArgumentException("해당 스케줄이 없습니다."));
        studySchedule.update(updateDto.getPeriod(),
                updateDto.getContent());
        return id;
    }

    // 스터디 게시판 스케줄 삭제
    @Transactional
    public void delete(Long id, Long studyBoardId) {
        StudyBoard studyBoard = studyBoardRepository.findById(studyBoardId).orElseThrow(()-> new IllegalArgumentException(("해당 게시판이 없습니다.")));
        StudySchedule studySchedule = studyScheduleRepository.findByIdAndStudyBoardId(id, studyBoard).orElseThrow(()-> new IllegalArgumentException("해당 스케줄이 없습니다."));
        studyScheduleRepository.delete(studySchedule);
    }

    // 스터디 게시판 스케줄 아이디 전체 조회
    @Transactional
    public List<Long> allList(Long studyBoardId) {
        StudyBoard studyBoard = studyBoardRepository.findById(studyBoardId).orElseThrow(()-> new IllegalArgumentException("해당 게시판이 없습니다."));
        List<StudySchedule> studyScheduleList = studyScheduleRepository.findByStudyBoardId(studyBoard);
        List<Long> studyScheduleIdList = new ArrayList<>();

        for(StudySchedule studySchedule: studyScheduleList) {
            studyScheduleIdList.add(studySchedule.getId());
        }

        return studyScheduleIdList;

    }
    
    // 스터디 게시판 스케줄 개별 조회
    @Transactional
    public StudyScheduleResponseDto findByIdAndStudyBoardId(Long id, Long studyBoardId) {
        StudyBoard studyBoard = studyBoardRepository.findById(studyBoardId).orElseThrow(()-> new IllegalArgumentException(("해당 게시판이 없습니다.")));
        StudySchedule studySchedule = studyScheduleRepository.findByIdAndStudyBoardId(id, studyBoard).orElseThrow(()-> new IllegalArgumentException("해당 스케줄이 없습니다."));
        return new StudyScheduleResponseDto(studySchedule);
    }

}
