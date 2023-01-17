package com.hcl.shareride.service;

import java.util.List;

import com.hcl.shareride.entity.UserMessages;

public interface IUserMsgService {
	public UserMessages addMessages(UserMessages msg);

	public List<UserMessages> getMessages();

	public UserMessages getMessagebyId(int id);
}
