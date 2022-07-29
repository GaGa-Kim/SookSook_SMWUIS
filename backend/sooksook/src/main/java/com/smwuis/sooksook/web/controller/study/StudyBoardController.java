package com.smwuis.sooksook.web.controller.study;

import com.smwuis.sooksook.domain.study.StudyBoard;
import com.smwuis.sooksook.service.study.StudyBoardService;
import com.smwuis.sooksook.web.dto.study.StudyBoardResponseDto;
import com.smwuis.sooksook.web.dto.study.StudyBoardSaveRequestDto;
import com.smwuis.sooksook.web.dto.study.StudyBoardUpdateRequestDto;
import com.smwuis.sooksook.web.dto.user.UserResponseDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Api(tags = "StudyBoard API (스터디 게시판 API)")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StudyBoardController {

    private final StudyBoardService studyBoardService;

    // 강의 스터디 모집 게시판 글 작성
    @PostMapping(value = "/studyBoard/lecture")
    @ApiOperation(value = "강의 스터디 모집 게시판 글 작성", notes = "강의 스터디 모집 게시판 글 작성 API")
    public ResponseEntity<StudyBoardResponseDto> saveLecture(@RequestBody StudyBoardSaveRequestDto saveRequestDto) {
        return ResponseEntity.ok().body(studyBoardService.save(saveRequestDto, true));
    }

    // 강의 외 스터디 모집 게시판 글 작성
    @PostMapping(value = "/studyBoard/notLecture")
    @ApiOperation(value = "강의 외 스터디 모집 게시판 글 작성", notes = "강의 외 스터디 모집 게시판 글 작성 API")
    public ResponseEntity<StudyBoardResponseDto> saveNotLecture(@RequestBody StudyBoardSaveRequestDto saveRequestDto) {
        return ResponseEntity.ok().body(studyBoardService.save(saveRequestDto, false));
    }

    // 스터디 모집 게시판 글 수정
    @PutMapping(value = "/studyBoard")
    @ApiOperation(value = "스터디 모집 게시판 글 수정", notes = "스터디 모집 게시판 글 수정 API")
    @ApiImplicitParam(name = "id", value = "게시판 id", example = "1")
    public ResponseEntity<StudyBoardResponseDto> update(@RequestParam Long id, @RequestBody StudyBoardUpdateRequestDto updateRequestDto) {
        return ResponseEntity.ok().body(studyBoardService.update(id, updateRequestDto));
    }

    // 스터디 모집 게시판 글 삭제
    @DeleteMapping(value = "/studyBoard")
    @ApiOperation(value = "스터디 모집 게시판 글 삭제", notes = "스터디 모집 게시판 글 삭제 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "게시판 id", example = "1"),
            @ApiImplicitParam(name = "email", value = "이메일", example = "이메일"),
    })
    public ResponseEntity<Boolean> delete(@RequestParam Long id, String email) {
        return ResponseEntity.ok().body(studyBoardService.delete(id, email));
    }

    // 스터디 종료
    @PutMapping(value = "/studyBoard/finish")
    @ApiOperation(value = "스터디 종료", notes = "스터디 종료 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "게시판 id", example = "1"),
            @ApiImplicitParam(name = "email", value = "이메일", example = "이메일"),
    })
    public ResponseEntity<Boolean> finish(@RequestParam Long id, String email) {
        return ResponseEntity.ok().body(studyBoardService.finish(id, email));
    }

    // 스터디 모집 게시판 강의 스터디 / 강의 외 스터디 글 전체 리스트 조회
    @GetMapping(value = "/studyBoards/list")
    @ApiOperation(value = "스터디 모집 게시판 강의 스터디 / 강의 외 스터디 글 전체 리스트 조회", notes = "스터디 모집 게시판 강의 스터디 / 강의 외 스터디 글 전체 리스트 조회 API")
    @ApiImplicitParam(name = "lecture", value = "true면 스터디 게시판, false면 스터디 외 게시판", example = "true")
    public ResponseEntity<List<StudyBoardResponseDto>> studyList(@RequestParam Boolean lecture) {
        return ResponseEntity.ok().body(studyBoardService.studyList(lecture));
    }

    // 스터디 모집 게시판 글 상세 조회
    @GetMapping(value = "/studyBoard")
    @ApiOperation(value = "게시판 id 값으로 스터디 모집 게시판 글 하나 상세 조회", notes = "게시판 id 값으로 스터디 모집 게시판 글 하나 상세 조회 API")
    @ApiImplicitParam(name = "id", value = "게시판 id", example = "1")
    public ResponseEntity<StudyBoardResponseDto> view(@RequestParam Long id) {
        return ResponseEntity.ok().body(studyBoardService.findById(id));
    }
    
    // 스터디 게시판 강의 스터디 학부 별 검색
    @GetMapping(value = "/studyBoards/department")
    @ApiOperation(value = "스터디 모집 게시판 강의 스터디 학부 별 리스트 조회", notes = "스터디 모집 게시판 강의 스터디 학부 별 리스트 조회 API")
    @ApiImplicitParam(name = "department", value = "학부 이름", example = "학부 이름")
    public ResponseEntity<List<StudyBoardResponseDto>> departmentList(@RequestParam String department) {
        return ResponseEntity.ok().body(studyBoardService.departmentList(department));
    }

    // 스터디 게시판 강의 외 스터디 카테고리 별 검색
    @GetMapping(value = "/studyBoards/category")
    @ApiOperation(value = "스터디 모집 게시판 강의 외 스터디 카테고리 별 리스트 조회", notes = "스터디 모집 게시판 강의 외 스터디 카테고리 별 리스트 조회 API")
    @ApiImplicitParam(name = "category", value = "카테고리", example = "카테고리")
    public ResponseEntity<List<StudyBoardResponseDto>> categoryList(@RequestParam String category) {
        return ResponseEntity.ok().body(studyBoardService.categoryList(category));
    }

    // 일주일간 댓글이 많이 달린 인기 스터디 5개 조회
    @GetMapping(value = "/studyBoard/famous")
    @ApiOperation(value = "일주일간 댓글이 많이 달린 인기 스터디 5개 조회", notes = "일주일간 댓글이 많이 달린 인기 스터디 5개 조회 API")
    public ResponseEntity<List<Map<String, Object>>> famousList() {
        return ResponseEntity.ok().body(studyBoardService.famousList());
    }

    // 새로운 스터디 5개 조회
    @GetMapping(value = "/studyBoard/new")
    @ApiOperation(value = "새로운 스터디 5개 조회", notes = "새로운 스터디 5개 조회 API")
    public ResponseEntity<List<Map<String, Object>>> newList() {
        return ResponseEntity.ok().body(studyBoardService.newList());
    }

    // 스터디 게시판에 글이 많아 참여도 높은 스터디
    @GetMapping(value = "/studyBoard/hard")
    @ApiOperation(value = "참여도 높은 스터디 5개 조회", notes = "참여도 높은 스터디 5개 조회 API")
    public ResponseEntity<List<Map<String, Object>>> hardList() {
        return ResponseEntity.ok().body(studyBoardService.hardList());
    }

    // 스터디 모집 게시판 제목 검색
    @GetMapping(value = "/studyBoard/search")
    @ApiOperation(value = "스터디 모집 게시판 제목 검색", notes = "스터디 모집 게시판 제목 검색 API")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "keyword", value = "검색할 키워드", example = "제목"),
            @ApiImplicitParam(name = "page", value = "페이지 번호", example = "0"),
    })
    public ResponseEntity<List<StudyBoardResponseDto>> searchBoard(@RequestParam String keyword, int page) {
        return ResponseEntity.ok().body(studyBoardService.searchBoard(keyword, page));
    }
}