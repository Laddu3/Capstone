package com.hcl.shareride.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.shareride.entity.MyBooking;
import com.shareride.repository.BookingRepo;

@Service // to implement business logic
public class BookingServiceImp implements IBookService {

	@Autowired //// used to inject the object dependency implicitly
	BookingRepo bookingRepo;

	/// to add the booking details

	public MyBooking addBooking(MyBooking booking) {

		return bookingRepo.save(booking);

	}

////to retrieve the bookdetails from database
	public List<MyBooking> getBookings() {

		return bookingRepo.findAll();
	}

	// to retrieve data by id
	public MyBooking getBookingbyId(int id) {

		return bookingRepo.findById(id).get();
	}

	// to delete the data in booking

	public void deleteBooking(Integer id) {
		bookingRepo.deleteById(id);

	}

}
