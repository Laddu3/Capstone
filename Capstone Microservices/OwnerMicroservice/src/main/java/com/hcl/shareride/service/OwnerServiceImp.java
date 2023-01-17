package com.hcl.shareride.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.shareride.entity.Owner;
import com.hcl.shareride.repository.OwnerRepo;

@Service // for business logic
public class OwnerServiceImp implements IOwnerService {
	@Autowired // used to inject the object dependency implicitly
	OwnerRepo ownerRepo;

	// to add owner the data into database
	public Owner addOwner(Owner owner) {

		return ownerRepo.save(owner);

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

}
