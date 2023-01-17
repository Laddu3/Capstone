package com.hcl.shareride.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.shareride.entity.Owner;
import com.hcl.shareride.service.IOwnerService;


@RestController  //It is used for making restful web services
@RequestMapping("/owner")  //used to map web requests
public class OwnerController {
	
	@Autowired  //used to inject the object dependency implicitly
	IOwnerService ownerServices;
	
	@PostMapping("/insert") //to insert data into database
	public String AddOwner(@RequestBody Owner owner)
	{
		ownerServices.addOwner(owner);
		return "Owner Added Successfully";
	}
	@GetMapping("/owners") //to retrieve the data from database
	public List<Owner> getOwners()
	{
		return ownerServices.getOwners();
	}
	@PutMapping("/update/{id}")   //to update the data in database
	public String updateOwner(@PathVariable (value="id") Integer id,@RequestBody Owner owner)
	{
		ownerServices.updateOwner(id,owner);
		return "updated successfully";
	}
	@DeleteMapping("/delete/{id}") //to delete the data from database
	public String deleteOwner(@PathVariable (value="id") Integer id)
	{
		ownerServices.deleteOwner(id);
		return "deleted successfully";
	}
	

}
