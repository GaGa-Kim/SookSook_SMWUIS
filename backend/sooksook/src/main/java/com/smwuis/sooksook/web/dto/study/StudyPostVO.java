package com.smwuis.sooksook.web.dto.study;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
public class StudyPostVO {

    @ApiModelProperty(notes = "이메일", example = "이메일")
    private String email;

    @ApiModelProperty(notes = "스터디 게시판 id (스터디 게시판 게시글이면 id 입력, 아니면 null)", example = "1")
    private Long studyBoardId;

    @ApiModelProperty(notes = "제목", example = "제목")
    private String title;

    @ApiModelProperty(notes = "내용", example = "내용")
    private String content;

    @ApiModelProperty(notes = "파일들")
    private List<MultipartFile> files;
}
