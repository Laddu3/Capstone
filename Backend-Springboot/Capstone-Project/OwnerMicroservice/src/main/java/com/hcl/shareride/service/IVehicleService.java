package com.hcl.shareride.service;

import java.util.List;

import com.hcl.shareride.entity.VehicleEntity;

/*
 * @Author-TarakeshwariPooja
 */

public interface IVehicleService {
	public VehicleEntity addVehicle(VehicleEntity vehicle);

	public List<VehicleEntity> getVehicles();

	public VehicleEntity updateVehicle(Integer id, VehicleEntity vehicle);

	public void deleteVehicle(Integer id);

	public VehicleEntity getVehiclebyId(Integer id);

	public List<VehicleEntity> PriceSort();
}
