package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.StudyMember;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

import java.util.Date;

@Getter
public class StudyMemberListResponseDto {

    @ApiModelProperty(example = "작성자 이메일")
    private String email;

    @ApiModelProperty(example = "작성자 닉네임")
    private String nickname;

    @ApiModelProperty(example = "글 작성 수")
    private int posts;
    
    @ApiModelProperty(example = "댓글 작성 수")
    private int comments;

    public StudyMemberListResponseDto(StudyMember studyMember) {
        this.email = studyMember.getUserId().getEmail();
        this.nickname = studyMember.getUserId().getNickname();
        this.posts = studyMember.getPosts();
        this.comments = studyMember.getComments();
    }
}
