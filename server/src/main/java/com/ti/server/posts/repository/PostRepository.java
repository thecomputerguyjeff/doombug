package com.ti.server.posts.repository;

import com.ti.server.posts.entity.PostEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends MongoRepository<PostEntity, String>
{
    public List<PostEntity> getPostEntitiesByOrderByCreateDateDesc();
}