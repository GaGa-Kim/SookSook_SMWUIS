package com.smwuis.sooksook.service;


import com.smwuis.sooksook.repository.PostCommentRepository;
import com.smwuis.sooksook.repository.UserRatingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostCommentServiceImpl implements PostCommentService {

    private final PostCommentRepository postCommentRepository;
}
