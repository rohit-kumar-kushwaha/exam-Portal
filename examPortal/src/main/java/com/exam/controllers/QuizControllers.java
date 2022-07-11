package com.exam.controllers;

import java.util.List;
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

import com.exam.entities.Category;
import com.exam.entities.Group;
import com.exam.entities.Quiz;
import com.exam.service.QuizService;

import java.util.stream.Collectors;
import java.util.stream.Stream;

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
	public ResponseEntity<?> getActiveQuizzes() {
		List<Quiz> quizzes = this.quizService.getActiveQuizzes();
		Stream<Quiz> filter = quizzes.stream().filter(q->q.getCategory()!=null);
		
		return ResponseEntity.ok(filter);
	}

	// get active quizzes
	@GetMapping("/category/active/{cid}")
	public ResponseEntity<?> getActiveQuizzesOfCategory(@PathVariable("cid") Long cid) {
		Category category = new Category();
		category.setCid(cid);
		List<Quiz> quizzes = this.quizService.getActiveQuizzesOfCategory(category);
		Stream<Quiz> filter = quizzes.stream().filter(q->q.getCategory()!=null);
		return ResponseEntity.ok(filter);
	}
	
	// get quiz of particular group
	@GetMapping("/group/{groupId}") 
	public List<Quiz> getQuizzesOfGroup(@PathVariable("groupId") Long groupId) {
		Group group = new Group();
		group.setGroupId(groupId);
		return this.quizService.getQuizzesOfGroup(group);
	}
	
//	get quizzes of all categories
	@GetMapping("/group")
	public ResponseEntity<?> getQuizzesOfOnlyGroup() {
//		return ResponseEntity.ok(this.quizService.getQuizzes());
		Set<Quiz> quizzes = this.quizService.getQuizzes();
		Stream<Quiz> filter = quizzes.stream().filter(q->q.getCategory()!=null);
		
		return ResponseEntity.ok(filter);
		
	}
	
	// get active quizzes of all group
	@GetMapping("/group/active")
	public ResponseEntity<?> getActiveQuizzesOfGroup() {
		List<Quiz> quizzes = this.quizService.getActiveQuizzes();
		Stream<Quiz> filter = quizzes.stream().filter(q->q.getGroups()!=null);
		
		return ResponseEntity.ok(filter);
	}
	
	// get active quizzes of particular group
	@GetMapping("/group/active/{groupId}")
	public ResponseEntity<?> getActiveQuizzesOfGroup(@PathVariable("groupId") Long groupId) {
		Group group = new Group();
		group.setGroupId(groupId);
		
		List<Quiz> quizzes = this.quizService.getActiveQuizzesOfGroup(group);
		Stream<Quiz> filter = quizzes.stream().filter(q->q.getGroups()!=null);
		return ResponseEntity.ok(filter);
	}
	
}
