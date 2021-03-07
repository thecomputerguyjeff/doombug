package com.ti.server.login.service;

import com.ti.server.login.model.LoginRequest;
import com.ti.server.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Collections;

import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.HttpStatus.UNAUTHORIZED;

@Service
@RequiredArgsConstructor
@Slf4j
public class LoginService {

    private final UserService userService;

    public ResponseEntity<Object> login(LoginRequest loginRequest) {
        try {
            return new ResponseEntity<>(userService.getUser(loginRequest.getUsername(), loginRequest.getPassword()), OK);
        } catch (Exception e) {
            log.error("unable to login", e);
            return new ResponseEntity<>(Collections.singletonMap("Error", "Invalid Credentials"), UNAUTHORIZED);
        }
    }
}