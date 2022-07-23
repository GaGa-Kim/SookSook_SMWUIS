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

    /* 유저 부분 변경 필요 */
    @ApiModelProperty(example = "작성자 이메일 또는 아이디")
    private String uid;

    @ApiModelProperty(example = "스터디 게시판 id")
    private Long studyBoardId;

    @ApiModelProperty(example = "2022-07-16")
    private Date period;

    @ApiModelProperty(example = "내용")
    private String content;

    @Builder
    public StudyScheduleSaveRequestDto(String uid, Long studyBoardId, Date period, String content) {
        this.uid = uid;
        this.studyBoardId = studyBoardId;
        this.period = period;
        this.content = content;
    }

    public StudySchedule toEntity() {
        return StudySchedule.builder()
                .uid(uid)
                .period(period)
                .content(content)
                .build();
    }
}
