package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.StudyPost;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class StudyPostSaveRequestDto {

    @ApiModelProperty(example = "작성자 이메일")
    private String email;

    @ApiModelProperty(example = "스터디 게시판 id")
    private Long studyBoardId;

    @ApiModelProperty(example = "제목")
    private String title;

    @ApiModelProperty(example = "내용")
    private String content;

    @Builder
    public StudyPostSaveRequestDto(String email, Long studyBoardId, String title, String content) {
        this.email = email;
        this.studyBoardId = studyBoardId;
        this.title = title;
        this.content = content;
    }

    public StudyPost toEntity() {
        return StudyPost.builder()
                .title(title)
                .content(content)
                .build();
    }
}