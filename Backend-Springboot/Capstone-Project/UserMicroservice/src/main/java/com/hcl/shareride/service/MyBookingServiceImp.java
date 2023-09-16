package com.hcl.shareride.service;

/*
 * @Author-KavyaSree
 */


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.shareride.entity.MyBookings;
import com.hcl.shareride.repository.BookingRepository;
@Service // to implement  business logic
public class MyBookingServiceImp implements IMyBookingService {
	
	@Autowired   ////used to inject the object dependency implicitly
	BookingRepository bookingRepo;

	///to add the booking details
	
	public String addBooking(MyBookings booking) {

		if(booking.getPrice()>0) {
	 bookingRepo.save(booking);
			return"vehicle booked successfully"; //input validations
		
		}
		else {
			return"the given inputs are invalid";
		
		}
	}
//to retrieve the bookdetails from database
	public List<MyBookings> getBookings() {

		return bookingRepo.findAll();
	}
	
	//to retrieve data by id
	public MyBookings getBookingbyId(int id) {

		return bookingRepo.findById(id).get();
	}

	//to delete the data in booking

	public void deleteBooking(Integer id) {
		bookingRepo.deleteById(id);

	}

}


