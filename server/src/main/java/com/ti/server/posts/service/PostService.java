package com.ti.server.posts.service;

import com.ti.server.posts.entity.PostEntity;
import com.ti.server.posts.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

@Service
@RequiredArgsConstructor

public class PostService
{
    private final PostRepository postRepository;

    public ResponseEntity<String> saveNewPost(PostEntity postEntity) {

        try {

            TimeZone timeZone = TimeZone.getTimeZone("UTC");
            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
            dateFormat.setTimeZone(timeZone);
            String createDate = dateFormat.format(new Date());

            postEntity.setCreateDate(createDate);
            postRepository.save(postEntity);

            return new ResponseEntity<>("Post has successfully been saved to the database.", HttpStatus.CREATED);

        } catch (Exception e) {
            return new ResponseEntity<>("Error saving post.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public List<PostEntity> getAllPosts() {
        return postRepository.getPostEntitiesByOrderByCreateDateDesc();
    }
}
