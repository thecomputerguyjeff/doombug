package com.ti.server.login.controller;

import com.ti.server.login.model.UserPass;
import com.ti.server.login.service.LoginService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@AllArgsConstructor
@RequestMapping("/api/v1")
@CrossOrigin(originPatterns = {"*localhost*", "/"})
public class LoginController {
    private final LoginService loginService;
    @PostMapping("/login")
    public Object getPrimaryKey(@RequestBody UserPass userPass) {

        return loginService.login(userPass);

    }
}
