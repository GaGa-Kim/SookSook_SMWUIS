package com.smwuis.sooksook.web.dto.study;

import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Getter
@NoArgsConstructor
public class StudyScheduleUpdateRequestDto {

    @ApiModelProperty(example = "2022-07-17")
    private Date period;

    @ApiModelProperty(example = "내용")
    private String content;

    @Builder
    public StudyScheduleUpdateRequestDto(Date period, String content) {
        this.period = period;
        this.content = content;
    }
}