package com.smwuis.sooksook.web.controller;

import com.smwuis.sooksook.domain.study.StudyPost;
import com.smwuis.sooksook.service.StudyPostService;
import com.smwuis.sooksook.web.dto.study.StudyPostResponseDto;
import com.smwuis.sooksook.web.dto.study.StudyPostSaveRequestDto;
import com.smwuis.sooksook.web.dto.study.StudyPostUpdateRequestDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = "StudyPostController API (스터디 게시글 API)")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudyPostController {
    
    private final StudyPostService studyPostService;
    
    // 스터디 게시글 작성
    @PostMapping(value = "/studyPost")
    @ApiOperation(value = "스터디 게시글 작성", notes = "스터디 게시글 작성 API")
    public Long save(@RequestBody StudyPostSaveRequestDto saveRequestDto) {
        return studyPostService.save(saveRequestDto);
    }

    // 스터디 게시글 수정
    @PutMapping(value = "/studyPost")
    @ApiOperation(value = "스터디 게시글 수정", notes = "스터디 게시글 수정 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "게시글 id"),
            @ApiImplicitParam(name = "studyBoardId", value = "게시판 id")
    })
    public Long update(@RequestParam Long id, Long studyBoardId, @RequestBody StudyPostUpdateRequestDto updateRequestDto){
        return  studyPostService.update(id, studyBoardId, updateRequestDto);
    }
    
    // 스터디 게시글 삭제
    @DeleteMapping(value = "/studyPost")
    @ApiOperation(value = "스터디 게시글 삭제", notes = "스터디 게시글 삭제 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "게시글 id"),
            @ApiImplicitParam(name = "studyBoardId", value = "게시판 id")
    })
    public Long delete(@RequestParam Long id, Long studyBoardId) {
        studyPostService.delete(id, studyBoardId);
        return id;
    }
    
    // 특정 스터디 게시판 전체 글 조회
    @GetMapping(value = "/studyPosts/all")
    @ApiOperation(value = "스터디 게시판 게시글 리스트 전체 조회", notes = "스터디 게시판 게시글 리스트 전체 조회 API")
    @ApiImplicitParam(name = "studyBoardId", value = "게시판 id")
    public List<StudyPost> allList(@RequestParam Long studyBoardId) {
        return studyPostService.allList(studyBoardId);
    }
    
    // 스터디 게시글 상세 조회
    @GetMapping(value = "/studyPost")
    @ApiOperation(value = "스터디 게시판 게시글 상세 조회", notes = "스터디 게시판 게시글 상세 조회 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "게시글 id"),
            @ApiImplicitParam(name = "studyBoardId", value = "게시판 id")
    })
    public StudyPostResponseDto view(@RequestParam Long id, Long studyBoardId) {
        return studyPostService.findByIdAndStudyBoardId(id, studyBoardId);
    }

}
