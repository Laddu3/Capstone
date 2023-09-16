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

import com.hcl.shareride.entity.OwnerMsgs;
import com.hcl.shareride.service.IOwnerMsgService;


@RestController //It is used for making restful web services
@RequestMapping("/omessage") //used to map web requests
@CrossOrigin(origins="http://localhost:3000")

/*
 * @Author-HarshavardhanReddy
 */

public class OwnerMsgController {
	
	@Autowired //used to inject the object dependency implicitly
	IOwnerMsgService ownerMsgService;
	
	@PostMapping("/insert") //to insert data into database
	public String AddMsg(@RequestBody OwnerMsgs msg)
	{
		ownerMsgService.addMessages(msg);
		return "Message Added Successfully";
	}
	@GetMapping("/messages") //to retrieve the data from database
	public List<OwnerMsgs> getMsgs()
	{
		return ownerMsgService.getMessages();
	}
	@GetMapping("/messages/{id}") //to retrieve the data from database by id
	public OwnerMsgs getMsgbyId(@PathVariable(value="id") Integer id)
	{
		return ownerMsgService.getMessagebyId(id);
	}

}
