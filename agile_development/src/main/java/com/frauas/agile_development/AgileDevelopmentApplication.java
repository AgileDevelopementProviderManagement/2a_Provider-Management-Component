package com.frauas.agile_development;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EntityScan("com.frauas.agile_development.model")
public class AgileDevelopmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgileDevelopmentApplication.class, args);
	}

}
