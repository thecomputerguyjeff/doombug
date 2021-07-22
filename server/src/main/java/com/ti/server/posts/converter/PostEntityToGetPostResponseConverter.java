package com.ti.server.posts.converter;

import com.ti.server.login.model.LoginResponse;
import com.ti.server.posts.entity.PostEntity;
import com.ti.server.posts.model.PostResponse;
import com.ti.server.user.entity.UserEntity;
import org.springframework.stereotype.Service;


import com.ti.server.login.model.LoginResponse;
import com.ti.server.user.entity.UserEntity;
@Service
public class PostEntityToGetPostResponseConverter {
    public PostResponse convert(PostEntity postEntity) {
        return PostResponse.builder()
                .id((postEntity.getId()))
                .author(postEntity.getAuthor())
                .content(postEntity.getContent())
                .title(postEntity.getTitle())
                .replies(postEntity.getReplies())
                .build();
    }
}
