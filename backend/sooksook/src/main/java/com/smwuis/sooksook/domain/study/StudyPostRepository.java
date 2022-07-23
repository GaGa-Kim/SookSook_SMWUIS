package com.smwuis.sooksook.domain.study;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudyPostRepository extends JpaRepository<StudyPost, Long> {
    List<StudyPost> findByStudyBoardId(StudyBoard studyBoardId);
}
