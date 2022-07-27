package com.smwuis.sooksook.repository;

import com.smwuis.sooksook.domain.post.PostComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostCommentRepository extends JpaRepository<PostComment, Long> {
}
