package com.hcl.shareride.service;

import java.util.List;

import com.hcl.shareride.entity.MyBookings;

public interface IBookingServices {
	
	public MyBookings addBooking(MyBookings booking);
	
	public List<MyBookings> getBookings();
	
	public MyBookings getBookingbyId(int id);
	
	public void deleteBooking(Integer id) ;

}
