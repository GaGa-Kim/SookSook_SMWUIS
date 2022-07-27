package com.smwuis.sooksook.web.controller;

<<<<<<< HEAD
import com.smwuis.sooksook.domain.user.User;
import com.smwuis.sooksook.exception.DataNotFoundException;
import com.smwuis.sooksook.service.UserService;
import com.smwuis.sooksook.web.api.ApiMessage;
import com.smwuis.sooksook.web.dto.user.UserSignUpForm;
import com.smwuis.sooksook.web.dto.user.UserUpdateForm;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import java.util.Optional;
import javax.validation.ConstraintViolationException;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "User API")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/user")
@RestController
public class UserRestController {

    private final UserService userService;

    @PostMapping(produces = "application/json;charset=utf-8")
    @ApiOperation(value = "회원 가입", notes = "입력된 양식으로 사용자를 생성합니다.")
    public ResponseEntity<ApiMessage> save(@RequestBody UserSignUpForm form) {
        User user = new User(form);
        try {
            userService.save(user);
            return ResponseEntity.status(HttpStatus.OK)
                                 .body(ApiMessage.builder().data(user).message("저장 성공").build());
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                                 .body(ApiMessage.builder()
                                                 .message(StringUtils.isEmpty(e.getMessage()) ? "저장 실패" : e.getMessage())
                                                 .build());
        } catch (ConstraintViolationException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                 .body(ApiMessage.builder().message("입력 필드가 비어있음").build());
        }
    }

    @PutMapping(produces = "application/json;charset=utf-8")
    @ApiOperation(value = "유저 정보 수정", notes = "유저 정보를 수정합니다.")
    @ApiImplicitParam(name = "id", value = "유저 id")
    public ResponseEntity<ApiMessage> update(@RequestParam Long id, @RequestBody UserUpdateForm form) {
        try {
            User user = userService.updateUserForm(id, form);
            return ResponseEntity.status(HttpStatus.OK)
                                 .body(ApiMessage.builder().data(user).message("수정 성공").build());
        } catch (DataNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                 .body(ApiMessage.builder().message("사용자가 존재하지 않음").build());

        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                                 .body(ApiMessage.builder().message("수정 실패").build());
        }
    }

    @PatchMapping(value = "/password", produces = "application/json;charset=utf-8")
    @ApiOperation(value = "비밀번호 수정", notes = "유저 비밀번호를 수정합니다.")
    @ApiImplicitParam(name = "id", value = "유저 id")
    public ResponseEntity<ApiMessage> update(@RequestParam Long id, @RequestBody String password) {
        try {
            userService.updatePassword(id, password);
            return ResponseEntity.status(HttpStatus.OK)
                                 .body(ApiMessage.builder().message("비밀번호 변경 성공").build());
        } catch (DataNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                 .body(ApiMessage.builder().message("사용자가 존재하지 않음").build());

        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                                 .body(ApiMessage.builder().message("수정 실패").build());
        }
    }


    @DeleteMapping(produces = "application/json;charset=utf-8")
    @ApiOperation(value = "회원 탈퇴", notes = "유저 정보를 삭제합니다.")
    @ApiImplicitParam(name = "id", value = "유저 id")
    public ResponseEntity<ApiMessage> delete(@RequestParam Long id) {
        try {
            userService.delete(id);
            return ResponseEntity.status(HttpStatus.OK)
                                 .body(ApiMessage.builder().message("삭제 성공").build());
        } catch (DataNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                                 .body(ApiMessage.builder().message(e.getMessage()).build());

        }
    }
=======
import com.smwuis.sooksook.service.UserService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "User Api")
@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserRestController {

    private final UserService userService;
>>>>>>> ed4ca40dbc19bc4b2a0b2642a76bc97f1d9e09c0
}
