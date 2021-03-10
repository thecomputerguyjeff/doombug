package com.ti.server.signup.controller;

import com.ti.server.signup.service.SignUpService;
import com.ti.server.user.entity.UserEntity;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@CrossOrigin(originPatterns = {"*localhost*", "/"})
@RequestMapping("/api/v1/signUp")
public class SignUpController
{
    private SignUpService signUpService;

    @PostMapping
    public ResponseEntity<Object> signUpUser(@RequestBody UserEntity userEntity) {
        return signUpService.saveUserInfo(userEntity);
    }
}