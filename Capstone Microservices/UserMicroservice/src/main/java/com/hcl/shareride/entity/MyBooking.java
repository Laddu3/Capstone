package com.hcl.shareride.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "booking_table") /// specifies name of database table
public class MyBooking {
	@Id /// primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY) /// auto increment
	private int vehicleId;
	private String vehicleName;
	private String vehicleType;
	private double price;
	private String pickup;
	private String dropping;
	private String distance;
	private String ownerName;
	private String date;
	private String time;
	private String userName;

}
