package com.exam.service;

import java.util.List;
import java.util.Set;

import org.springframework.http.ResponseEntity;

import com.exam.entities.Category;
import com.exam.entities.Quiz;

public interface QuizService {
	
	public Quiz addQuiz(Quiz quiz);
	public Quiz updateQuiz(Quiz quiz);
	public Set<Quiz> getQuizzes();
	public Quiz getQuiz(long quizId);
	public void deleteQuiz(long quizId);
	public List<Quiz> getQuizzesOfCategory(Category category);
	

}
