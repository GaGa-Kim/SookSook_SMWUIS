package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.StudySchedule;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Getter
@NoArgsConstructor
public class StudyScheduleSaveRequestDto {

    @ApiModelProperty(example = "이메일")
    private String email;

    @ApiModelProperty(example = "1")
    private Long studyBoardId;

    @ApiModelProperty(example = "2022-07-16")
    private Date period;

    @ApiModelProperty(example = "내용")
    private String content;

    @Builder
    public StudyScheduleSaveRequestDto(String email, Long studyBoardId, Date period, String content) {
        this.email = email;
        this.studyBoardId = studyBoardId;
        this.period = period;
        this.content = content;
    }

    public StudySchedule toEntity() {
        return StudySchedule.builder()
                .period(period)
                .content(content)
                .build();
    }
}
