package com.hgfluid.Foreignwebsite;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.hgfluid.Foreignwebsite.mapper")
public class ForeignWebsiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(ForeignWebsiteApplication.class, args);
	}

}