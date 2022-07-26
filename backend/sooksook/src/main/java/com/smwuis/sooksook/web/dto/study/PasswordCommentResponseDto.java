package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.PasswordComment;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class PasswordCommentResponseDto {

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

    public PasswordCommentResponseDto(PasswordComment passwordComment) {
        this.email = passwordComment.getUserId().getEmail();
        this.nickname = passwordComment.getUserId().getNickname();
        this.content = passwordComment.getContent();
        this.upIndex = passwordComment.getUpIndex();
        this.childList = passwordComment.getChildList();
        this.isRemoved = passwordComment.isRemoved();
    }
}