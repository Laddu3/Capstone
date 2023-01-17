package com.hcl.shareride.service;

import java.util.List;

import com.hcl.shareride.entity.UserEntity;

public interface IUserServices {
	
	
	public UserEntity addUser(UserEntity user);
	
	public List<UserEntity> getUsers();
	
	public UserEntity updateUser(Integer id, UserEntity user);
	
	public void deleteUser(Integer id);

}
