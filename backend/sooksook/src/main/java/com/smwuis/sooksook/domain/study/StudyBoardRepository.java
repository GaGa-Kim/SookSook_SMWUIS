package com.smwuis.sooksook.domain.study;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudyBoardRepository extends JpaRepository<StudyBoard, Long> {
    List<StudyBoard> findByCategory(String category);
    List<StudyBoard> findByDepartment(String department);
}
