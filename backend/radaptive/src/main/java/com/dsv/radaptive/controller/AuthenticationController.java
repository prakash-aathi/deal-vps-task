package com.dsv.radaptive.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dsv.radaptive.dto.request.RegisterRequest;
import com.dsv.radaptive.dto.response.UserResponse;
import com.dsv.radaptive.dto.response.LoginResponse;
import com.dsv.radaptive.dto.response.RegisterResponse;
import com.dsv.radaptive.service.AuthenticationService;

@RestController
public class AuthenticationController {

    AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public RegisterResponse register(@RequestBody RegisterRequest registerRequest) {
        System.out.println("registerRequest: " + registerRequest);
        return authenticationService.register(registerRequest);
    }

    @GetMapping("/login")
    public LoginResponse login(
            @RequestParam("username") String username,
            @RequestParam("password") String password) {
        return authenticationService.login(username, password);
    }

    @GetMapping("/profile")
    public UserResponse details(@RequestParam String name, @RequestHeader("Authorization") String authorizationHeader) {
        return authenticationService.details(name, authorizationHeader);
    }

}
