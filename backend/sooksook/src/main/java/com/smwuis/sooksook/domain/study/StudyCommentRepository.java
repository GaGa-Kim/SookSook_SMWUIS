package com.smwuis.sooksook.domain.study;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudyCommentRepository extends JpaRepository<StudyComment, Long> {
    List<StudyComment> findAllByStudyPostIdAndUpIndex(StudyPost studyPost, Long upIndex);
    List<StudyComment> findAllByUpIndex(Long upIndex);
}
