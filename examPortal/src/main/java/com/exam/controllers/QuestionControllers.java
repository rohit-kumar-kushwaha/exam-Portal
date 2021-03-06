package com.exam.controllers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.entities.Question;
import com.exam.entities.Quiz;
import com.exam.service.QuestionService;
import com.exam.service.QuizService;



@RestController
@RequestMapping("/question")
@CrossOrigin("*")
public class QuestionControllers {
	
	@Autowired
	private QuestionService questionService;
	
	@Autowired
	private QuizService quizService;
	
	//add question
	@PostMapping("/")
	public ResponseEntity<Question> addQuestion(@RequestBody Question question) {
		return ResponseEntity.ok(this.questionService.addQuestion(question));
	}
	
	//update question
	@PutMapping("/")
	public ResponseEntity<Question> updateQuestion(@RequestBody Question question) {
		return ResponseEntity.ok(this.questionService.updateQuestion(question));
	}
	
	//get all question of any quiz for User
	@GetMapping("/quiz/{qid}")
	public ResponseEntity<?> getQuestionsOfQuiz(@PathVariable("qid") long qid) {
		
		Quiz quiz = this.quizService.getQuiz(qid);
		Set<Question> questions = quiz.getQuestions();
		List<Question> list =  new ArrayList(questions);
		System.out.println("LIST SIZE : "+list.size());
		
		if(list.size()>Integer.parseInt(quiz.getNumberOfQuestions())) {
			
			list = list.subList(0, Integer.parseInt(quiz.getNumberOfQuestions()));
			System.out.println("NUMBER OF QUESTION : "+Integer.parseInt(quiz.getNumberOfQuestions()));
		}
		
		list.forEach((q)-> {
			q.setAnswer("");
		});
		Collections.shuffle(list);
		
		return ResponseEntity.ok(list);
		
	}
	
	//get all question of any quiz for Admin
		@GetMapping("/quiz/all/{qid}")
		public ResponseEntity<?> getQuestionsOfQuizAdmin(@PathVariable("qid") long qid) {
			
			Quiz quiz = new Quiz();
			quiz.setQid(qid);
			Set<Question> questionsOfQuiz = this.questionService.getQuestionsOfQuiz(quiz);
			
			
			return ResponseEntity.ok(questionsOfQuiz);
			
		}
	
	
	
	// get single question
	@GetMapping("/{quesId}")
	public Question getQuestion(@PathVariable("quesId") long quesId) {
		return this.questionService.getQuestion(quesId);
	}
	
	//delete question
	@DeleteMapping("/{quesId}")
	public void deleteQuestion(@PathVariable("quesId") long quesId) {
		this.questionService.deleteQuestion(quesId);
	}
	
	//evaluate quiz
	@PostMapping("/evaluate-quiz")
	public ResponseEntity<?> evaluateQuiz(@RequestBody List<Question> questions) {
		System.out.println(questions);
		double marksGot = 0;
		int correctAnswers = 0;
		int attempted = 0;
		double marksSingle = Double.parseDouble(questions.get(0).getQuiz().getMaxMarks())/questions.size();
		for(Question q : questions){
			Question question = this.questionService.getQuestionById(q.getQuesId());
			
			if(q.getGivenAnswer() != null) {
				if(question.getAnswer().trim().equals(q.getGivenAnswer().trim())) {
//					correct
					correctAnswers++;
					marksGot += marksSingle;
					
				}
				
				if(q.getGivenAnswer()!=null || !q.getGivenAnswer().equals("")) {
					attempted++;
				}
			}
			
		
		}
		Map<String, Object> map = Map.of("marksGot",marksGot, "correctAnswers",correctAnswers, "attempted",attempted);
		return ResponseEntity.ok(map);
	}

}
