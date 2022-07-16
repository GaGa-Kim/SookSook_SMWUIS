package com.smwuis.sooksook.web.controller;

import com.smwuis.sooksook.service.StudyMemberService;
import com.smwuis.sooksook.web.dto.study.StudyMemberListResponseDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Api(tags = "StudyMember API (스터디 부원 정보 API)")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudyMemberController {

    private final StudyMemberService studyMemberService;

    // 스터디 부원 정보 (부원, 글 작성 수, 댓글 수)
    @GetMapping(value = "/studyMember")
    @ApiOperation(value = "스터디 게시판 부원 정보 조회", notes = "스터디 게시판 부원 정보 조회 API")
    public List<StudyMemberListResponseDto> allList(@RequestParam Long studyBoardId) {
        return studyMemberService.findByAllByStudyBoardId(studyBoardId);
    }
}
