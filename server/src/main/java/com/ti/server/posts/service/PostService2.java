package com.ti.server.posts.service;

import com.ti.server.posts.entity.PostEntity;
import com.ti.server.posts.repository.PostRepository;
import com.ti.server.user.entity.UserEntity;
import com.ti.server.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostService2 {
    private final PostRepository postRepository;

    public PostEntity getPost(String id) {
        return postRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException(String.format("No User found for %s", id)));
    }
}
