package com.exam.controllers;

import java.util.List;

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

import com.exam.entities.Category;
import com.exam.entities.Quiz;
import com.exam.service.QuizService;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizControllers {

	@Autowired
	private QuizService quizService;

	// add quiz
	@PostMapping("/")
	public ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz) {
		return ResponseEntity.ok(this.quizService.addQuiz(quiz));
	}

	// update quiz
	@PutMapping("/")
	public ResponseEntity<Quiz> updateQuiz(@RequestBody Quiz quiz) {
		return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
	}

	// get quizzes
	@GetMapping("/")
	public ResponseEntity<?> getQuizzes() {
		return ResponseEntity.ok(this.quizService.getQuizzes());
	}

	// get quiz
	@GetMapping("/{qid}")
	public Quiz getQuiz(@PathVariable("qid") long qid) {
		return this.quizService.getQuiz(qid);
	}

	// delete quiz
	@DeleteMapping("/{qid}")
	public void deleteQuiz(@PathVariable("qid") long qid) {
		this.quizService.deleteQuiz(qid);
	}

	// get all quizzes of particular category
	@GetMapping("/category/{cid}")
	public List<Quiz> getQuizzesOfCategory(@PathVariable("cid") Long cid) {

		Category category = new Category();
		category.setCid(cid);
		return this.quizService.getQuizzesOfCategory(category);
	}

	// get active quizzes
	@GetMapping("/active")
	public List<Quiz> getActiveQuizzes() {
		return this.quizService.getActiveQuizzes();
	}

	// get active quizzes
	@GetMapping("/category/active/{cid}")
	public List<Quiz> getActiveQuizzesOfCategory(@PathVariable("cid") Long cid) {
		Category category = new Category();
		category.setCid(cid);
		return this.quizService.getActiveQuizzesOfCategory(category);
	}
}
