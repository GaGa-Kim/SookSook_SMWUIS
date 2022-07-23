package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.StudyPost;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

import java.util.List;

@Getter
public class StudyPostResponseDto {
    /* 유저 부분 변경 필요 */

    @ApiModelProperty(example = "게시글 아이디")
    private Long id;

    @ApiModelProperty(example = "파일 아이디")
    private String uid;

    @ApiModelProperty(example = "제목")
    private String title;

    @ApiModelProperty(example = "내용")
    private String content;

    @ApiModelProperty(example = "게시글 파일")
    private List<Long> fileId;

    public StudyPostResponseDto(StudyPost studyPost, List<Long> fileId) {
        this.id = studyPost.getId();
        this.uid = studyPost.getUid();
        this.title = studyPost.getTitle();
        this.content = studyPost.getContent();
        this.fileId = fileId;
    }
}