package com.dsv.radaptive;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class RadaptiveApplication {

	public static void main(String[] args) {
		SpringApplication.run(RadaptiveApplication.class, args);
	}

}
