package com.exam.controllers;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.entities.Marks;
import com.exam.entities.Quiz;
import com.exam.entities.User;
import com.exam.repository.MarksRepository;
import com.exam.service.MarksService;

@RestController
@RequestMapping("/marks")
@CrossOrigin("*")
public class MarksControllers {

	@Autowired
	private MarksService marksService;

	@Autowired
	private MarksRepository marksRepository;

	@PostMapping("/")
	public Marks addMarks(@RequestBody Marks marks) {
		
		String timePattern = "hh:mm:ss a";
		String datePattern = "dd/MM/yyyy";
		
//		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss a");
		LocalDateTime now = LocalDateTime.now();
		
		marks.setTime(now.format(DateTimeFormatter.ofPattern(timePattern)));
		marks.setDate(now.format(DateTimeFormatter.ofPattern(datePattern)));
//		System.out.println(dtf.format(now));
		return this.marksService.addMarks(marks);
	}

	// fatch by user id
	@GetMapping("/user/{userId}")
	public Set<Marks> findByUser(@PathVariable("userId") Long userId) {

		User user = new User();
		user.setId(userId);

		return this.marksRepository.findByUsers(user);
	}

	// fatch by Quiz id
	@GetMapping("/quiz/{quizId}")
	public Set<Marks> findByQuiz(@PathVariable("quizId") Long quizId) {

		Quiz quiz = new Quiz();
		quiz.setQid(quizId);

		return this.marksRepository.findByQuizzes(quiz);
	}

}
