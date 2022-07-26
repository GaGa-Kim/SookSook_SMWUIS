package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.StudyMember;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class StudyMemberSaveRequestDto {

    @ApiModelProperty(example = "작성자 이메일")
    private String email ;

    @ApiModelProperty(example = "스터디 게시판 id")
    private Long studyBoardId;

    @ApiModelProperty(example = "게시판 비밀번호")
    private String password;

    @Builder
    public StudyMemberSaveRequestDto(String email, Long studyBoardId, String password) {
        this.email = email;
        this.studyBoardId = studyBoardId;
        this.password = password;
    }

    public StudyMember toEntity() {
        return StudyMember.builder()
                .comments(0)
                .comments(0)
                .build();
    }

}
