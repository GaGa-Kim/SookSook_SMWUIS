package com.smwuis.sooksook.service;


import com.smwuis.sooksook.repository.PostRepository;
import com.smwuis.sooksook.repository.UserRatingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;
}
