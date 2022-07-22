package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.PasswordComment;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class PasswordCommentResponseDto {

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

    public PasswordCommentResponseDto(PasswordComment passwordComment) {
        this.id = passwordComment.getId();
        this.uid = passwordComment.getUid();
        this.content = passwordComment.getContent();
        this.upIndex = passwordComment.getUpIndex();
        this.childList = passwordComment.getChildList();
        this.isRemoved = passwordComment.isRemoved();
    }
}