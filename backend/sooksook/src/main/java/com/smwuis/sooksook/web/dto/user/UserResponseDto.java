package com.smwuis.sooksook.web.dto.user;

import com.smwuis.sooksook.domain.user.User;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;


@Getter
public class UserResponseDto {

    private Long id;

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

    @ApiModelProperty(example = "포인트")
    private int points;

    @ApiModelProperty(example = "등급")
    private String rating;

    public UserResponseDto(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.loginId = user.getLoginId();
        this.email = user.getEmail();
        this.nickname = user.getNickname();
        this.password = user.getPassword();
        this.introduction = user.getIntroduction();
        this.points = user.getPoints();
        this.rating = user.getRating();
    }
}
