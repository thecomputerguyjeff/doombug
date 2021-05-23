package com.ti.server.posts.controller;

import com.ti.server.posts.entity.PostEntity;
import com.ti.server.posts.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(originPatterns = {"*localhost*", "/"})
@RequestMapping("/api/v1")
public class PostController
{
    private final PostService postService;

    @PostMapping("/post")
    public ResponseEntity<String> saveNewPost(@RequestBody PostEntity postEntity) {
        return postService.saveNewPost(postEntity);
    }

    @GetMapping("/feed")
    public List<PostEntity> getAllPosts() {
        return postService.getAllPosts();
    }
}