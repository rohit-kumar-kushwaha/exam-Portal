package com.exam.helper;

public class UserNotFoundException extends Exception {
	
	public UserNotFoundException() {
		super("User with this name is not found in DB !! try with another username");
	}
	
	public UserNotFoundException(String msg) {
		super(msg);
	}

}
