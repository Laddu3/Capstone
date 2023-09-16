
package com.hcl.shareride.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.shareride.entity.WaitingApprove;
import com.hcl.shareride.service.IWaitingApproveService;

@RestController  //It is used for making restful web services
@RequestMapping("/approve") //used to map web requests

@CrossOrigin(origins="http://localhost:3000")

/*
 * @Author-Usha Sri
 */

public class WaitingApproveController {
	
	@Autowired  //used to inject the object dependency implicitly
	IWaitingApproveService waitingApproveServices;
	
	
	@PostMapping("/insert")  //to insert data into database
	public String addVehicle(@RequestBody WaitingApprove task)
	{
		waitingApproveServices.addVehicle(task);
		return "Vehicle Added Successfully";
	}
	@GetMapping("/vehicles")  //to retrieve the data from database
	public List<WaitingApprove> getVehicles()
	{
		return waitingApproveServices.getVehicles();
	}
	@GetMapping("/vehicles/{id}")  //to retrieve the data from database by id
	public WaitingApprove getVehiclebyId(@PathVariable(value="id") Integer id)
	{
		return waitingApproveServices.getVehicleById(id);
	}
	
	@DeleteMapping("/delete/{id}") // to delete data from database
	public String deleteVehicle(@PathVariable (value="id") Integer id)
	{
		waitingApproveServices.deleteVehicle(id);
		return "deleted successfully";
	}

}
