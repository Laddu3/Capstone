package com.hcl.shareride.service;

/*
 * @Author-UshaSri
 */

import java.util.List;

import com.hcl.shareride.entity.WaitingApprove;

public interface IWaitingApproveService {
	public WaitingApprove addVehicle(WaitingApprove task);

	public List<WaitingApprove> getVehicles();

	public void deleteVehicle(Integer id);

	public WaitingApprove getVehicleById(Integer id);
}
