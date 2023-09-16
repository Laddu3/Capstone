package com.hcl.shareride.repository;

/*
 * @Author- MeduriAmani
 */

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.shareride.entity.UserMessages;
@Repository  //to perform crud operations
public interface UserMessagesRepository extends JpaRepository<UserMessages	, Integer>{

}
