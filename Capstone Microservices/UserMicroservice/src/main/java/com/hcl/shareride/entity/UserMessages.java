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
@Table(name = "user_msg") // to specify database table name
public class UserMessages {

	@Id // specifies primary key
	private int msgId;
	private String ownerName;
	private String userName;
	private String message;

}
