package com.smwuis.sooksook.web.controller;

import com.smwuis.sooksook.service.StudyCommentService;
import com.smwuis.sooksook.web.dto.study.StudyCommentResponseDto;
import com.smwuis.sooksook.web.dto.study.StudyCommentSaveRequestDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = "StudyComment API (스터디 게시글 댓글 API)")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudyCommentController {

    private final StudyCommentService studyCommentService;

    // 댓글 작성
    @PostMapping(value = "/studyComment")
    @ApiOperation(value = "스터디 게시글 댓글 작성", notes = "스터디 게시글 댓글 작성 API")
    public Long save(@RequestBody StudyCommentSaveRequestDto saveRequestDto) {
        return studyCommentService.save(saveRequestDto);
    }
    
    // 댓글 수정
    @PutMapping(value = "/studyComment")
    @ApiOperation(value = "스터디 게시글 댓글 수정", notes = "스터디 게시글 댓글 수정 API")
    @ApiImplicitParams({
        @ApiImplicitParam(name = "id", value = "댓글 id"),
        @ApiImplicitParam(name = "content", value = "댓글 내용")
    })
    public Long update(@RequestParam Long id, String content) {
        return studyCommentService.update(id, content);
    }
    
    // 댓글 삭제
    @DeleteMapping(value = "/studyComment")
    @ApiOperation(value = "스터디 게시글 댓글 삭제", notes = "스터디 게시글 댓글 삭제 API")
    @ApiImplicitParam(name = "id", value = "댓글 id")
    public Long delete(@RequestParam Long id) {
        studyCommentService.delete(id);
        return id;
    }
    
    // 댓글 전체 조회
    @GetMapping(value = "/studyComments/all")
    @ApiOperation(value = "스터디 게시글 댓글 전체 조회 (대댓글 제외, 대댓글은 댓글의 childList 안에)", notes = "스터디 게시글 댓글 전체 조회 (대댓글 제외) API")
    @ApiImplicitParam(name = "studyPostId", value = "스터디 게시글 id")
    public List<StudyCommentResponseDto> allList(@RequestParam Long studyPostId) {
        return studyCommentService.allList(studyPostId);
    }

    // 댓글 상세 조회
    @GetMapping(value = "/studyComment")
    @ApiOperation(value = "스터디 게시글 댓글 상세 조회", notes = "스터디 게시글 댓글 상세 조회 API")
    @ApiImplicitParam(name = "id", value = "댓글 id")
    public StudyCommentResponseDto view(@RequestParam Long id) {
        return studyCommentService.view(id);
    }
}
