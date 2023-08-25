package com.dsv.radaptive.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CandidateModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Email cannot be blank")
    @Pattern(regexp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$", message = "Email cannot be blank or Invalid")
    private String email;

    @NotBlank(message = "Email cannot be blank")
    @Pattern(regexp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$", message = "Email cannot be blank or Invalid")
    private String recoveryEmail;

    @NotBlank(message = "FirstName cannot be blank")
    private String firstName;
    private String lastName;

    @NotBlank(message = "title cannot be blank")
    private String title;
    private String candidateGender;

    @NotBlank(message = "DOB cannot be blank")
    private String dob;

    private String description;

    @NotBlank(message = "MobileNumber cannot be blank")
    @Pattern(regexp = "^[6-9]{1}[0-9]{9}", message = "Mobile number should be a 10 digit number with first digit from 6 to 9")
    private String mobileNumber;
    private String address1;
    private String address2;
    private String city;
    private String postalCode;
    private String candidateCountry;
    private String homeLocationCity;
    private String candidateState;

}
