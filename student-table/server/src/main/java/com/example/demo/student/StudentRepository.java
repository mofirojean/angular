package com.example.demo.student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    /* Transform to SQL command: SELECT * FROM student WHERE email=? or
    * @Query("SELECT s FROM Student (ie the Student class we mapped with @Entity) s WHERE s.email = ?1")
    * */
    @Query("SELECT s FROM Student s WHERE s.email = ?1")
    Optional<Student> findStudentByEmail(String email);
}
