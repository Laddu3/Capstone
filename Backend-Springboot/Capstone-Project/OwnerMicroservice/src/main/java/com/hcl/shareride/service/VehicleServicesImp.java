package com.hcl.shareride.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.shareride.entity.VehicleEntity;
import com.hcl.shareride.repository.VehicleRepo;

/*
 * @Author-TarakeshwariPooja
 */

@Service // for business logic
public class VehicleServicesImp implements IVehicleService {

	@Autowired // used to inject the object dependency implicitly
	VehicleRepo vehicleRepo;

	// to add the vehicle data into database
	public VehicleEntity addVehicle(VehicleEntity vehicle) {

		return vehicleRepo.save(vehicle);

	}

	// to retrieve the vehicle data into database
	public List<VehicleEntity> getVehicles() {

		return vehicleRepo.findAll();
	}

	// to update the vehicle data into database by id
	public VehicleEntity updateVehicle(Integer id, VehicleEntity vehicle) {

		VehicleEntity uvehicle = vehicleRepo.findById(id).get();

		uvehicle.setVehicleName(vehicle.getVehicleName());
		uvehicle.setVehicleType(vehicle.getVehicleType());
		uvehicle.setDistance(vehicle.getDistance());
		uvehicle.setDropping(vehicle.getDropping());
		uvehicle.setPickup(vehicle.getPickup());
		uvehicle.setPrice(vehicle.getPrice());
		uvehicle.setDate(vehicle.getDate());
		uvehicle.setTime(vehicle.getTime());
		uvehicle.setOwnerName(vehicle.getOwnerName());

		return vehicleRepo.save(uvehicle);

	}
	// to delete the vehicle data into database by id

	public void deleteVehicle(Integer id) {

		vehicleRepo.deleteById(id);

	}

	// to get the vehicle data into database by id
	public VehicleEntity getVehiclebyId(Integer id) {

		return vehicleRepo.findById(id).get();
	}

	// to sort the vehicle data in database
	public List<VehicleEntity> PriceSort() {

		return vehicleRepo.PriceSort();
	}

}
