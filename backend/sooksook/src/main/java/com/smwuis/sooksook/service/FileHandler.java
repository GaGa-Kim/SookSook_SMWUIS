package com.smwuis.sooksook.service;

import com.smwuis.sooksook.domain.study.StudyFiles;
import com.smwuis.sooksook.web.dto.study.StudyPostFileResponseDto;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Component
public class FileHandler {

    private final StudyFilesService studyFilesService;

    public FileHandler(StudyFilesService studyFilesService) {
        this.studyFilesService = studyFilesService;
    }

    public List<StudyFiles> parseFileInfo(List<MultipartFile> multipartFiles) throws Exception {

        List<StudyFiles> fileList = new ArrayList<>();

        if(!CollectionUtils.isEmpty(multipartFiles)) {
            LocalDateTime now = LocalDateTime.now();
            DateTimeFormatter dateTimeFormatter =
                    DateTimeFormatter.ofPattern("yyyyMMdd");
            String current_date = now.format(dateTimeFormatter);

            String absolutePath = new File("").getAbsolutePath() + File.separator + File.separator;

            String path = "files" + File.separator + current_date;
            File file = new File(path);

            if(!file.exists()) {
                boolean wasSuccessful = file.mkdirs();

                if(!wasSuccessful)
                    System.out.println("file: was not successful");
            }

            for(MultipartFile multipartFile : multipartFiles) {

                String originalFileExtension = multipartFile.getOriginalFilename().substring(multipartFile.getOriginalFilename().lastIndexOf("."));

                String new_file_name = System.nanoTime() + originalFileExtension;

                StudyPostFileResponseDto studyPostFileResponseDto = StudyPostFileResponseDto.builder()
                        .origFileName(multipartFile.getOriginalFilename())
                        .fileName(new_file_name)
                        .filePath(path + File.separator + new_file_name)
                        .build();

                StudyFiles studyFiles = new StudyFiles(
                        studyPostFileResponseDto.getOrigFileName(),
                        studyPostFileResponseDto.getFileName(),
                        studyPostFileResponseDto.getFilePath()
                );

                fileList.add(studyFiles);

                file = new File(absolutePath + path + File.separator + new_file_name);
                multipartFile.transferTo(file);

                file.setWritable(true);
                file.setReadable(true);
            }
        }

        return fileList;
    }
}
