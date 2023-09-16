package com.hcl.shareride.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.shareride.entity.UserMessages;
import com.hcl.shareride.service.IUserMessageService;

/*
 * @Author- MeduriAmani
 */

@RestController // It is used for making restful web services
@RequestMapping("/usermessage") // used to map web requests

@CrossOrigin(origins="http://localhost:3000")
public class UserMsgController {

	@Autowired // used to inject the object dependency implicitly
	IUserMessageService userMessageService;

	@PostMapping("/add") /// to insert the data into database
	public String addMsg(@RequestBody UserMessages message) {
		userMessageService.addMessages(message);
		return "Message Added Successfully";
	}

	@GetMapping("/messages") // to retrieve the data from database
	public List<UserMessages> getMsgs() {
		return userMessageService.getMessages();
	}

	@GetMapping("/messages/{id}") ////// to retrieve the data using id
	public UserMessages getMsgbyId(@PathVariable(value = "id") Integer id) /// @pathvariable used to extract values
	{
		return userMessageService.getMessagebyId(id);
	}

}
