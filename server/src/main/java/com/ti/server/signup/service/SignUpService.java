package com.ti.server.signup.service;

import com.ti.server.user.entity.UserEntity;
import com.ti.server.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class SignUpService {
    private final UserRepository userRepository;

    public ResponseEntity<Object> saveUserInfo(UserEntity userEntity) {

        try {
            userRepository.save(userEntity);
            return new ResponseEntity<>("User has been successfully signed up and saved in the database.", HttpStatus.CREATED);

        } catch (Exception e) {
            return new ResponseEntity<>("Error. User info wasn't saved and user has not been signed up.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}