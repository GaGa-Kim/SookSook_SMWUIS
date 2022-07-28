package com.smwuis.sooksook.web.dto.user;

import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserUpdateRequestDto {

    @ApiModelProperty(example = "이름")
    private String name;

    @ApiModelProperty(example = "닉네임")
    private String nickname;

    @ApiModelProperty(example = "비밀번호")
    private String password;

    @ApiModelProperty(example = "한 줄 소개글")
    private String introduction;

    @Builder
    public UserUpdateRequestDto(String name, String nickname, String password, String introduction) {
        this.name = name;
        this.nickname = nickname;
        this.password = password;
        this.introduction = introduction;
    }
}
