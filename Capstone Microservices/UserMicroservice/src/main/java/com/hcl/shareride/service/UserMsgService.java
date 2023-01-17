package com.hcl.shareride.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.shareride.entity.UserMessages;
import com.shareride.repository.UserMsgRepo;

@Service // for business logic
public class UserMsgService implements IUserMsgService{

	@Autowired // ////used to inject the object dependency implicitly
	UserMsgRepo userMsgRepo;

	// to add the data into database
	public UserMessages addMessages(UserMessages msg) {
		return userMsgRepo.save(msg);
	}

	/// to retrieve the data from database
	public List<UserMessages> getMessages() {

		return userMsgRepo.findAll();
	}

	/// to retrieve the data by id
	public UserMessages getMessagebyId(int id) {

		return userMsgRepo.findById(id).get();
	}

}
