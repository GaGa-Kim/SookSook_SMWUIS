package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.StudyMember;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

import java.util.Date;

@Getter
public class StudyMemberListResponseDto {

    /* 유저 부분 변경 필요 */

    @ApiModelProperty(example = "작성자 이메일 또는 아이디")
    private String uid;

    @ApiModelProperty(example = "글 작성 수")
    private Long posts;
    
    @ApiModelProperty(example = "댓글 작성 수")
    private Long comments;

    public StudyMemberListResponseDto(StudyMember studyMember) {
        this.uid = studyMember.getUid();
        this.posts = studyMember.getPosts();
        this.comments = studyMember.getComments();
    }
}
