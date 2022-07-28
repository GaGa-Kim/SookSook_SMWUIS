package com.smwuis.sooksook.web.controller.study;

import com.smwuis.sooksook.domain.study.StudyBoard;
import com.smwuis.sooksook.service.study.StudyMemberService;
import com.smwuis.sooksook.web.dto.study.StudyMemberListResponseDto;
import com.smwuis.sooksook.web.dto.study.StudyMemberSaveRequestDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = "StudyMember API (스터디 부원 정보 API)")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudyMemberController {

    private final StudyMemberService studyMemberService;

    // 스터디 게시판 비밀번호 확인 및 스터디 가입
    @PostMapping(value = "/studyMember/password")
    @ApiOperation(value = "스터디 게시판 비밀번호 확인 및 스터디 가입", notes = "스터디 게시판 비밀번호 확인 및 스터디 가입 API")
    public Boolean password(@RequestBody StudyMemberSaveRequestDto saveRequestDto) {
        return studyMemberService.password(saveRequestDto);
    }

    // 스터디 참여
    @PostMapping(value = "/studyMember")
    @ApiOperation(value = "스터디 게시판 참여", notes = "스터디 게시판 참여 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "studyBoardId", value = "게시판 id"),
            @ApiImplicitParam(name = "email", value = "이메일")
    })
    public Boolean join(@RequestParam Long studyBoardId, String email) {
        return studyMemberService.join(studyBoardId, email);
    }

    // 스터디 탈퇴
    @DeleteMapping(value = "/studyMember")
    @ApiOperation(value = "스터디 게시판 탈퇴", notes = "스터디 게시판 탈퇴 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "email", value = "이메일"),
            @ApiImplicitParam(name = "studyBoardId", value = "게시판 id")
    })
    public Long drop(@RequestParam String email, Long studyBoardId) {
        return studyMemberService.drop(email, studyBoardId);
    }

    // 스터디 부원 정보 (부원, 글 작성 수, 댓글 수)
    @GetMapping(value = "/studyMember")
    @ApiOperation(value = "스터디 게시판 부원 정보 조회", notes = "스터디 게시판 부원 정보 조회 API")
    @ApiImplicitParam(name = "studyBoardId", value = "스터디 게시판 id")
    public List<StudyMemberListResponseDto> allList(@RequestParam Long studyBoardId) {
        return studyMemberService.findByAllByStudyBoardId(studyBoardId);
    }

    // 내가 참여 중인 스터디
    @GetMapping(value = "/studyMember/myStudy")
    @ApiOperation(value = "내가 참여 중인 스터디 조회", notes = "내가 참여 중인 스터디 조회 API")
    @ApiImplicitParam(name = "email", value = "이메일")
    public List<Long> myStudy(@RequestParam String email) {
        return studyMemberService.myStudy(email);
    }

}
