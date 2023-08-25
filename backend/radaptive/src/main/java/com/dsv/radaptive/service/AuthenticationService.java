package com.dsv.radaptive.service;


import java.util.Base64;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.dsv.radaptive.dto.request.RegisterRequest;
import com.dsv.radaptive.dto.response.LoginResponse;
import com.dsv.radaptive.dto.response.RegisterResponse;
import com.dsv.radaptive.dto.response.UserResponse;
import com.dsv.radaptive.feign.RadaptiveInterface;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class AuthenticationService {

    private final RadaptiveInterface radaptiveInterface;

    @Value("${userId}")
    private String userId;

    @Value("${password}")
    private String password;

    public AuthenticationService(RadaptiveInterface radaptiveInterface) {
        this.radaptiveInterface = radaptiveInterface;
    }

    public RegisterResponse register(RegisterRequest registerRequest) {
        
        // set default values
        registerRequest.setRoles(new String[] { "ROLE_USER" });
        registerRequest.setGroups(new String[] { "RAD" });
        registerRequest.setCommonName(registerRequest.getFirstName() + " " + registerRequest.getLastName());
        log.info(registerRequest.toString());

        // Base Auth
        byte[] encodedBytes = Base64.getEncoder().encode((userId + ":" + password).getBytes());

        return radaptiveInterface.register(registerRequest, "Basic " + new String(encodedBytes));
    }

    public LoginResponse login(String username, String password) {
        String response = radaptiveInterface.login("login", username, password, "text");
        LoginResponse result = new LoginResponse();

        // convert string to LoginResponse
        String[] lines = response.split("\n");
        for (String line : lines) {
            String[] parts = line.split(" :", 2);
            if (parts.length == 2) {
                String key = parts[0].trim();
                String value = parts[1].trim();

                switch (key) {
                    case "authenticationtoken":
                        result.setAuthenticationtoken(value);
                        break;
                    case "success":
                        result.setSuccess(value);
                        break;
                    default:
                        break;
                }
            }
        }

        return result;
    }

    public UserResponse details(String name, String authorizationHeader) {
        return radaptiveInterface.details(name, authorizationHeader);
    }

}

