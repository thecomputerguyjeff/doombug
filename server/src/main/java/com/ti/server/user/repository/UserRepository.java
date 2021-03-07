package com.ti.server.user.repository;

import com.ti.server.user.entity.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<UserEntity, String> {
    public Optional<UserEntity> findByUsernameAndPassword(String username, String password);
}