package com.dsv.radaptive.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CandidateResponse {

    private Long id;
    private String firstName;
    private String email;
    private String dob;
    private String title;

}
