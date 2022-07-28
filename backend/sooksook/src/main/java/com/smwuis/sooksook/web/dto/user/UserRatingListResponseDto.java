package com.smwuis.sooksook.web.dto.user;

import com.smwuis.sooksook.domain.user.UserRating;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

@Getter
public class UserRatingListResponseDto {

    @ApiModelProperty(example = "별점 받는 사람 이메일")
    private String receiverEmail;

    @ApiModelProperty(example = "별점 주는 사람 이메일")
    private String giverEmail;

    @ApiModelProperty(example = "과목 이름")
    private String subject;

    @ApiModelProperty(example = "스터디 게시판 id")
    private Long studyBoardId;

    @ApiModelProperty(example = "평가 내용")
    private String contents;

    @ApiModelProperty(example = "점수")
    private float score;

    public UserRatingListResponseDto(UserRating userRating) {
        this.receiverEmail = userRating.getReceiverEmail();
        this.giverEmail = userRating.getGiverEmail();
        this.subject = userRating.getSubject();
        this.studyBoardId = userRating.getStudyBoardId();
        this.contents = userRating.getContents();
        this.score = userRating.getScore();

    }
}
