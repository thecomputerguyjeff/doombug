package com.ti.server.posts.repository;

import com.ti.server.posts.entity.PostEntity;
import com.ti.server.user.entity.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends MongoRepository<PostEntity, String>
{
    public List<PostEntity> getPostEntitiesByOrderByCreateDateDesc();

    public Optional<PostEntity> findById(String id);

}