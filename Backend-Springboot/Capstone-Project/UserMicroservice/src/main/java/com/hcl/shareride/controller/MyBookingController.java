package com.hcl.shareride.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.shareride.entity.MyBookings;
import com.hcl.shareride.service.IMyBookingService;

@RestController             //It is used for making restful web services

@RequestMapping("/booking") //used to map web requests 


@CrossOrigin(origins="http://localhost:3000")

/*
 * @Author-KavyaSree
 */

public class MyBookingController {
	@Autowired   //used to inject the object dependency implicitly
	IMyBookingService IBookingServices;
	///TO  ADD THE BOOKING DATA  
	@PostMapping("/add")    //to insert the data into database
	public String addBooking(@RequestBody MyBookings booking)
	{
		IBookingServices.addBooking(booking);
		if(booking.getPrice()>0) {
			
			return "vehicle booked successfully ";
		}
		
		else {
			return"the given inputs are invalid";
			
		}
		
	}
	
	//TO GET ALL THE  BOOKING DETAILS
	@GetMapping("/bookings")  //to retrieve the data from database
	public List<MyBookings> getMyBookings()
	{
		return IBookingServices.getBookings();
	}
	
	/// TO GET THE BOOK DETAILS BY ID
	@GetMapping("/bookings/{id}")  //to retrieve the data from database
	public MyBookings getMyBookingbyId(@PathVariable(value="id") int id)
	{
		return IBookingServices.getBookingbyId(id);
	}
///TO DELETE THE BOOK DETAILS BY ID
	@DeleteMapping("/delete/{id}")   //to delete the data from database
	public String deleteBooking(@PathVariable (value="id") Integer id)
	{
		IBookingServices.deleteBooking(id);
		return "deleted successfully";
	}
	

}
