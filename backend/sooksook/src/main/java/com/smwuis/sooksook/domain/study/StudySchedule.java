package com.smwuis.sooksook.domain.study;

import com.smwuis.sooksook.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@ToString
@Getter
@NoArgsConstructor
public class StudySchedule extends BaseTimeEntity {

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

    private Date period; // 기한

    private String content; // 내용

    @Builder
    public StudySchedule(String uid, StudyBoard studyBoardId, Date period, String content) {
        this.uid = uid;
        this.studyBoardId = studyBoardId;
        this.period = period;
        this.content = content;
    }

    public StudySchedule update(Date period, String content) {
        this.period = period;
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
}
