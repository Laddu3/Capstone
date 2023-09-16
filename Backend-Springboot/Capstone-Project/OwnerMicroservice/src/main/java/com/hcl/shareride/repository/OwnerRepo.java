package com.hcl.shareride.repository;

/*
 * @Author-HarshavardhanReddy ,TarakeshwariPooja and UshaSri
 */

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.shareride.entity.Owner;
@Repository  //to perform crud operations
public interface OwnerRepo  extends JpaRepository<Owner, Integer>{

	public Owner findByOwnerName(String ownerName);

}
