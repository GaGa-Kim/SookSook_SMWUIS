package com.smwuis.sooksook.web.controller;

import com.smwuis.sooksook.domain.study.StudySchedule;
import com.smwuis.sooksook.service.StudyScheduleService;
import com.smwuis.sooksook.web.dto.study.StudyScheduleResponseDto;
import com.smwuis.sooksook.web.dto.study.StudyScheduleSaveRequestDto;
import com.smwuis.sooksook.web.dto.study.StudyScheduleUpdateDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = "StudySchedule API (스터디 스케줄 정보 API)")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudyScheduleController {

    private final StudyScheduleService studyScheduleService;

    // 스터디 게시판 스케줄 추가
    @PostMapping(value = "/studySchedule")
    @ApiOperation(value = "스터디 게시판 스케줄 작성", notes = "스터디 게시판 스케줄 작성 API")
    public Long save(@RequestBody StudyScheduleSaveRequestDto saveRequestDto) {
        return studyScheduleService.save(saveRequestDto);
    }

    // 스터디 게시판 스케줄 수정
    @PutMapping(value = "/studySchedule")
    @ApiOperation(value = "스터디 게시판 스케줄 수정", notes = "스터디 게시판 스케줄 수정 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "스케줄 id"),
            @ApiImplicitParam(name = "studyBoardId", value = "게시판 id")
    })
    public Long update(@RequestParam Long id, Long studyBoardId, @RequestBody StudyScheduleUpdateDto updateDto) {
        return studyScheduleService.update(id, studyBoardId, updateDto);
    }

    // 스터디 게시판 스케줄 삭제
    @DeleteMapping(value = "studySchedule")
    @ApiOperation(value = "스터디 게시판 스케줄 삭제", notes = "스터디 게시판 스케줄 삭제 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "스케줄 id"),
            @ApiImplicitParam(name = "studyBoardId", value = "게시판 id")
    })
    public Long delete(@RequestParam Long id, Long studyBoardId) {
        studyScheduleService.delete(id, studyBoardId);
        return id;
    }

    // 스터디 게시판 스케줄 전체 리스트 조회
    @GetMapping(value = "/studySchedules/all")
    @ApiOperation(value = "스터디 게시판 스케줄 리스트 전체 조회", notes = "스터디 게시판 스케줄 리스트 전체 조회 API")
    public List<StudySchedule> allList(@RequestParam Long studyBoardId) {
        return studyScheduleService.allList(studyBoardId);
    }

    // 스터디 게시판 스케줄 개별 조회
    @GetMapping(value = "/studySchedule")
    @ApiOperation(value = "스터디 게시판 스케줄 상세 조회", notes = "스터디 게시판 스케줄 상세 조회 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "스케줄 id"),
            @ApiImplicitParam(name = "studyBoardId", value = "게시판 id")
    })
    public StudyScheduleResponseDto view(@RequestParam Long id, Long studyBoardId) {
        return studyScheduleService.findByIdAndStudyBoardId(id, studyBoardId);
    }

}
