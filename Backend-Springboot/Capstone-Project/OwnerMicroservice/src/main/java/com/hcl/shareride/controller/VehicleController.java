package com.hcl.shareride.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.shareride.entity.VehicleEntity;
import com.hcl.shareride.service.IVehicleService;

@RestController  //It is used for making restful web services
@RequestMapping("/vehicle") //used to map web requests
@CrossOrigin(origins="http://localhost:3000")

/*
 * @Author-TarakeshwariPooja
 */

public class VehicleController {
	@Autowired  //used to inject the object dependency implicitly
	IVehicleService vehicleServices;
	
	@PostMapping("/insert") //to insert data into database
	public String addVehicle(@RequestBody VehicleEntity vehicle)
	{
		vehicleServices.addVehicle(vehicle);
		return "Owner Added Successfully";
	}
	@GetMapping("/vehicles") //to retrieve the data from database
	public List<VehicleEntity> getVehicles()
	{
		return vehicleServices.getVehicles();
	}
	@GetMapping("/vehicles/{id}") //to retrieve the data from database by id
	public VehicleEntity getVehiclebyId(@PathVariable (value="id") Integer id)
	{
		return vehicleServices.getVehiclebyId(id);
	}
	@PutMapping("/update/{id}")  // to update data from database by id
	public String updateVehicle(@PathVariable (value="id") Integer id,@RequestBody VehicleEntity vehicle)
	{
		vehicleServices.updateVehicle(id,vehicle);
		return "updated successfully";
	}
	@DeleteMapping("/delete/{id}") // to delete data from database by id
	public String deleteVehicle(@PathVariable (value="id") Integer id)
	{
		vehicleServices.deleteVehicle(id);
		return "deleted successfully";
	}
	
	@GetMapping("/sort")      //to retrieve the sorted data from database
	public List<VehicleEntity> SortPrice()
	{
		return vehicleServices.PriceSort();
	}
	

}
