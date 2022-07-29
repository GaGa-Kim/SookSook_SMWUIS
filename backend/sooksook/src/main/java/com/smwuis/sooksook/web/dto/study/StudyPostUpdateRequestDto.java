package com.smwuis.sooksook.web.dto.study;

import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class StudyPostUpdateRequestDto {

    @ApiModelProperty(notes = "이메일", example = "이메일", required = true)
    private String email;

    @ApiModelProperty(notes = "이메일", example = "제목")
    private String title;

    @ApiModelProperty(notes = "내용", example = "내용")
    private String content;

    @ApiModelProperty(notes = "카테고리", example = "강의 스터디 게시글")
    private String category;

    @Builder
    public StudyPostUpdateRequestDto(String email, String title, String content, String category) {
        this.email = email;
        this.title = title;
        this.content = content;
        this.category = category;
    }

}
