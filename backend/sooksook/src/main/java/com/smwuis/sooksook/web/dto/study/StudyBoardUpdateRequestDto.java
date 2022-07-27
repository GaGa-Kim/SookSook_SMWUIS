package com.smwuis.sooksook.web.dto.study;

import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Getter
@NoArgsConstructor
public class StudyBoardUpdateRequestDto {

    @ApiModelProperty(example = "학부")
    private String department;

    @ApiModelProperty(example = "과목")
    private String subject;

    @ApiModelProperty(example = "제목")
    private String title;

    @ApiModelProperty(example = "내용")
    private String content;

    @ApiModelProperty(example = "4")
    private Long number;

    @ApiModelProperty(example = "온/오프라인")
    private String onoff;

    @ApiModelProperty(example = "2022-07-15")
    private Date period;

    @ApiModelProperty(example = "비밀번호")
    private String password;

    @ApiModelProperty(example = "true")
    private boolean lecture;

    @ApiModelProperty(example = "카테고리")
    private String category;

    @ApiModelProperty(example = "false")
    private boolean finished;

    @Builder
    public StudyBoardUpdateRequestDto(String department, String subject, String title, String content,
                                    Long number, String onoff, Date period, String password, boolean lecture, String category, boolean finished) {
        this.department = department;
        this.subject = subject;
        this.title = title;
        this.content = content;
        this.number = number;
        this.onoff = onoff;
        this.period = period;
        this.password = password;
        this.lecture = lecture;
        this.category = category;
        this.finished = finished;
    }
}
