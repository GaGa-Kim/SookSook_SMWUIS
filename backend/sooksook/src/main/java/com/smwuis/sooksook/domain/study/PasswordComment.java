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
public class PasswordComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PasswordComment_ID")
    private Long id; // 기본키

    /* 변경 필요
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn (name = "id")
    private User uid;
    */
    private String uid; // 작성자 (fk)

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "StudyBoard_ID")
    private StudyBoard studyBoardId; // 게시판 (fk)

    private String content; // 내용

    private Long upIndex; // 상위 댓글 번호

    @ElementCollection(targetClass = Long.class)
    private List<Long> childList = new ArrayList<>();

    private boolean isRemoved = false; // 댓글 삭제 여부

    @Builder
    public PasswordComment(String uid, StudyBoard studyBoardId, String content, Long upIndex, List<Long> childList, boolean isRemoved) {
        this.uid = uid;
        this.studyBoardId = studyBoardId;
        this.content = content;
        this.upIndex = upIndex;
        this.childList = childList;
        this.isRemoved = isRemoved;
    }

    public PasswordComment update(String content) {
        this.content = content;
        return this;
    }

    public void remove() {
        this.content = "삭제된 댓글입니다.";
        this.isRemoved = true;
    }

    /* 연관관계 편의 메소드 작성 필요
    public void setUser(User uid) {
        this.uid = uid;
     */

    public void setStudyBoard(StudyBoard studyBoardId) {
        this.studyBoardId = studyBoardId;
    }

}