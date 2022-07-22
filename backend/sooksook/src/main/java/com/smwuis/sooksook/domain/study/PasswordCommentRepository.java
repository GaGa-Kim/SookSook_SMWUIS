package com.smwuis.sooksook.domain.study;

import com.smwuis.sooksook.service.PasswordCommentService;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PasswordCommentRepository extends JpaRepository<PasswordComment, Long> {
    List<PasswordComment> findAllByStudyBoardIdAndUpIndex(StudyBoard studyBoard, Long upIndex);
    List<PasswordComment> findAllByUpIndex(Long upIndex);
}
