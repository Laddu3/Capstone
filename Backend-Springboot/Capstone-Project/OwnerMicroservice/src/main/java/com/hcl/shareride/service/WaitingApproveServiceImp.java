package com.hcl.shareride.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.shareride.entity.WaitingApprove;
import com.hcl.shareride.repository.WaitingApproveRepo;


/*
 * @Author-UshaSri
 */

@Service // for business logic

public class WaitingApproveServiceImp implements IWaitingApproveService {

	@Autowired // used to inject the object dependency implicitly
	WaitingApproveRepo waitingApproveRepo;
	// to add the approve data into database

	public WaitingApprove addVehicle(WaitingApprove task) {

		return waitingApproveRepo.save(task);
	}

	// to retrieve the approve data from database
	public List<WaitingApprove> getVehicles() {

		return waitingApproveRepo.findAll();
	}

	// to delete the approve data into database by id
	public void deleteVehicle(Integer id) {

		waitingApproveRepo.deleteById(id);

	}

	// to retrieve the approve data into database by id
	public WaitingApprove getVehicleById(Integer id) {

		return waitingApproveRepo.findById(id).get();
	}

}
