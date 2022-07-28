package com.smwuis.sooksook.web.dto.study;

import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class StudyPostUpdateRequestDto {

    @ApiModelProperty(example = "제목")
    private String title;

    @ApiModelProperty(example = "내용")
    private String content;

    @ApiModelProperty(example = "카테고리")
    private String category;

    @Builder
    public StudyPostUpdateRequestDto(String title, String content, String category) {
        this.title = title;
        this.content = content;
        this.category = category;
    }

}
