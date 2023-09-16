package com.hcl.shareride.exceptions;

@SuppressWarnings("serial")
public class OwnerNotFoundException extends RuntimeException {

	private String message;

	public OwnerNotFoundException(String message) {
		super(message);
		this.message = message;
	}
}
