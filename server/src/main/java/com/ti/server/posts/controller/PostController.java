package com.ti.server.posts.controller;

import com.ti.server.login.model.LoginRequest;
import com.ti.server.posts.entity.PostEntity;
import com.ti.server.posts.model.PostRequest;
import com.ti.server.posts.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1")
@CrossOrigin(originPatterns = {"*localhost*", "/"})
public class PostController
{
    private final PostService postService;

    @PostMapping("/saveNewPost")
    public ResponseEntity<String> saveNewPost(@RequestBody PostEntity postEntity) {
        return postService.saveNewPost(postEntity);
    }

    @GetMapping("/getAllPosts")
    public List<PostEntity> getAllPosts() {
        return postService.getAllPosts();
    }

    @PostMapping("/getPost")
    public ResponseEntity<Object> getPostY(@RequestBody PostRequest postRequest) {
        return postService.getPostY(postRequest);
    }
}