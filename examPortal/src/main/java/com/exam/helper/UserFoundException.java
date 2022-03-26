package com.exam.helper;

public class UserFoundException extends Exception{

	public UserFoundException() {
		super("User with this name is already there in DB !! try with another username");
	}
	
	public UserFoundException(String msg) {
		super(msg);
	}
}
