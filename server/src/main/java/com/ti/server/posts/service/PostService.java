package com.ti.server.posts.service;

import com.ti.server.login.converter.UserEntityToLoginResponseConverter;
import com.ti.server.posts.converter.PostEntityToGetPostResponseConverter;
import com.ti.server.posts.entity.PostEntity;
import com.ti.server.posts.model.PostRequest;
import com.ti.server.posts.repository.PostRepository;
import com.ti.server.user.entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.List;

import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.HttpStatus.UNAUTHORIZED;

@Service
@RequiredArgsConstructor

public class PostService {
    private final PostRepository postRepository;
    private final PostService2 postService2;
    private final PostEntityToGetPostResponseConverter converter;



    public ResponseEntity<Object> getPostY(PostRequest postRequest) {
        try {
            return new ResponseEntity<>(converter.convert(postService2.getPost(postRequest.getId())), OK);
        } catch (Exception e) {

            return new ResponseEntity<>(Collections.singletonMap("Error", "Invalid Credentials"), UNAUTHORIZED);
        }
    }

    public ResponseEntity<String> saveNewPost(PostEntity postEntity) {

        try {

//            TimeZone timeZone = TimeZone.getTimeZone("UTC");
//            //DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
//            DateFormat dateFormat = new SimpleDateFormat("EEE, MMM d, ''yy" );
//            dateFormat.setTimeZone(timeZone);
//            String createDate = dateFormat.format(new Date());
            LocalDateTime myDateObj = LocalDateTime.now();

            DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("dd/MM/yyyy" + "\n" + " h:mm a");
            String createDate = dateFormat.format(myDateObj);

            String formattedDate = myDateObj.format(dateFormat);
            System.out.println("After formatting: " + formattedDate);

            postEntity.setCreateDate(formattedDate);
            postRepository.save(postEntity);

            return new ResponseEntity<>("Post has successfully been saved to the database.", HttpStatus.CREATED);

        } catch (Exception e) {
            return new ResponseEntity<>("Error saving post.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public List<PostEntity> getAllPosts() {
        return postRepository.getPostEntitiesByOrderByCreateDateDesc();
        //.subList(1, postRepository.getPostEntitiesByOrderByCreateDateDesc().size());
    }


}