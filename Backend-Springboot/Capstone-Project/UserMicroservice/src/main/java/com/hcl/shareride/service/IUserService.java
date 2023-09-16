package com.hcl.shareride.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.hcl.shareride.entity.User;


/*
 * @Author-KavyaSree , MeduriAmani
 */

public interface IUserService {
	public ResponseEntity<String> userRegistration(User user);
	
	
	public String addUser(User user);
	
	public List<User> getUsers();
	
	public User updateUser(Integer id, User user);
	
	public void deleteUser(Integer id);
	
	public User getUserByUserName(String userName);

}
