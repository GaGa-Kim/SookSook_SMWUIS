package com.smwuis.sooksook.domain.study;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface StudyPostRepository extends JpaRepository<StudyPost, Long> {
    Optional<StudyPost> findByIdAndStudyBoardId(Long id, StudyBoard studyBoardId);
    List<StudyPost> findByStudyBoardId(StudyBoard studyBoardId);
}
