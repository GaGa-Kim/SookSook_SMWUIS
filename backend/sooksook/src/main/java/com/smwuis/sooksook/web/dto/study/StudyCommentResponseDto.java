package com.smwuis.sooksook.web.dto.study;
import com.smwuis.sooksook.domain.study.StudyComment;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class StudyCommentResponseDto {

    private Long id;

    @ApiModelProperty(example = "작성자 이메일")
    private String email;

    @ApiModelProperty(example = "작성자 닉네임")
    private String nickname;

    @ApiModelProperty(example = "내용")
    private String content;

    @ApiModelProperty(example = "상위 댓글 번호")
    private Long upIndex;

    @ApiModelProperty(example = "자식 댓글 id")
    private List<Long> childList;

    @ApiModelProperty(example = "댓글 삭제 여부")
    private boolean isRemoved = false;

    public StudyCommentResponseDto(StudyComment studyComment) {
        this.id = studyComment.getId();
        this.email = studyComment.getUserId().getEmail();
        this.nickname = studyComment.getUserId().getNickname();
        this.content = studyComment.getContent();
        this.upIndex = studyComment.getUpIndex();
        this.childList = studyComment.getChildList();
        this.isRemoved = studyComment.isRemoved();
    }
}