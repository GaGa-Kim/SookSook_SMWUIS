package com.smwuis.sooksook.domain.study;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface PasswordCommentRepository extends JpaRepository<PasswordComment, Long> {
    List<PasswordComment> findAllByStudyBoardIdAndUpIndex(StudyBoard studyBoard, Long upIndex);
    List<PasswordComment> findAllByUpIndex(Long upIndex);
    Long countByCreatedDateBetweenAndStudyBoardId(LocalDate start, LocalDate end, StudyBoard studyBoardId);
}
