package com.exam.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entities.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long>{

}