package com.dsv.radaptive.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String accountId;
    private String email;
    private String altEmail;
    private String firstName;
    private String lastName;
    private String commonName;
    private String contactNumber;
    private String password;
    private String confirmPassword;
    private String[] roles;
    private String[] groups;

}
