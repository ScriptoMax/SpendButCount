package com.costtracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
//@EntityScan(basePackages = "com.costtracker.model")
@ComponentScan(basePackages = "com.costtracker.model, com.costtracker.repository, com.costtracker.controller")
@EnableJpaRepositories(basePackages = "com.costtracker.repository")
public class CostApplication {

	public static void main(String[] args) {
		SpringApplication.run(CostApplication.class, args);
	}

}
