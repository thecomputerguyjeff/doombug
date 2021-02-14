package com.ti.server.test.controller;

import com.ti.server.test.model.TestModel;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/test")
@CrossOrigin(originPatterns = {"*localhost*", "/"})
public class TestController {

    @GetMapping
    public TestModel test() {
        return TestModel.builder().hello("hello").build();
    }
}
