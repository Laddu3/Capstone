package com.hcl.shareride.service;

import java.util.List;

import com.hcl.shareride.entity.OwnerMsgs;


/*
 * @Author-HarshavardhanReddy
 */

public interface IOwnerMsgService {
	public OwnerMsgs addMessages(OwnerMsgs msg);

	public List<OwnerMsgs> getMessages();

	public OwnerMsgs getMessagebyId(int id);
}
