package com.smwuis.sooksook.web.dto.study;
import com.smwuis.sooksook.domain.study.StudyComment;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class StudyCommentResponseDto {

    /* 유저 부분 변경 필요 */

    private Long id;

    @ApiModelProperty(example = "작성자 이메일 또는 아이디")
    private String uid;

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
        this.uid = studyComment.getUid();
        this.content = studyComment.getContent();
        this.upIndex = studyComment.getUpIndex();
        this.childList = studyComment.getChildList();
        this.isRemoved = studyComment.isRemoved();
    }
}