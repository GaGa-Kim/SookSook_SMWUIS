package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.StudyPost;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

import java.util.List;

@Getter
public class StudyPostResponseDto {

    @ApiModelProperty(example = "게시글 아이디")
    private Long id;

    @ApiModelProperty(example = "작성자 이메일")
    private String email;

    @ApiModelProperty(example = "작성자 닉네임")
    private String nickname;

    @ApiModelProperty(example = "제목")
    private String title;

    @ApiModelProperty(example = "내용")
    private String content;

    @ApiModelProperty(example = "게시글 파일")
    private List<Long> fileId;

    public StudyPostResponseDto(StudyPost studyPost, List<Long> fileId) {
        this.id = studyPost.getId();
        this.email = studyPost.getUserId().getEmail();
        this.nickname = studyPost.getUserId().getNickname();
        this.title = studyPost.getTitle();
        this.content = studyPost.getContent();
        this.fileId = fileId;
    }
}