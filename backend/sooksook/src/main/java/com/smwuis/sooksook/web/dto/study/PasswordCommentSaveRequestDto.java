package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.PasswordComment;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PasswordCommentSaveRequestDto {

    /* 유저 부분 변경 필요 */

    @ApiModelProperty(example = "작성자 이메일 또는 아이디")
    private String uid;

    @ApiModelProperty(example = "스터디 게시판 id")
    private Long studyBoardId;

    @ApiModelProperty(example = "내용")
    private String content;

    @ApiModelProperty(example = "상위 댓글 id")
    private Long upIndex;


    @Builder
    public PasswordCommentSaveRequestDto(String uid, Long studyBoardId, String content, Long upIndex) {
        this.uid = uid;
        this.studyBoardId = studyBoardId;
        this.content = content;
        this.upIndex = upIndex;
    }

    public PasswordComment toEntity() {
        return PasswordComment.builder()
                .uid(uid)
                .content(content)
                .upIndex(upIndex)
                .build();
    }
}
