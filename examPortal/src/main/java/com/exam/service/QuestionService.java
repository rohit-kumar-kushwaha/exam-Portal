package com.exam.service;

import java.util.Set;

import com.exam.entities.Question;
import com.exam.entities.Quiz;

public interface QuestionService  {
	
	public Question addQuestion(Question question);
	public Question updateQuestion(Question question);
	public Set<Question> getQuestions();
	public Question getQuestion(long questionId);
	public Set<Question> getQuestionsOfQuiz(Quiz quiz);
	public void deleteQuestion(long questionId);
	
	public Question getQuestionById(Long questionId);
	
}
