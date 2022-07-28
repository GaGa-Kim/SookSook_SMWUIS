package com.smwuis.sooksook.web.controller.user;

import com.smwuis.sooksook.service.user.UserService;
import com.smwuis.sooksook.web.dto.user.UserResponseDto;
import com.smwuis.sooksook.web.dto.user.UserSaveRequestDto;
import com.smwuis.sooksook.web.dto.user.UserUpdateRequestDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@Api(tags = "User API (유저 API)")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

    private final UserService userService;

    // 유저 생성 (회원 가입)
    @PostMapping("/user")
    @ApiOperation(value = "유저 생성 (회원가입)", notes = "유저 생성 (회원가입) API")
    public Long singUp(@RequestBody UserSaveRequestDto saveRequestDto) {
        return userService.signup(saveRequestDto);
    }

    // 유저 수정
    @PutMapping("/user")
    @ApiOperation(value = "유저 수정", notes = "유저 수정 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "유저 id"),
            @ApiImplicitParam(name = "email", value = "이메일")
    })
    public String update(@RequestParam Long id, String email, @RequestBody UserUpdateRequestDto updateRequestDto) {
        return userService.update(id, email, updateRequestDto);
    }

    // 유저 삭제
    @DeleteMapping("/user")
    @ApiOperation(value = "유저 삭제", notes = "유저 삭제 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "유저 id"),
            @ApiImplicitParam(name = "email", value = "이메일")
    })
    public String delete(@RequestParam Long id, String email) {
        return userService.delete(id, email);
    }

    // 로그인
    @GetMapping("/user")
    @ApiOperation(value = "로그인", notes = "로그인 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "loginId", value = "유저 로그인 아이디"),
            @ApiImplicitParam(name = "password", value = "비밀번호")
    })
    public UserResponseDto login(@RequestParam String loginId, String password) {
        return userService.login(loginId, password);
    }

    // 유저 정보 조회
    @GetMapping("/user/info")
    @ApiOperation(value = "유저 정보 조회", notes = "유저 정보 조회 API")
    @ApiImplicitParam(name = "email", value = "이메일")
    public UserResponseDto findUser(@RequestParam String email) {
        return userService.findUser(email);
    }
}
