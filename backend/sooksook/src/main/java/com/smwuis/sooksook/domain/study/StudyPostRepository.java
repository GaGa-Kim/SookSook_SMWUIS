package com.smwuis.sooksook.domain.study;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface StudyPostRepository extends JpaRepository<StudyPost, Long> {
    List<StudyPost> findByStudyBoardId(StudyBoard studyBoardId);
    Long countByCreatedDateBetweenAndStudyBoardId(LocalDate start, LocalDate end, StudyBoard studyBoardId);
}
