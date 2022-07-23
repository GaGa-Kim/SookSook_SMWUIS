package com.smwuis.sooksook.domain.study;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudyMemberRepository extends JpaRepository<StudyMember, Long> {
    List<StudyMember> findAllByStudyBoardId(StudyBoard studyBoardId);
}
