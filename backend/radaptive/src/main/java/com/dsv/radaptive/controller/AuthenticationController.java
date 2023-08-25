package com.dsv.radaptive.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dsv.radaptive.dto.request.LoginRequest;
import com.dsv.radaptive.dto.request.RegisterRequest;
import com.dsv.radaptive.dto.response.LoginResponse;
import com.dsv.radaptive.dto.response.RegisterResponse;
import com.dsv.radaptive.dto.response.UserResponse;
import com.dsv.radaptive.service.AuthenticationService;

import lombok.extern.slf4j.Slf4j;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public RegisterResponse register(@RequestBody RegisterRequest registerRequest) {
        log.info("registerRequest: " + registerRequest);
        return authenticationService.register(registerRequest);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest loginRequest) {
        return authenticationService.login(loginRequest.getUsername(), loginRequest.getPassword());
    }

    @GetMapping("/profile")
    public UserResponse details(@RequestParam String name, @RequestHeader("Authorization") String authorizationHeader) {
        return authenticationService.details(name, authorizationHeader);
    }

}
