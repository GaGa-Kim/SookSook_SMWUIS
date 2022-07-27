package com.smwuis.sooksook.domain.study;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudyBoardRepository extends JpaRepository<StudyBoard, Long> {
    List<StudyBoard> findByLecture(Boolean lecture);
    List<StudyBoard> findByLectureAndDepartment(Boolean lecture, String department);
    List<StudyBoard> findByLectureAndCategory(Boolean lecture, String category);
    List<StudyBoard> findTop5ByOrderByIdDesc();
    Page<StudyBoard> findByTitleContaining(String keyword, Pageable pageable);
}
