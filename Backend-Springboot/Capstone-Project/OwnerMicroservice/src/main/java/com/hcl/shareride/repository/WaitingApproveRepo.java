package com.hcl.shareride.repository;

/*
 * @Author-UshaSri
 */

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.shareride.entity.WaitingApprove;
@Repository   //to perform crud operations
public interface WaitingApproveRepo extends JpaRepository<WaitingApprove,Integer>{

}
