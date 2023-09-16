package com.hcl.shareride.repository;


/*
 * @Author-HarshavardhanReddy
 */

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.shareride.entity.OwnerMsgs;
@Repository  //to perform crud operations
public interface OwnerMsgRepo extends JpaRepository<OwnerMsgs	, Integer>{

}
