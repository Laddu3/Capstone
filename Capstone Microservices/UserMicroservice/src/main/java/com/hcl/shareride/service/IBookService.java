package com.hcl.shareride.service;

import java.util.List;

import com.hcl.shareride.entity.MyBooking;

public interface IBookService {
	public MyBooking addBooking(MyBooking booking);

	public List<MyBooking> getBookings();

	public MyBooking getBookingbyId(int id);

	public void deleteBooking(Integer id);
}
