package com.hcl.shareride.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "user_table") // to defines the database table name
public class User {
	@Id // specifies primary key
	private int userId;
	private String userName;
	private String userEmail;
	private String userPassword;
	private String userPhone;

}
