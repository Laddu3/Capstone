package com.hcl.shareride.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

/*
 * @Author-HarshavardhanReddy ,TarakeshwariPooja and UshaSri
 */

@Data
@Entity
@Table(name = "owner_table")
public class Owner {
	@Id
	private int ownerId;
	private String ownerName;
	private String ownerPhone;
	private String ownerEmail;
	private String ownerPassword;

	public int getOwnerId() {
		return ownerId;
	}

	public void setOwnerId(int ownerId) {
		this.ownerId = ownerId;
	}

	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}

	public String getOwnerPhone() {
		return ownerPhone;
	}

	public void setOwnerPhone(String ownerPhone) {
		this.ownerPhone = ownerPhone;
	}

	public String getOwnerEmail() {
		return ownerEmail;
	}

	public void setOwnerEmail(String ownerEmail) {
		this.ownerEmail = ownerEmail;
	}

	public String getOwnerPassword() {
		return ownerPassword;
	}

	public void setOwnerPassword(String ownerPassword) {
		this.ownerPassword = ownerPassword;
	}

	@Override
	public String toString() {
		return "Owner [ownerId=" + ownerId + ", ownerName=" + ownerName + ", ownerPhone=" + ownerPhone + ", ownerEmail="
				+ ownerEmail + ", ownerPassword=" + ownerPassword + "]";
	}

	public Owner(int ownerId, String ownerName, String ownerPhone, String ownerEmail, String ownerPassword) {
		super();
		this.ownerId = ownerId;
		this.ownerName = ownerName;
		this.ownerPhone = ownerPhone;
		this.ownerEmail = ownerEmail;
		this.ownerPassword = ownerPassword;
	}

	public Owner() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
