package com.hcl.shareride.entity;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;


/*
 * @Author- MeduriAmani
 */

@Data   //to reduce boiler plate
@Entity  //to strore the values in database
@Table(name="user_messages")   //to specify database table name
public class UserMessages {
	
	@Id   //specifies primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) //automatically generates the primary key value
	private int msgId;
	private String ownerName;
	private String userName;
	private String message;
	public int getMsgId() {
		return msgId;
	}
	public void setMsgId(int msgId) {
		this.msgId = msgId;
	}
	public String getOwnerName() {
		return ownerName;
	}
	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	

}
