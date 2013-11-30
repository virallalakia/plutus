package com.voidmainworld.plutus.dao.testuser;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TESTUSER")
public class TestUser {
	@Id
	@Column(name = "ID")
	@GeneratedValue
	private Integer	id;

	@Column(name = "NAME")
	private String	name;

	public TestUser() {
		super();
	}

	public TestUser(Integer id, String name) {
		this();
		this.id = id;
		this.name = name;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
