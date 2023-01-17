package com.hcl.shareride;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.ComponentScan;

@EnableEurekaClient
@SpringBootApplication

///Eureka owner client
public class OwnerMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(OwnerMicroserviceApplication.class, args);
	}

}
