package com.hcl.shareride.controller;

import java.util.List;


import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.hcl.shareride.entity.User;
import com.hcl.shareride.service.IUserService;

@RestController  //It is used for making restful web services

@RequestMapping("/user")   //used to map web requests 

/*
 * @Author-KavyaSree , MeduriAmani
 */

@CrossOrigin(origins="http://localhost:3000")
public class UserController {
	
	@Autowired  //used to inject the object dependency implicitly
	IUserService userServices;

	@PostMapping("/register")
	public ResponseEntity<String> register(@RequestBody User user){
		return userServices.userRegistration(user);
		
	}

	  @GetMapping("/userLogin/{userName}/{userPassword}")

	    public ResponseEntity<String> login(@PathVariable String userName, @PathVariable String userPassword,
	            HttpSession session) {
	        User user = userServices.getUserByUserName(userName);
	        ResponseEntity<String> response = null;
	        if (user.getUserName().equals(userName) && (user.getUserPassword().equals(userPassword))) {
	            session.setAttribute("userName", userName);
	            session.setAttribute("userPassword", userPassword);

	            response = new ResponseEntity<String>("User Login Success!", HttpStatus.OK);
	        } else {
	            response = new ResponseEntity<String>("Login Failed!", HttpStatus.BAD_REQUEST);
	        }
	        return response;
	    }

	    @GetMapping("/userLogout") // owner logout
	    public String logout(HttpSession session) {

	 

	        String msg = "User Still Login";
	        if (session.getAttribute("userName") == null) {
	            msg = "User Logout Success";
	        }
	        return msg;
	    }
   
	
	@PostMapping("/add")   //to insert user data into database
	public String addUser(@RequestBody User u)
	{
		userServices.addUser(u);
		if(u.getUserId()>0) {
			
			return "user successfully added ";
		}
		
		else {
			return"invalid user id input";
			
		}
		
		
		
	}
	@GetMapping("/users")     //to retrieve the user data from database
	public List<User> getUser()
	{
		return userServices.getUsers();
	}
	@PutMapping("/update/{id}")   //to update the user data in database
	public String updateUser(@PathVariable (value="id") Integer id,@RequestBody User user)
	{
		userServices.updateUser(id,user);
		return "updated successfully";
	}
	@DeleteMapping("/delete/{id}")    //to delete the user data from database
	public String deleteUser(@PathVariable (value="id") Integer id)
	{
		userServices.deleteUser(id);
		return "deleted successfully";
	}
	

}
