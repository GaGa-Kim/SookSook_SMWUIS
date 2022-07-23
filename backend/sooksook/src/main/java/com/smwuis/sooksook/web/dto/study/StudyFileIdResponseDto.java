package com.smwuis.sooksook.web.dto.study;

import com.smwuis.sooksook.domain.study.StudyFiles;
import lombok.Getter;

@Getter
public class StudyFileIdResponseDto {

    private Long fileId;

    public StudyFileIdResponseDto(StudyFiles studyFiles) {
        this.fileId = studyFiles.getId();
    }
}
