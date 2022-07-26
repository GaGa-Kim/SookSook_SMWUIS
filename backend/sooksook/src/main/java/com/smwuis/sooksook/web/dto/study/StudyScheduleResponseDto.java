package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.StudySchedule;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

import java.util.Date;

@Getter
public class StudyScheduleResponseDto {

    @ApiModelProperty(example = "작성자 이메일")
    private String email;

    @ApiModelProperty(example = "작성자 닉네임")
    private String nickname;

    @ApiModelProperty(example = "기간")
    private Date period;

    @ApiModelProperty(example = "내용")
    private String content;

    public StudyScheduleResponseDto(StudySchedule studySchedule) {
        this.email = studySchedule.getUserId().getEmail();
        this.nickname = studySchedule.getUserId().getNickname();
        this.period = studySchedule.getPeriod();
        this.content = studySchedule.getContent();
    }
}
