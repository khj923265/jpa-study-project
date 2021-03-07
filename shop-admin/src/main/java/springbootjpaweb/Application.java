package com.jiwon.springbootjpaweb;

import lombok.extern.slf4j.Slf4j;
import org.flywaydb.core.Flyway;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Slf4j
@ConfigurationPropertiesScan("com.jiwon.springbootjpaweb")
@EnableJpaAuditing
@SpringBootApplication
@EnableWebMvc
public class Application extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }

    public static void main(String[] args) {
        Flyway flyway = Flyway.configure().dataSource("jdbc:h2:mem:testdb", "sa", "").load();
        flyway.migrate();
        SpringApplication.run(Application.class, args);
    }

}
