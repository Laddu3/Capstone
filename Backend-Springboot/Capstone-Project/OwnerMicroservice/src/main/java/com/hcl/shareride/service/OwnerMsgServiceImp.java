package com.hcl.shareride.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.shareride.entity.OwnerMsgs;
import com.hcl.shareride.repository.OwnerMsgRepo;

/*
 * @Author-HarshavardhanReddy
 */


@Service // for business logic
public class OwnerMsgServiceImp implements IOwnerMsgService {

	@Autowired // used to inject the object dependency implicitly
	OwnerMsgRepo ownerMsgRepo;

	// to add the message data into database

	public OwnerMsgs addMessages(OwnerMsgs msg) {
		return ownerMsgRepo.save(msg);
	}

	// to retrieve the message data into database
	public List<OwnerMsgs> getMessages() {

		return ownerMsgRepo.findAll();
	}

	// to retrieve the message data into database by id
	public OwnerMsgs getMessagebyId(int id) {

		return ownerMsgRepo.findById(id).get();
	}

}
