package com.hcl.shareride.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.shareride.entity.UserEntity;
@Repository     //to perform crud operations
public interface UserRepository extends JpaRepository<UserEntity, Integer>{

}
