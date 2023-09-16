package com.hcl.shareride.service;

import java.util.List;



import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.shareride.entity.User;
import com.hcl.shareride.exceptions.UserNotFoundException;
import com.hcl.shareride.repository.UserRepository;


/*
 * @Author-KavyaSree , MeduriAmani
 */

@Service //for business logic
public class UserServiceImp implements IUserService{
	@Autowired  ////used to inject the object dependency implicitly
	UserRepository userRepo;

	@Override

	public ResponseEntity<String> userRegistration(User user){
		ResponseEntity<String> response = null;
		User u= userRepo.save(user);
		//input validation for user
		if (u!= null) {
			response = new ResponseEntity<String>("user Registration done Successfully",HttpStatus.ACCEPTED);
		}else {
			response = new ResponseEntity<String>("user Registration Failed",HttpStatus.NOT_ACCEPTABLE);
		}
		return response;
	}

	public String loginUser(User user) {

		// checking Login Condition
		if (userRepo.findByUserName(user.getUserName()) != null) {
			return "user sucessfully logged in";
		}
		else {
			throw new UserNotFoundException("Incorrect user details"); //exception handling to Usermicroservices
		}
	}


	public String logoutUser(User user) {

		//checking Logout Condition
		if (userRepo.findByUserName(user.getUserName()) != null) {
			return "user sucessfully log out";
		} 
		else {

			return "user details";

		}
	}

	//to add the data into data base
	public String addUser(User u) {

		if (u.getUserId()>0) {
			userRepo.save(u);
			return "user successfully added ";
		}
		else {
			return "invalid user id input";
		}


	

	}
	///to retrieve the data from database

	public List<User> getUsers() {

		return userRepo.findAll();
	}
//to update the data in database
	public User updateUser(Integer id, User u) {
		User user = userRepo.findById(id).get();

		user.setUserName(u.getUserName());
		user.setUserEmail(u.getUserEmail());
		user.setUserPhone(u.getUserPhone());
		user.setUserPassword(u.getUserPassword());

		return userRepo.save(user);

	}
//to delete the data from database
	public void deleteUser(Integer id) {
		userRepo.deleteById(id);

	}

	@Override
	public User getUserByUserName(String userName) {
		// TODO Auto-generated method stub
		return userRepo.findByUserName(userName);
	}

}
