package com.ti.server.login.controller;

import com.ti.server.login.model.LoginRequest;
import com.ti.server.login.service.LoginService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/login")
@CrossOrigin(originPatterns = {"*localhost*", "/"})
public class LoginController {

    private final LoginService loginService;

    @PostMapping
    public ResponseEntity<Object> getPrimaryKey(@RequestBody LoginRequest loginRequest) {
        return loginService.login(loginRequest);
    }
}