package com.hcl.shareride.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.shareride.entity.MyBooking;
import com.hcl.shareride.service.BookingServiceImp;

@RestController // It is used for making restful web services

@RequestMapping("/booking") // used to map web requests
public class MyBookingController {
	@Autowired // used to inject the object dependency implicitly
	BookingServiceImp myBookingServices;

	/// TO ADD THE BOOKING DATA
	@PostMapping("/insert") // to insert the data into database
	public String AddBooking(@RequestBody MyBooking booking) {
		myBookingServices.addBooking(booking);
		return "User Added Successfully";
	}

	// TO GET ALL THE BOOKING DETAILS
	@GetMapping("/bookings") // to retrieve the data from database
	public List<MyBooking> getMyBookings() {
		return myBookingServices.getBookings();
	}

	/// TO GET THE BOOK DETAILS BY ID
	@GetMapping("/bookings/{id}") // to retrieve the data from database
	public MyBooking getMyBookingbyId(@PathVariable(value = "id") int id) {
		return myBookingServices.getBookingbyId(id);
	}

///TO DELETE THE BOOK DETAILS BY ID
	@DeleteMapping("/delete/{id}") // to delete the data from database
	public String deleteBooking(@PathVariable(value = "id") Integer id) {
		myBookingServices.deleteBooking(id);
		return "deleted successfully";
	}

}
