package com.smwuis.sooksook.domain.study;

import com.smwuis.sooksook.domain.BaseTimeEntity;
import com.smwuis.sooksook.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@ToString
@Getter
@NoArgsConstructor
public class StudyBoard extends BaseTimeEntity { // 스터디 모집 게시판

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "StudyBoard_ID")
    private Long id; // 기본키

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn (name = "User_ID")
    private User userId; // 작성자 (fk)

    private String department; // 학부 (강의 스터디)
    
    private String subject; // 과목
    
    private String title; // 제목 (스터디 이름)

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content; // 내용

    private Long number; // 인원

    private String onoff; // 온/오프라인

    private Date period; // 기간

    private String password; // 비밀번호

    private boolean lecture; // 강의 스터디인지 여부 (true면 강의 스터디, false면 강의 외 스터디)

    private String category; // 카테고리 (강의 외 스터디)

    private boolean finished = false; // 스터디 종료 여부

    @OneToMany(mappedBy = "studyBoardId", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PasswordComment> passwordComments = new ArrayList<>(); // 비밀댓글 리스트

    @OneToMany(mappedBy = "studyBoardId", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<StudyPost> studyPostList = new ArrayList<>(); // 스터디 게시글 리스트

    @Builder
    public StudyBoard(User userId, String department, String subject, String title, String content,
                      Long number, String onoff, Date period, String password, boolean lecture, String category, boolean finished) {
        this.userId = userId;
        this.department = department;
        this.subject = subject;
        this.title = title;
        this.content = content;
        this.number = number;
        this.onoff = onoff;
        this.period = period;
        this.password = password;
        this.lecture = lecture;
        this.category = category;
        this.finished = finished;
    }

    public StudyBoard update(String department, String subject, String title, String content,
                             Long number, String onoff, Date period, String password, boolean lecture, String category, boolean finished) {
        this.department = department;
        this.subject = subject;
        this.title = title;
        this.content = content;
        this.number = number;
        this.onoff = onoff;
        this.period = period;
        this.password = password;
        this.lecture = lecture;
        this.category = category;
        this.finished = finished;
        return this;
    }

    public void setFinished() {
        this.finished = true;
    }

    public void setUser(User user) {
        this.userId = user;
    }

    public void addPasswordComments(PasswordComment passwordComment) {
        this.passwordComments.add(passwordComment);

        if(passwordComment.getStudyBoardId() != this)
            passwordComment.setStudyBoard(this);
    }

    public void addStudyPost(StudyPost studyPost) {
        this.studyPostList.add(studyPost);

        if(studyPost.getStudyBoardId() != this) {
            studyPost.setStudyBoardId(this);
        }
    }
}

