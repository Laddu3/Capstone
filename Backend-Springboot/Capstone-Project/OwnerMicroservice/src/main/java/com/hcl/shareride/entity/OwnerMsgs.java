package com.hcl.shareride.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;


/*
 * @Author-HarshavardhanReddy
 */

@Data
@Entity
@Table(name="owner_msgs")
public class OwnerMsgs {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int msgId;
	private String userName;
	private String ownerName;
	private String message;
	public int getMsgId() {
		return msgId;
	}
	public void setMsgId(int msgId) {
		this.msgId = msgId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getOwnerName() {
		return ownerName;
	}
	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
}
