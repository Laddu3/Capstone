package com.hcl.shareride.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.shareride.entity.UserEntity;
import com.hcl.shareride.repository.UserRepository;

@Service //for business logic
public class UserServices implements IUserServices{
	@Autowired  ////used to inject the object dependency implicitly
	UserRepository userRepository;

	//to add the data into data base
	public UserEntity addUser(UserEntity user) {

		return userRepository.save(user);

	}
	///to retrieve the data from database

	public List<UserEntity> getUsers() {

		return userRepository.findAll();
	}
//to update the data in database
	public UserEntity updateUser(Integer id, UserEntity user) {
		UserEntity uuser = userRepository.findById(id).get();

		uuser.setUserName(user.getUserName());
		uuser.setUserEmail(user.getUserEmail());
		uuser.setUserPhone(user.getUserPhone());
		uuser.setUserPassword(user.getUserPassword());

		return userRepository.save(uuser);

	}
//to delete the data from database
	public void deleteUser(Integer id) {
		userRepository.deleteById(id);

	}

}
