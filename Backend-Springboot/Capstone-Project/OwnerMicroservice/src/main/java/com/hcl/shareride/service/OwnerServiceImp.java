package com.hcl.shareride.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.hcl.shareride.entity.Owner;
import com.hcl.shareride.exceptions.OwnerNotFoundException;
import com.hcl.shareride.repository.OwnerRepo;

/*
 * @Author-HarshavardhanReddy ,TarakeshwariPooja and UshaSri
 */

@Service // for business logic
public class OwnerServiceImp implements IOwnerService {
	@Autowired // used to inject the object dependency implicitly
	OwnerRepo ownerRepo;
	

	
	@Override
	public Owner getOwnerByOwnerName(String ownerName) {
		// TODO Auto-generated method stub
		return ownerRepo.findByOwnerName(ownerName);
	}
	  

	// to add owner the data into database
	public String addOwner(Owner owner) {
		

		if (owner.getOwnerId()>0) {
			ownerRepo.save(owner);
			return "owner added ";
		}
		else {
			return "invalid owner id input";  //input validations for owner
		}

	}

	// to retrieve the owner data into database
	public List<Owner> getOwners() {

		return ownerRepo.findAll();
	}

	// to update the owner data into database by id
	public Owner updateOwner(Integer id, Owner owner) {
		Owner uowner = ownerRepo.findById(id).get();

		uowner.setOwnerName(owner.getOwnerName());
		uowner.setOwnerEmail(owner.getOwnerEmail());
		uowner.setOwnerPhone(owner.getOwnerPhone());
		uowner.setOwnerPassword(owner.getOwnerPassword());

		return ownerRepo.save(uowner);

	}

	// to delete the owner data into database by id
	public void deleteOwner(Integer id) {
		ownerRepo.deleteById(id);

	}

	@Override
	public ResponseEntity<String> registerOwner(Owner owner) {
		ResponseEntity<String> response = null;
	       Owner o = ownerRepo.save(owner);
	        if (o != null) {
	            response = new ResponseEntity<String>("owner Registration Success", HttpStatus.ACCEPTED);


	        } else {
	        	
	               
	            response = new ResponseEntity<String>("owner Registration Failed!", HttpStatus.NOT_ACCEPTABLE);
	        }
	        return response;
	    }

	public String loginOwner(Owner owner)  {

		// checking Login Condition
		if (ownerRepo.findByOwnerName(owner.getOwnerName()) != null) {
			return "owner sucessfully logged in";
		}
		else {
			throw new OwnerNotFoundException("Incorrect owner details"); //exception handling to owner microservices
		}
	}


	
	public String logoutOwner(Owner owner) {

		//checking Logout Condition
		if (ownerRepo.findByOwnerName(owner.getOwnerName()) != null) {
			return "owner sucessfully log out";
		} 
		else {

			return "owner details";

		}
	}

	
}
