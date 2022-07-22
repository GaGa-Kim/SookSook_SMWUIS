package com.smwuis.sooksook.domain.study;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@ToString
@Getter
@NoArgsConstructor
public class StudyPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "StudyPost_ID")
    private Long id; // 기본키

    /* 변경 필요
    @ManyToOne
    @JoinColumn (name = "id")
    private User uid;
    */
    private String uid; // 작성자 (fk)

    @ManyToOne
    @JoinColumn(name = "StudyBoard_ID")
    private StudyBoard studyBoardId; // 스터디 게시판 (fk)

    private String title; // 제목

    private String content; // 내용

    /*
    @OneToMany
    private List<StudyFiles> studyFiles = new ArrayList<>();
    */

    @OneToMany(mappedBy = "studyPostId", cascade = {CascadeType.ALL}, orphanRemoval = true)
    private List<StudyComment> studyComment = new ArrayList<>(); // 댓글 리스트
    
    @Builder
    public StudyPost(String uid, StudyBoard studyBoardId, String title, String content) {
        this.uid = uid;
        this.studyBoardId = studyBoardId;
        this.title = title;
        this.content = content;
    }

    public StudyPost update(String title, String content) {
        this.title = title;
        this.content = content;
        return this;
    }

    /* 연관관계 편의 메소드 작성 필요
    public void setUser(User uid) {
        this.uid = uid;
     */

    public void setStudyBoardId(StudyBoard studyBoard) {
        this.studyBoardId = studyBoard;
    }

    /*
    public void addStudyFiles(StudyFiles studyFiles) {
        this.studyFiles.add(studyFiles);

        if (studyFiles.getStudyPost() != this)
            studyFiles.setStudyPost(this);
    }
    */

    public void addStudyComment(StudyComment studyComment) {
        this.studyComment.add(studyComment);

        if (studyComment.getStudyPostId() != this)
            studyComment.setStudyPost(this);
    }

}
