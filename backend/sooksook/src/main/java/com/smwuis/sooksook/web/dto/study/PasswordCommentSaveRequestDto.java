package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.PasswordComment;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PasswordCommentSaveRequestDto {

    @ApiModelProperty(example = "이메일")
    private String email;

    @ApiModelProperty(example = "1")
    private Long studyBoardId;

    @ApiModelProperty(example = "내용")
    private String content;

    @ApiModelProperty(example = "상위 댓글 id")
    private Long upIndex;


    @Builder
    public PasswordCommentSaveRequestDto(String email, Long studyBoardId, String content, Long upIndex) {
        this.email = email;
        this.studyBoardId = studyBoardId;
        this.content = content;
        this.upIndex = upIndex;
    }

    public PasswordComment toEntity() {
        return PasswordComment.builder()
                .content(content)
                .upIndex(upIndex)
                .build();
    }
}
