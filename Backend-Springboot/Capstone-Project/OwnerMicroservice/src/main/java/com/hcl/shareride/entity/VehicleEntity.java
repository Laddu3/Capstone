package com.hcl.shareride.entity;

import javax.persistence.Entity;


import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;


/*
 * @Author-TarakeshwariPooja
 */

@Data
@Entity
@Table(name = "vehicle_table")
public class VehicleEntity {

	@Id
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

	public int getVehicleId() {
		return vehicleId;
	}

	public void setVehicleId(int vehicleId) {
		this.vehicleId = vehicleId;
	}

	public String getVehicleName() {
		return vehicleName;
	}

	public void setVehicleName(String vehicleName) {
		this.vehicleName = vehicleName;
	}

	public String getVehicleType() {
		return vehicleType;
	}

	public void setVehicleType(String vehicleType) {
		this.vehicleType = vehicleType;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getPickup() {
		return pickup;
	}

	public void setPickup(String pickup) {
		this.pickup = pickup;
	}

	public String getDropping() {
		return dropping;
	}

	public void setDropping(String dropping) {
		this.dropping = dropping;
	}

	public String getDistance() {
		return distance;
	}

	public void setDistance(String distance) {
		this.distance = distance;
	}

	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

}
