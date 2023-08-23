package com.dsv.radaptive.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Demo {
    
    @GetMapping
    public String check() {
        return "working";
    }
}
