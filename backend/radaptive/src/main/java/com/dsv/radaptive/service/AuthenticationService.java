package com.dsv.radaptive.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.dsv.radaptive.dto.request.RegisterRequest;
import com.dsv.radaptive.dto.response.LoginResponse;
import com.dsv.radaptive.dto.response.RegisterResponse;
import com.dsv.radaptive.dto.response.UserResponse;
import com.dsv.radaptive.feign.RadaptiveInterface;

@Service
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
        LoginResponse adminResponse = login(userId, password);

        return radaptiveInterface.register(registerRequest, "Bearer " + adminResponse.getAuthenticationtoken());
    }

    public LoginResponse login(String username, String password) {
        String response = radaptiveInterface.login("login", username, password, "text");
        LoginResponse result = new LoginResponse();

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
