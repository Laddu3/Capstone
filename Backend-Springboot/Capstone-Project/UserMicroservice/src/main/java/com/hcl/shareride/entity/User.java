package com.hcl.shareride.entity;



/*
 * @Author-KavyaSree , MeduriAmani
 */

import javax.persistence.Column;


import javax.persistence.Entity;

import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data  //because of adding lombok we got this annotation and used for reducing the boiler plate code
@Entity   // to store data in database
@Table(name="user_table")  //to defines the database table name
public class User {
	@Id    // specifies primary key
	
	private int userId;
	@Column   //to add column in database
	private String userName;
	@Column   //to add column in database
	private String userEmail;
	@Column //to add column in database
	private String userPassword;
	@Column           //to add column in database
	private String userPhone;
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	public String getUserPhone() {
		return userPhone;
	}
	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", userEmail=" + userEmail + ", userPassword="
				+ userPassword + ", userPhone=" + userPhone + "]";
	}
	
	

}
