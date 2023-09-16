package com.hcl.shareride.service;

/*
 * @Author- MeduriAmani
 */

import java.util.List;

import com.hcl.shareride.entity.UserMessages;

public interface IUserMessageService {

	public UserMessages addMessages(UserMessages message);
	
	public List<UserMessages> getMessages();
	
	public UserMessages getMessagebyId(int id);
	
}
