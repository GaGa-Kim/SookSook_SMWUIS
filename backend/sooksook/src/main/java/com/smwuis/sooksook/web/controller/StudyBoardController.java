package com.smwuis.sooksook.web.controller;

import com.smwuis.sooksook.domain.study.StudyBoard;
import com.smwuis.sooksook.service.StudyBoardService;
import com.smwuis.sooksook.web.dto.study.StudyBoardResponseDto;
import com.smwuis.sooksook.web.dto.study.StudyBoardSaveRequestDto;
import com.smwuis.sooksook.web.dto.study.StudyBoardUpdateRequestDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = "StudyBoard API (스터디 모집 게시판 API)")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudyBoardController {

    private final StudyBoardService studyBoardService;

    // 스터디 모집 게시판 글 작성
    @PostMapping(value = "/studyBoard")
    @ApiOperation(value = "스터디 모집 게시판 글 작성", notes = "스터디 모집 게시판 글 작성 API")
    public Long save(@RequestBody StudyBoardSaveRequestDto saveRequestDto) {
        return studyBoardService.save(saveRequestDto);
    }

    // 스터디 모집 게시판 글 수정
    @PutMapping(value = "/studyBoard/")
    @ApiOperation(value = "스터디 모집 게시판 글 수정", notes = "스터디 모집 게시판 글 수정 API")
    @ApiImplicitParam(name = "id", value = "게시글 id")
    public Long update(@RequestParam Long id, @RequestBody StudyBoardUpdateRequestDto updateRequestDto) {
        return studyBoardService.update(id, updateRequestDto);
    }

    // 스터디 모집 게시판 글 삭제
    @DeleteMapping(value = "/studyBoard")
    @ApiOperation(value = "스터디 모집 게시판 글 삭제", notes = "스터디 모집 게시판 글 삭제 API")
    @ApiImplicitParam(name = "id", value = "게시글 id")
    public Long delete(@RequestParam Long id) {
        studyBoardService.delete(id);
        return id;
    }

    // 스터디 모집 게시판 글 리스트 조회
    @GetMapping(value = "/studyBoards/all")
    @ApiOperation(value = "스터디 모집 게시판 글 리스트 전체 조회", notes = "스터디 모집 게시판 글 리스트 전체 조회 API")
    public List<StudyBoard> allList(@RequestParam String category) {
        return studyBoardService.allList(category);
    }

    // 스터디 모집 게시판 글 상세 조회
    @GetMapping(value = "/studyBoard")
    @ApiOperation(value = "스터디 모집 게시판 글 상세 조회", notes = "스터디 모집 게시판 글 상세 조회 API")
    @ApiImplicitParam(name = "id", value = "게시글 id")
    public StudyBoardResponseDto view(@RequestParam Long id) {
        return studyBoardService.findById(id);
    }
    
    // 스터디 게시판 학부 별 검색
    @GetMapping(value = "/studyBoards/department")
    @ApiOperation(value = "스터디 모집 게시판 글 리스트 학부 별 조회", notes = "스터디 모집 게시판 글 리스트 학부 별 조회 API")
    public List<StudyBoard> departmentList(@RequestParam String department) {
        return studyBoardService.departmentList(department);
    }

}