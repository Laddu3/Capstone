package com.hcl.shareride.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.shareride.entity.UserMessages;
import com.hcl.shareride.repository.UserMessagesRepository;

/*
 * @Author- MeduriAmani
 */

@Service  //for business logic
public class UserMessageServiceImp implements IUserMessageService {
	
	@Autowired   //  ////used to inject the object dependency implicitly
	UserMessagesRepository userMessageRepo;
	
	
	//to add the data into database
	public UserMessages addMessages(UserMessages message)
	{
			return userMessageRepo.save(message);
	}

	/// to retrieve the data from database
	public List<UserMessages> getMessages() {
		
		return userMessageRepo.findAll();
	}
	
	///to retrieve the data by id
	public UserMessages getMessagebyId(int id) {
		
		return userMessageRepo.findById(id).get();
	}

}
