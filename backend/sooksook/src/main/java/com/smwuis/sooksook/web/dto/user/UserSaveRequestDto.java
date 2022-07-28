package com.smwuis.sooksook.web.dto.user;

import com.smwuis.sooksook.domain.user.User;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserSaveRequestDto {

    @ApiModelProperty(example = "이름")
    private String name;

    @ApiModelProperty(example = "아이디")
    private String loginId;

    @ApiModelProperty(example = "이메일")
    private String email;

    @ApiModelProperty(example = "닉네임")
    private String nickname;

    @ApiModelProperty(example = "비밀번호")
    private String password;

    @ApiModelProperty(example = "한 줄 소개글")
    private String introduction;

    @Builder
    public UserSaveRequestDto(String name, String loginId, String email, String nickname, String password, String introduction) {
        this.name = name;
        this.loginId = loginId;
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.introduction = introduction;
    }

    public User toEntity() {
        return User.builder()
                .name(name)
                .loginId(loginId)
                .email(email)
                .nickname(nickname)
                .password(password)
                .introduction(introduction)
                .points(0)
                .rating("새싹 등급")
                .build();
    }

}
