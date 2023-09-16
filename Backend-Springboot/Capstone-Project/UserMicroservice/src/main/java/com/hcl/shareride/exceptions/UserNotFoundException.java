package com.hcl.shareride.exceptions;


//class for UserNotFoundException
public class UserNotFoundException extends RuntimeException {
	private String message;

	public UserNotFoundException(String message) {
		super(message);
		this.message = message;
	}

}