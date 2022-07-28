package com.smwuis.sooksook.web.controller.user;

import com.smwuis.sooksook.service.user.UserRatingService;
import com.smwuis.sooksook.web.dto.user.UserRatingListResponseDto;
import com.smwuis.sooksook.web.dto.user.UserRatingResponseDto;
import com.smwuis.sooksook.web.dto.user.UserRatingSaveRequestDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = "UserRating API (유저 평가 API)")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserRatingController {

    private final UserRatingService userRatingService;

    // 유저 평가 생성
    @PostMapping("/userRating")
    @ApiOperation(value = "유저 평가 등록", notes = "유저 평가 등록 API")
    public Long save(@RequestBody UserRatingSaveRequestDto saveRequestDto) {
        return userRatingService.save(saveRequestDto);
    }

    // 유저 평가 수정
    @PutMapping("/userRating")
    @ApiOperation(value = "유저 평가 수정", notes = "유저 평가 수정 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "유저 평가 id"),
            @ApiImplicitParam(name = "contents", value = "평가 내용"),
            @ApiImplicitParam(name = "score", value = "평가 별점")
    })
    public Long update(@RequestParam Long id, String contents, float score) {
        return userRatingService.update(id, contents, score);
    }

    // 유저 평가 삭제
    @DeleteMapping("/userRating")
    @ApiOperation(value = "유저 평가 삭제", notes = "유저 평가 삭제 API")
    @ApiImplicitParam(name = "id", value = "유저 평가 id")
    public Long delete(@RequestParam Long id) {
        return userRatingService.delete(id);
    }

    // 나의 모든 유저 평가 조회
    @GetMapping("/userRating/myAll")
    @ApiOperation(value = "나의 모든 유저 평가 조회", notes = "나의 모든 유저 평가 조회 API")
    @ApiImplicitParam(name = "email", value = "이메일")
    public List<UserRatingListResponseDto> findMyRating(@RequestParam String email) {
        return userRatingService.findMyRating(email);
    }

    // 유저 평가 상세 조회
    @GetMapping("/userRating/all")
    @ApiOperation(value = "유저 평가 상세 조회", notes = "유저 평가 상세 조회 API")
    @ApiImplicitParam(name = "id", value = "유저 평가 id")
    public UserRatingListResponseDto findRating(@RequestParam Long id) {
        return userRatingService.findRating(id);
    }

    // 유저 평가 스터디별 종합 조회
    @GetMapping("/userRating/subject")
    @ApiOperation(value = "나의 스터디별 평가 조회", notes = "나의 스터디별 평가 조회 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "email", value = "이메일"),
            @ApiImplicitParam(name = "studyBoardId", value = "게시판 id"),
    })
    public UserRatingResponseDto findRatingWithStudyBoard(@RequestParam String email, Long studyBoardId) {
        return userRatingService.findRatingWithStudyBoard(email, studyBoardId);
    }
}
