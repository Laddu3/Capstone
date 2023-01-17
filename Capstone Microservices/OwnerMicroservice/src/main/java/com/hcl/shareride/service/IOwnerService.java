package com.hcl.shareride.service;

import java.util.List;

import com.hcl.shareride.entity.Owner;

public interface IOwnerService {
	public Owner addOwner(Owner owner);

	public List<Owner> getOwners();

	public Owner updateOwner(Integer id, Owner owner);

	public void deleteOwner(Integer id);

}
