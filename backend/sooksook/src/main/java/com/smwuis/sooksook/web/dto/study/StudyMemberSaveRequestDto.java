package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.StudyMember;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class StudyMemberSaveRequestDto {

    @ApiModelProperty(example = "이메일")
    private String email ;

    @ApiModelProperty(example = "1")
    private Long studyBoardId;

    @ApiModelProperty(example = "비밀번호")
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
