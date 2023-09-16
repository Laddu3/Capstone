package com.hcl.shareride.repository;

/*
 * @Author-KavyaSree
 */


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.shareride.entity.MyBookings;
@Repository //to perform crud operations
public interface BookingRepository extends JpaRepository<MyBookings, Integer>{

}
