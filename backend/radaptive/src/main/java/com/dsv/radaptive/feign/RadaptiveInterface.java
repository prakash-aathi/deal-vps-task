package com.dsv.radaptive.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

import com.dsv.radaptive.dto.request.RegisterRequest;
import com.dsv.radaptive.dto.response.RegisterResponse;
import com.dsv.radaptive.dto.response.UserResponse;

import feign.Headers;

@FeignClient(value = "radaptive", url = "https://contactsdatabase.radaptive.com/")
public interface RadaptiveInterface {

        @PostMapping("services/api/account")
        public RegisterResponse register(@RequestBody RegisterRequest registerRequest,
                        @RequestHeader(value = "Authorization", required = true) String authorizationHeader);

        @GetMapping(value = "/api", produces = "text/plain")
        @Headers("Accept: text/plain")
        public String login(@RequestParam("action") String action,
                        @RequestParam("username") String username,
                        @RequestParam("password") String password,
                        @RequestParam("retFormat") String retFormat);

        @GetMapping(value = "services/api/account/{name}", consumes = "application/json")
        public UserResponse details(@PathVariable("name") String name,
                        @RequestHeader(value = "Authorization", required = true) String authorizationHeader);

}
