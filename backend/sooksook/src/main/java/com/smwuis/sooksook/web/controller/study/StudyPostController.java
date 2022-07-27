package com.smwuis.sooksook.web.controller.study;

import com.smwuis.sooksook.domain.study.StudyFiles;
import com.smwuis.sooksook.domain.study.StudyFilesRepository;
import com.smwuis.sooksook.domain.study.StudyPost;
import com.smwuis.sooksook.domain.study.StudyPostRepository;
import com.smwuis.sooksook.service.study.StudyFilesService;
import com.smwuis.sooksook.service.study.StudyPostService;
import com.smwuis.sooksook.web.dto.study.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.IOUtils;
import org.springframework.http.*;
import org.springframework.util.CollectionUtils;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Api(tags = "StudyPostController API (스터디 게시글 API)")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudyPostController {

    private final StudyPostService studyPostService;
    private final StudyPostRepository studyPostRepository;
    private final StudyFilesRepository studyFilesRepository;
    private final StudyFilesService studyFilesService;

    // 스터디 게시글 작성
    @PostMapping(value = "/studyPost", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ApiOperation(value = "스터디 게시글 작성 (Postman 이용)", notes = "스터디 게시글 작성 API")
    public Long save(StudyPostVO studyPostVO) throws Exception {
        StudyPostSaveRequestDto saveRequestDto = StudyPostSaveRequestDto
                .builder()
                .studyBoardId(studyPostVO.getStudyBoardId())
                .title(studyPostVO.getTitle())
                .content(studyPostVO.getContent())
                .build();
        return studyPostService.save(saveRequestDto, studyPostVO.getFiles());
    }

    // 스터디 게시글 수정
    /*
      첨부파일이 있을 경우, 원래의 첨부파일은 지워지고 새롭게 올라온 첨부파일만 저장됨
      첨부파일이 없을 경우, 원래의 첨부파일 유지
     */
    @PutMapping(value = "/studyPost")
    @ApiOperation(value = "스터디 게시글 수정 (Postman 이용)", notes = "스터디 게시글 수정 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "게시글 id"),
            @ApiImplicitParam(name = "email", value = "이메일"),
    })
    public String update(@RequestParam Long id, String email, StudyPostVO studyPostVO) throws Exception {

        StudyPostUpdateRequestDto updateRequestDto = StudyPostUpdateRequestDto
                .builder()
                .title(studyPostVO.getTitle())
                .content(studyPostVO.getContent())
                .build();

        if (studyPostVO.getFiles() != null) {
            StudyPost studyPost = studyPostRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));
            List<StudyFiles> dbFilesList = studyFilesRepository.findAllByStudyPostId(studyPost);
            List<MultipartFile> multipartList = studyPostVO.getFiles();
            List<MultipartFile> addFileList = new ArrayList<>();

            if (CollectionUtils.isEmpty(dbFilesList)) {
                if (!CollectionUtils.isEmpty(multipartList)) {
                    for (MultipartFile multipartFile : multipartList)
                        addFileList.add(multipartFile);
                }
            } else {
                if (CollectionUtils.isEmpty(multipartList)) {
                    for (StudyFiles dbStudyFiles : dbFilesList)
                        studyFilesService.delete(dbStudyFiles.getId());
                } else {
                    List<String> dbOriginNameList = new ArrayList<>();

                    for (StudyFiles dbStudyFiles : dbFilesList) {
                        StudyPostFileResponseDto dbStudyPostFileResponseDto = studyFilesService.findByFileId(dbStudyFiles.getId());
                        String dbOrigFileName = dbStudyFiles.getOrigFileName();

                        if (!multipartList.contains(dbOrigFileName))
                            studyFilesService.delete(dbStudyFiles.getId());
                        else
                            dbOriginNameList.add(dbOrigFileName);
                    }

                    for (MultipartFile multipartFile : multipartList) {
                        String multipartOrigName = multipartFile.getOriginalFilename();
                        if (!dbOriginNameList.contains(multipartOrigName)) {
                            addFileList.add(multipartFile);
                        }
                    }
                }
            }

            return studyPostService.updateWithFiles(id, email, updateRequestDto, addFileList);
        } else {
            return studyPostService.update(id, email, updateRequestDto);
        }
    }

    // 스터디 게시글 삭제
    @DeleteMapping(value = "/studyPost")
    @ApiOperation(value = "스터디 게시글 삭제", notes = "스터디 게시글 삭제 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "게시글 id"),
            @ApiImplicitParam(name = "email", value = "이메일"),
    })
    public String delete(@RequestParam Long id, String email) {
        return studyPostService.delete(id, email);
    }

    // 특정 스터디 게시판 전체 글 조회
    @GetMapping(value = "/studyPosts/all")
    @ApiOperation(value = "스터디 게시판 게시글 리스트 전체 조회", notes = "스터디 게시판 게시글 리스트 전체 조회 API")
    @ApiImplicitParam(name = "studyBoardId", value = "게시판 id")
    public List<StudyPost> allList(@RequestParam Long studyBoardId) {
        return studyPostService.allList(studyBoardId);
    }

    // 스터디 게시글 상세 조회
    /*
        스터디 게시글 상세 조회로 글에 포함된 첨부 파일 아이디를 찾은 후, 
        파일 정보를 조회해서 이미지라면 이미지 조회로 이미지를 조회해서 글에 첨부,
        이미지가 아닌 파일이라면 파일 다운로드를 조회해서 글에 첨부
        
     */
    @GetMapping(value = "/studyPost")
    @ApiOperation(value = "스터디 게시판 게시글 상세 조회", notes = "스터디 게시판 게시글 상세 조회 API")
    @ApiImplicitParam(name = "id", value = "게시글 id")
    public StudyPostResponseDto view(@RequestParam Long id) {

        List<StudyFileIdResponseDto> studyFileIdResponseDtoList = studyFilesService.findAllByStudyPost(id);
        List<Long> fileId = new ArrayList<>();

        for (StudyFileIdResponseDto studyFileIdResponseDto : studyFileIdResponseDtoList) {
            fileId.add(studyFileIdResponseDto.getFileId());
        }

        return studyPostService.findById(id, fileId);
    }

    // 파일 정보 조회
    @GetMapping("/studyPost/fileInfo")
    @ApiOperation(value = "파일 정보 조회", notes = "파일 정보 조회 API")
    @ApiImplicitParam(name = "id", value = "파일 id")
    public StudyPostFileResponseDto findById(@RequestParam Long id) {
        return studyFilesService.findByFileId(id);
    }

    // 파일 이미지 ByteArray 조회
    @GetMapping(
            value = "/studyPost/fileImageByte",
            produces = {MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_JPEG_VALUE}
    )
    @ApiOperation(value = "게시글 이미지 ByteArray 조회", notes = "게시글 이미지 ByteArray 조회 API")
    @ApiImplicitParam(name = "id", value = "파일 id")
    public ResponseEntity<String> getImageByte(@RequestParam Long id) throws IOException {
        StudyPostFileResponseDto studyPostFileResponseDto = studyFilesService.findByFileId(id);
        String absolutePath
                = new File("").getAbsolutePath() + File.separator + File.separator;
        String path = studyPostFileResponseDto.getFilePath();

        InputStream imageStream = new FileInputStream(absolutePath + path);
        byte[] imageByteArray = IOUtils.toByteArray(imageStream);
        String encodedString = Base64.getEncoder().encodeToString(imageByteArray);
        imageStream.close();

        return new ResponseEntity<>(encodedString, HttpStatus.OK);
    }

    // 파일 이미지 출력
    @GetMapping(value = "/studyPost/fileImage",
            produces = {MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_JPEG_VALUE}
    )
    @ApiOperation(value = "게시글 이미지 출력", notes = "게시글 이미지 출력 API")
    @ApiImplicitParam(name = "id", value = "파일 id")
    public ResponseEntity<byte[]> getImage(@RequestParam Long id) throws IOException {
        StudyPostFileResponseDto studyPostFileResponseDto = studyFilesService.findByFileId(id);
        String absolutePath
                = new File("").getAbsolutePath() + File.separator + File.separator;
        String path = studyPostFileResponseDto.getFilePath();

        InputStream imageStream = new FileInputStream(absolutePath + path);
        byte[] imageByteArray = IOUtils.toByteArray(imageStream);
        imageStream.close();

        return new ResponseEntity<>(imageByteArray, HttpStatus.OK);
    }

    @GetMapping("/studyPost/fileDownload")
    @ApiOperation(value = "게시글 파일 다운로드", notes = "게시글 파일 다운로드 API")
    @ApiImplicitParam(name = "id", value = "파일 id")
    public byte[] downloadFiles(@RequestParam Long id, HttpServletRequest request, HttpServletResponse response) {

        StudyFiles studyFiles = studyFilesRepository.findById(id).orElse(null);

        byte[] down = null;

        try {
            File file = new File(studyFiles.getFilePath());

            down = FileCopyUtils.copyToByteArray(file);
            String encodedFileName = UriUtils.encode(studyFiles.getOrigFileName(), StandardCharsets.UTF_8);

            response.setHeader("Content-Disposition", "attachment; filename=\"" + encodedFileName + "\"");
            response.setContentLength(down.length);

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return down;
    }
}
