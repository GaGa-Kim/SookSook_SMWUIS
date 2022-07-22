package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.StudyComment;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class StudyCommentSaveRequestDto {

    /* 유저 부분 변경 필요 */

    @ApiModelProperty(example = "작성자 이메일 또는 아이디")
    private String uid;

    @ApiModelProperty(example = "스터디 게시글 id")
    private Long studyPostId;

    @ApiModelProperty(example = "내용")
    private String content;

    @ApiModelProperty(example = "상위 댓글 id")
    private Long upIndex;


    @Builder
    public StudyCommentSaveRequestDto(String uid, Long studyPostId, String content, Long upIndex) {
        this.uid = uid;
        this.studyPostId = studyPostId;
        this.content = content;
        this.upIndex = upIndex;
    }

    public StudyComment toEntity() {
        return StudyComment.builder()
                .uid(uid)
                .content(content)
                .upIndex(upIndex)
                .build();
    }
}
