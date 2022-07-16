package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.StudyPost;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

@Getter
public class StudyPostResponseDto {
    /* 유저 부분 변경 필요 */

    @ApiModelProperty(example = "작성자 이메일 또는 아이디")
    private String uid;

    @ApiModelProperty(example = "제목")
    private String title;

    @ApiModelProperty(example = "내용")
    private String content;

    public StudyPostResponseDto(StudyPost studyPost) {
        this.uid = studyPost.getUid();
        this.title = studyPost.getTitle();
        this.content = studyPost.getContent();
    }
}