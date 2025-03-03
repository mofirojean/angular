package com.example.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

import static java.time.Month.FEBRUARY;
import static java.time.Month.JANUARY;

@Configuration
public class StudentConfig {

    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
            Student mariam = new Student(
                    "Mariam",
                    "marian.jamal@gmail.com",
                    LocalDate.of(2022, JANUARY, 12)
            );

            Student alex = new Student(
                    "Alex",
                    "alex.jamal@gmail.com",
                    LocalDate.of(2004, FEBRUARY, 18)
            );

            repository.saveAll(
                    List.of(alex, mariam)
            );
        };
    }
}
