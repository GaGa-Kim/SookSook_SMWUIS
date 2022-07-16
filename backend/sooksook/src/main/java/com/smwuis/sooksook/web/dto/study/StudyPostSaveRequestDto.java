package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.StudyPost;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class StudyPostSaveRequestDto {

    /* 유저 부분 변경 필요 */

    @ApiModelProperty(example = "작성자 이메일 또는 아이디")
    private String uid;

    @ApiModelProperty(example = "스터디 게시판 id")
    private Long studyBoardId;

    @ApiModelProperty(example = "제목")
    private String title;

    @ApiModelProperty(example = "내용")
    private String content;

    @Builder
    public StudyPostSaveRequestDto(String uid, Long studyBoardId, String title, String content) {
        this.uid = uid;
        this.studyBoardId = studyBoardId;
        this.title = title;
        this.content = content;
    }

    public StudyPost toEntity() {
        return StudyPost.builder()
                .uid(uid)
                .title(title)
                .content(content)
                .build();
    }
}