package com.smwuis.sooksook.web.controller.study;

import com.smwuis.sooksook.service.PostCommentService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "PostComment Api")
@RestController
@RequiredArgsConstructor
@RequestMapping("/post-comment")
public class PostCommentRestController {

    private final PostCommentService postCommentService;
}
