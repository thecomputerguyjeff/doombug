package com.ti.server.posts.entity;

import com.ti.server.posts.model.PostAuthor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "post")
public class PostEntity
{
    @Id
    private String id;
    private String title;
    private String content;
    private PostAuthor author;
    private ArrayList<PostEntity> replies;
    private ArrayList<PostAuthor> likes;
    private ArrayList<PostAuthor> dislikes;
    private String createDate; // To be created by the server and not passed in from the front end.
}
