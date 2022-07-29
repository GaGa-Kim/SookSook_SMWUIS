package com.smwuis.sooksook.domain.study;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface StudyPostRepository extends JpaRepository<StudyPost, Long> {
    List<StudyPost> findAllByStudyBoardId(StudyBoard studyBoardId);
    List<StudyPost> findByCategory(String category);
    Long countByCreatedDateBetweenAndStudyBoardId(LocalDate start, LocalDate end, StudyBoard studyBoardId);
    List<StudyPost> findByTitleContaining(String keyword);

}
