package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.StudySchedule;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

import java.util.Date;

@Getter
public class StudyScheduleResponseDto {

    /* 유저 부분 변경 필요 */
    @ApiModelProperty(example = "작성자 이메일 또는 아이디")
    private String uid;

    @ApiModelProperty(example = "기간")
    private Date period;

    @ApiModelProperty(example = "내용")
    private String content;

    public StudyScheduleResponseDto(StudySchedule studySchedule) {
        this.uid = studySchedule.getUid();
        this.period = studySchedule.getPeriod();
        this.content = studySchedule.getContent();
    }
}
