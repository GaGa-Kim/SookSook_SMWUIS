package com.smwuis.sooksook.domain.user;

import com.smwuis.sooksook.domain.BaseTimeEntity;

import javax.persistence.*;

import lombok.*;

@Entity
@ToString
@Getter
@NoArgsConstructor
@Table(name = "users")
public class User extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "User_ID")
    private Long id; // 기본키

    @Column(nullable = false)
    private String name; // 이름

    @Column(nullable = false)
    private String loginId; // 아이디

    @Column(nullable = false)
    private String email; // 이메일

    @Column(nullable = false)
    private String nickname; // 닉네임

    @Column(nullable = false)
    private String password; // 비밀번호

    @Column(columnDefinition = "TEXT", nullable = false)
    private String introduction; // 한 줄 소개글

    @Column(nullable = false)
    private int points; // 포인트

    @Column(nullable = false)
    private String rating; // 등급

    @Builder
    public User(String name, String loginId, String email, String nickname, String password, String introduction, int points, String rating) {
        this.name = name;
        this.loginId = loginId;
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.introduction = introduction;
        this.points = points;
        this.rating = rating;
    }

    public User update(String name, String nickname, String password, String introduction) {
        this.name = name;
        this.nickname = nickname;
        this.password = password;
        this.introduction = introduction;
        return this;
    }

    public void updatePoints(int points) {
        this.points = points + 1;

        if (this.points >= 100) {
            updateRating("눈송 등급");
        }
    }

    public void updateRating(String rating) {
        this.rating = rating;
    }
}