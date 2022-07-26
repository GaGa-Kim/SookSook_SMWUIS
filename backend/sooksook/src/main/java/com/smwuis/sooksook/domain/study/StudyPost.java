package com.smwuis.sooksook.domain.study;

import com.smwuis.sooksook.domain.BaseTimeEntity;
import com.smwuis.sooksook.domain.user.User;
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
public class StudyPost extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "StudyPost_ID")
    private Long id; // 기본키

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn (name = "User_ID")
    private User userId; // 작성자 (fk)

    @ManyToOne
    @JoinColumn(name = "StudyBoard_ID")
    private StudyBoard studyBoardId; // 스터디 게시판 (fk)

    private String title; // 제목

    private String content; // 내용

    @OneToMany(mappedBy = "studyPostId", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<StudyFiles> studyFiles = new ArrayList<>();

    // @OneToMany(mappedBy = "studyPostId", cascade = {CascadeType.PERSIST, CascadeType.REMOVE}, orphanRemoval = true)
    // private List<StudyComment> studyComment = new ArrayList<>(); // 댓글 리스트
    
    @Builder
    public StudyPost(User userId, StudyBoard studyBoardId, String title, String content) {
        this.userId = userId;
        this.studyBoardId = studyBoardId;
        this.title = title;
        this.content = content;
    }

    public StudyPost update(String title, String content) {
        this.title = title;
        this.content = content;
        return this;
    }

    public void setUser(User user) {
        this.userId = user;
    }

    public void setStudyBoardId(StudyBoard studyBoard) {
        this.studyBoardId = studyBoard;

        if(!studyBoardId.getStudyPostList().contains(this))
            studyBoardId.getStudyPostList().add(this);
    }

    public void addStudyFiles(StudyFiles studyFiles) {
        this.studyFiles.add(studyFiles);

        if (studyFiles.getStudyPostId() != this)
            studyFiles.setStudyPost(this);
    }

    /*
    public void addStudyComment(StudyComment studyComment) {
        this.studyComment.add(studyComment);

        if (studyComment.getStudyPostId() != this)
            studyComment.setStudyPost(this);
    }

     */

}
