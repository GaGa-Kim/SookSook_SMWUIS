package com.smwuis.sooksook.web.controller.user;

import com.smwuis.sooksook.service.user.UserScheduleService;
import com.smwuis.sooksook.web.dto.user.UserScheduleRequestDto;
import com.smwuis.sooksook.web.dto.user.UserScheduleResponseDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = "UserSchedule API (유저 스케줄 API)")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserScheduleController {

    private final UserScheduleService userScheduleService;

    // 스케줄 등록
    @PostMapping("/userSchedule")
    @ApiOperation(value = "유저 스케줄 등록", notes = "유저 스케줄 등록 API")
    public Long save(@RequestBody UserScheduleRequestDto requestDto) {
        return userScheduleService.save(requestDto);
    }

    // 스케줄 수정
    @PutMapping("/userSchedule")
    @ApiOperation(value = "유저 스케줄 수정", notes = "유저 스케줄 수정 API")
    @ApiImplicitParam(name = "id", value = "스케줄 id")
    public Long update(@RequestParam Long id, @RequestBody UserScheduleRequestDto requestDto) {
        return  userScheduleService.update(id, requestDto);
    }

    // 스케줄 삭제
    @DeleteMapping("/userSchedule")
    @ApiOperation(value = "유저 스케줄 삭제", notes = "유저 스케줄 삭제 API")
    @ApiImplicitParam(name = "id", value = "스케줄 id")
    public Long delete(@RequestParam Long id) {
        return userScheduleService.delete(id);
    }

    // 스케줄 완료 체크
    @PutMapping("/userSchedule/finish")
    @ApiOperation(value = "유저 스케줄 완료 체크", notes = "유저 스케줄 완료 체크 API")
    @ApiImplicitParam(name = "id", value = "스케줄 id")
    public Long finish(@RequestParam Long id) {
        return userScheduleService.finish(id);
    }

    // 나의 스케줄 조회
    @GetMapping("/userSchedule/my")
    @ApiOperation(value = "나의 스케줄 조회", notes = "나의 스케줄 조회 API")
    @ApiImplicitParam(name = "email", value = "이메일")
    public List<UserScheduleResponseDto> findMySchedule(@RequestParam String email) {
        return userScheduleService.findMySchedule(email);
    }

    // 스케줄 상세 조회
    @GetMapping("/userSchedule")
    @ApiOperation(value = "스케줄 상세 조회", notes = "스케줄 상세 조회 API")
    @ApiImplicitParam(name = "id", value = "스케줄 id")
    public UserScheduleResponseDto findSchedule(@RequestParam Long id) {
        return userScheduleService.findSchedule(id);
    }
}
