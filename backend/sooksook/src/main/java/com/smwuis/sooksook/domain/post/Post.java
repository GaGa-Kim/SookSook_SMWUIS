package com.smwuis.sooksook.domain.post;

import com.smwuis.sooksook.domain.BaseTimeEntity;
import com.smwuis.sooksook.domain.user.User;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "post")
public class Post extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "post_id", unique = true)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user; // 작성자 (fk)
    @Column(name = "p_title", nullable = false)
    private String title; // 제목
    @Column(name = "p_content", nullable = false)
    private String content; // 내용

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Files> files = new ArrayList<>();

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<PostComment> postCommentList = new ArrayList<>();

    @Column(name = "p_category", nullable = false)
    private String category;

    @Builder
    public Post(User user, String title, String content, List<Files> studyFiles, String category) {
        this.user = user;
        this.title = title;
        this.content = content;
        this.files = studyFiles;
        this.category = category;
    }
}
