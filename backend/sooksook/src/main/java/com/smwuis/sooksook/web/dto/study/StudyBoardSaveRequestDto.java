package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.StudyBoard;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Getter
@NoArgsConstructor
public class StudyBoardSaveRequestDto {

    /* 유저 부분 변경 필요 */

    @ApiModelProperty(example = "작성자 이메일 또는 아이디")
    private String uid;

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

    @ApiModelProperty(example = "카테고리")
    private String category;

    @ApiModelProperty(example = "false")
    private Boolean finished;

    @Builder
    public StudyBoardSaveRequestDto(String uid, String department, String subject, String title, String content,
                      Long number, String onoff, Date period, String password, String category, Boolean finished) {
        this.uid = uid;
        this.department = department;
        this.subject = subject;
        this.title = title;
        this.content = content;
        this.number = number;
        this.onoff = onoff;
        this.period = period;
        this.password = password;
        this.category = category;
        this.finished = finished;
    }

    public StudyBoard toEntity() {
        return StudyBoard.builder()
                .uid(uid)
                .department(department)
                .subject(subject)
                .title(title)
                .content(content)
                .number(number)
                .onoff(onoff)
                .period(period)
                .password(password)
                .category(category)
                .finished(finished)
                .build();
    }
}
