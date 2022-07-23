package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.StudyBoard;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

import java.util.Date;

@Getter
public class StudyBoardResponseDto {

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

    @ApiModelProperty(example = "인원")
    private Long number;

    @ApiModelProperty(example = "온/오프라인")
    private String onoff;

    @ApiModelProperty(example = "기간")
    private Date period;

    @ApiModelProperty(example = "비밀번호")
    private String password;

    @ApiModelProperty(example = "카테고리")
    private String category;

    @ApiModelProperty(example = "스터디 종료 여부")
    private Boolean finished;

    public StudyBoardResponseDto(StudyBoard studyBoard) {
        this.uid = studyBoard.getUid();
        this.department = studyBoard.getDepartment();
        this.subject = studyBoard.getSubject();
        this.title = studyBoard.getTitle();
        this.content = studyBoard.getContent();
        this.number = studyBoard.getNumber();
        this.onoff = studyBoard.getOnoff();
        this.period = studyBoard.getPeriod();
        this.password = studyBoard.getPassword();
        this.category = studyBoard.getCategory();
        this.finished = studyBoard.getFinished();
    }
}
