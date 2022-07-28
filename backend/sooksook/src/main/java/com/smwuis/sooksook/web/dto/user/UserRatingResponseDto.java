package com.smwuis.sooksook.web.dto.user;

import com.smwuis.sooksook.domain.user.UserRating;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

import java.util.List;

@Getter
public class UserRatingResponseDto {

    @ApiModelProperty(example = "과목 이름")
    private String subject;

    @ApiModelProperty(example = "스터디 게시판 id")
    private Long studyBoardId;

    @ApiModelProperty(example = "평가 내용")
    private List<String> contents;

    @ApiModelProperty(example = "점수")
    private String averageScore;

    public UserRatingResponseDto(UserRating userRating, List<String> contents, String averageScore) {
        this.subject = userRating.getSubject();
        this.studyBoardId = userRating.getStudyBoardId();
        this.contents = contents;
        this.averageScore = averageScore;

    }
}
