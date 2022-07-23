package com.smwuis.sooksook.domain.study;

import com.smwuis.sooksook.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@ToString
@Getter
@NoArgsConstructor
public class StudyMember extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    private Long posts; // 글 작성 수

    private Long comments; // 댓글 작성 수

    /* 변경 필요
    String uid -> User uid
    */
    @Builder
    public StudyMember(String uid, StudyBoard studyBoardId, Long posts, Long comments) {
        this.uid = uid;
        this.studyBoardId = studyBoardId;
        this.posts = posts;
        this.comments = comments;
    }

    /* 연관관계 편의 메소드 작성 필요
    public void setUser(User uid) {
        this.uid = uid;
     */

    public void setStudyBoardId(StudyBoard studyBoard) {
        this.studyBoardId = studyBoard;
    }
}
