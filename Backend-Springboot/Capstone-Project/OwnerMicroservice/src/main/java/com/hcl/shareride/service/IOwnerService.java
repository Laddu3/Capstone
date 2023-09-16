package com.hcl.shareride.service;

/*
 * @Author-HarshavardhanReddy ,TarakeshwariPooja and UshaSri
 */

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.hcl.shareride.entity.Owner;

public interface IOwnerService {
	public String addOwner(Owner owner);

	public List<Owner> getOwners();

	public Owner updateOwner(Integer id, Owner owner);

	public void deleteOwner(Integer id);
	
	 public ResponseEntity<String> registerOwner(Owner owner);
	 
	 public Owner getOwnerByOwnerName(String ownerName) ;

}
