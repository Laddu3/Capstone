package com.hcl.shareride.service;

/*
 * @Author-KavyaSree
 */


import java.util.List;

import com.hcl.shareride.entity.MyBookings;

public interface IMyBookingService {
	
	public String addBooking(MyBookings booking);
	
	public List<MyBookings> getBookings();
	
	public MyBookings getBookingbyId(int id);
	
	public void deleteBooking(Integer id) ;

}
