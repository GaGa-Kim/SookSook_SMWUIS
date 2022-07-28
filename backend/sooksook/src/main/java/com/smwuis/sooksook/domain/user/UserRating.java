package com.smwuis.sooksook.domain.user;

import com.smwuis.sooksook.domain.BaseTimeEntity;
import com.smwuis.sooksook.domain.study.StudyBoard;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@ToString
@Getter
@NoArgsConstructor
public class UserRating extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "User_ID")
    private Long id; // 기본키

    @Column(nullable = false)
    private String receiverEmail; // 별점 받는 사람

    @Column(nullable = false)
    private String giverEmail; // 별점 주는 사람

    @Column(nullable = false)
    private Long studyBoardId; // 스터디 게시판 아이디

    @Column(nullable = false)
    private String subject; // 과목명

    @Column(nullable = false, columnDefinition = "TEXT")
    private String contents; // 평가 내용

    @Column(nullable = false)
    private float score; // 평가 별점

    @Builder
    public UserRating(String receiverEmail, String giverEmail, Long studyBoardId, String subject, String contents, float score) {
        this.receiverEmail = receiverEmail;
        this.giverEmail = giverEmail;
        this.studyBoardId = studyBoardId;
        this.subject = subject;
        this.contents = contents;
        this.score = score;
    }

    public UserRating update(String contents, float score) {
        this.contents = contents;
        this.score = score;
        return this;
    }
}

