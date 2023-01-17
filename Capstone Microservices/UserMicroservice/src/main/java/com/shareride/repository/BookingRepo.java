package com.shareride.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.shareride.entity.MyBooking;
@Repository //to perform crud operations
public interface BookingRepo extends JpaRepository<MyBooking, Integer>{

}
