package com.smwuis.sooksook.web.controller.study;

import com.smwuis.sooksook.service.study.PasswordCommentService;
import com.smwuis.sooksook.web.dto.study.PasswordCommentResponseDto;
import com.smwuis.sooksook.web.dto.study.PasswordCommentSaveRequestDto;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = "PasswordComment API (스터디 게시판 비밀 댓글 API)")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PasswordCommentController {

    private final PasswordCommentService passwordCommentService;

    // 댓글 작성
    @PostMapping(value = "/passwordComment")
    @ApiOperation(value = "스터디 모집 게시판 비밀댓글 작성", notes = "스터디 모집 게시판 비밀댓글 작성 API")
    public ResponseEntity<PasswordCommentResponseDto> save(@RequestBody PasswordCommentSaveRequestDto saveRequestDto) {
        return ResponseEntity.ok().body(passwordCommentService.save(saveRequestDto));
    }

    // 댓글 수정
    @PutMapping(value = "/passwordComment")
    @ApiOperation(value = "스터디 모집 게시판 비밀댓글 수정", notes = "스터디 모집 게시판 비밀댓글 수정 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "댓글 id", example = "1"),
            @ApiImplicitParam(name = "email", value = "이메일", example = "이메일"),
            @ApiImplicitParam(name = "content", value = "내용", example = "내용")
    })
    public ResponseEntity<PasswordCommentResponseDto> update(@RequestParam Long id, String email, String content) {
        return ResponseEntity.ok().body(passwordCommentService.update(id, email, content));
    }

    // 댓글 삭제
    @DeleteMapping(value = "/passwordComment")
    @ApiOperation(value = "스터디 모집 게시판 비밀댓글 삭제", notes = "스터디 모집 게시판 비밀댓글 삭제 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "댓글 id", example = "1"),
            @ApiImplicitParam(name = "email", value = "이메일", example = "이메일")
    })
    public ResponseEntity<Boolean> delete(@RequestParam Long id, String email) {
        return ResponseEntity.ok().body(passwordCommentService.delete(id, email));
    }

    // 댓글 전체 조회
    @GetMapping(value = "/passwordComment/all")
    @ApiOperation(value = "스터디 게시판 id 값으로 특정 스터디 모집 게시판 비밀댓글 전체 조회 (대댓글 제외, 대댓글은 댓글의 childList 안에)", notes = "스터디 게시판 id 값으로 특정 스터디 모집 게시판 비밀댓글 전체 조회 (대댓글 제외) API")
    @ApiImplicitParam(name = "studyBoardId", value = "게시판 id", example = "1")
    public ResponseEntity<List<PasswordCommentResponseDto>> allList(@RequestParam Long studyBoardId) {
        return ResponseEntity.ok().body(passwordCommentService.allList(studyBoardId));
    }

    // 댓글 상세 조회
    @GetMapping(value = "/passwordComment")
    @ApiOperation(value = "비밀댓글 id 값으로 스터디 모집 게시판 비밀댓글 하나 상세 조회", notes = "비밀댓글 id 값으로 스터디 모집 게시판 비밀댓글 하나 상세 조회 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "댓글 id", example = "1"),
            @ApiImplicitParam(name = "email", value = "이메일", example = "이메일")
    })
    public ResponseEntity<PasswordCommentResponseDto> view(@RequestParam Long id, String email) {
        return ResponseEntity.ok().body(passwordCommentService.view(id, email));
    }
}
