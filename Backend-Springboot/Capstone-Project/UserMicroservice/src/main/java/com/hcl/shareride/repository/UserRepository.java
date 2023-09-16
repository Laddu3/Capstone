package com.hcl.shareride.repository;


/*
 * @Author-KavyaSree , MeduriAmani
 */

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.shareride.entity.User;
@Repository     //to perform crud operations
public interface UserRepository extends JpaRepository<User, Integer>{
	public User findByUserName(String username);

}
