package com.exam.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entities.Marks;
import com.exam.entities.Quiz;
import com.exam.entities.User;

public interface MarksRepository extends JpaRepository<Marks, Long> {
	
	public Set<Marks> findByUsers(User user);
	public Set<Marks> findByQuizzes(Quiz quiz);
}
