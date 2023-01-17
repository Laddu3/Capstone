package com.hcl.shareride.service;

import java.util.List;

import com.hcl.shareride.entity.User;

public interface IUserService {
	public User addUser(User user);

	public List<User> getUsers();

	public User updateUser(Integer id, User user);

	public void deleteUser(Integer id);
}
