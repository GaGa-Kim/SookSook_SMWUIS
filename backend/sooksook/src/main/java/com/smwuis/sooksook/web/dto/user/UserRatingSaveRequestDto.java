package com.smwuis.sooksook.web.dto.user;

import com.smwuis.sooksook.domain.user.UserRating;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserRatingSaveRequestDto {

    @ApiModelProperty(example = "별점 받는 사람 이메일")
    private String receiverEmail;

    @ApiModelProperty(example = "별점 주는 사람 이메일")
    private String giverEmail;

    @ApiModelProperty(example = "1")
    private Long studyBoardId;

    @ApiModelProperty(example = "과목 이름")
    private String subject;

    @ApiModelProperty(example = "평가 내용")
    private String contents; 

    @ApiModelProperty(example = "4.5")
    private float score;

    @Builder
    public UserRatingSaveRequestDto(String receiverEmail, String giverEmail, Long studyBoardId, String subject, String contents, float score) {
        this.receiverEmail = receiverEmail;
        this.giverEmail = giverEmail;
        this.studyBoardId = studyBoardId;
        this.subject = subject;
        this.contents = contents;
        this.score = score;
    }

    public UserRating toEntity() {
        return UserRating.builder()
                .receiverEmail(receiverEmail)
                .giverEmail(giverEmail)
                .studyBoardId(studyBoardId)
                .subject(subject)
                .contents(contents)
                .score(score)
                .build();
    }
}
