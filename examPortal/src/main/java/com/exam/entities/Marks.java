package com.exam.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "marks_details")
public class Marks {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long marksId;
	private String date;
	private String time;
	private double marks;
	private int attemptedQuestion;
	private int correctAnswer;
	
	

	@ManyToOne(fetch = FetchType.EAGER)
	Quiz quizzes;
	
	@ManyToOne(fetch = FetchType.EAGER)
	User users;

	public Marks() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Marks(long marksId, String date, double marks) {
		super();
		this.marksId = marksId;
		this.date = date;
		this.marks = marks;
	}
	
	
	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public int getAttemptedQuestion() {
		return attemptedQuestion;
	}

	public void setAttemptedQuestion(int attemptedQuestion) {
		this.attemptedQuestion = attemptedQuestion;
	}

	public int getCorrectAnswer() {
		return correctAnswer;
	}

	public void setCorrectAnswer(int correctAnswer) {
		this.correctAnswer = correctAnswer;
	}
	
	public long getMarksId() {
		return marksId;
	}

	public void setMarksId(long marksId) {
		this.marksId = marksId;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public double getMarks() {
		return marks;
	}

	public void setMarks(double marks) {
		this.marks = marks;
	}

	public Quiz getQuizzes() {
		return quizzes;
	}

	public void setQuizzes(Quiz quizzes) {
		this.quizzes = quizzes;
	}

	public User getUsers() {
		return users;
	}

	public void setUsers(User user) {
		this.users = user;
	}
	
}
