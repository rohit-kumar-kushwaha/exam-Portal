package com.exam.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entities.Category;
import com.exam.entities.Group;
import com.exam.entities.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long>{
	
	public List<Quiz> findByCategory(Category category);
	public List<Quiz> findByActive(Boolean b);
	public List<Quiz> findByCategoryAndActive(Category category, Boolean b);
	public List<Quiz> findByGroupsAndActive(Group group, Boolean b);
	public List<Quiz> findByGroups(Group group);

}
