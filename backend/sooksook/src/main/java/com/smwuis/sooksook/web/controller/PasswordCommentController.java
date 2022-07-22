package com.smwuis.sooksook.web.controller;

import com.smwuis.sooksook.service.PasswordCommentService;
import com.smwuis.sooksook.web.dto.study.PasswordCommentResponseDto;
import com.smwuis.sooksook.web.dto.study.PasswordCommentSaveRequestDto;
import com.smwuis.sooksook.web.dto.study.StudyCommentResponseDto;
import com.smwuis.sooksook.web.dto.study.StudyCommentSaveRequestDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = "PasswordComment API (스터디 모집 게시판 비밀 댓글 API)")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PasswordCommentController {

    private final PasswordCommentService passwordCommentService;

    // 댓글 작성
    @PostMapping(value = "/passwordComment")
    @ApiOperation(value = "스터디 모집 게시판 댓글 작성", notes = "스터디 모집 게시판 댓글 작성 API")
    public Long save(@RequestBody PasswordCommentSaveRequestDto saveRequestDto) {
        return passwordCommentService.save(saveRequestDto);
    }

    // 댓글 수정
    @PutMapping(value = "/passwordComment")
    @ApiOperation(value = "스터디 모집 게시판 댓글 수정", notes = "스터디 모집 게시판 댓글 수정 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "댓글 id"),
            @ApiImplicitParam(name = "content", value = "댓글 내용")
    })
    public Long update(@RequestParam Long id, String content) {
        return passwordCommentService.update(id, content);
    }

    // 댓글 삭제
    @DeleteMapping(value = "/passwordComment")
    @ApiOperation(value = "스터디 모집 게시판 댓글 삭제", notes = "스터디 모집 게시판 댓글 삭제 API")
    @ApiImplicitParam(name = "id", value = "댓글 id")
    public Long delete(@RequestParam Long id) {
        passwordCommentService.delete(id);
        return id;
    }

    // 댓글 전체 조회
    @GetMapping(value = "/passwordComment/all")
    @ApiOperation(value = "스터디 모집 게시판 댓글 전체 조회 (대댓글 제외, 대댓글은 댓글의 childList 안에)", notes = "스터디 모집 게시판 댓글 전체 조회 (대댓글 제외) API")
    @ApiImplicitParam(name = "studyBoardId", value = "스터디 게시판 id")
    public List<PasswordCommentResponseDto> allList(@RequestParam Long studyBoardId) {
        return passwordCommentService.allList(studyBoardId);
    }

    // 댓글 상세 조회
    @GetMapping(value = "/passwordComment")
    @ApiOperation(value = "스터디 모집 게시판 댓글 상세 조회", notes = "스터디 모집 게시판 댓글 상세 조회 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "댓글 id"),
            @ApiImplicitParam(name = "uid", value = "본인 닉네임")
    })    public PasswordCommentResponseDto view(@RequestParam Long id, String uid) {
        return passwordCommentService.view(id, uid);
    }
}
