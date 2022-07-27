package com.smwuis.sooksook.web.controller.study;

import com.smwuis.sooksook.service.PostService;
import com.smwuis.sooksook.service.UserService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "Post Api")
@RestController
@RequiredArgsConstructor
@RequestMapping("/post")
public class PostRestController {

    private final PostService postService;
}
