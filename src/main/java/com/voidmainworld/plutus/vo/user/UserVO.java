package com.voidmainworld.plutus.vo.user;

import java.io.Serializable;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.map.annotate.JsonSerialize;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
public class UserVO implements Serializable {

	private static final long	serialVersionUID	= 7456046476491395764L;

	private int					id;
	private String				name;

	public UserVO() {
		super();
	}

	public UserVO(int id) {
		this(id, Long.toString(id));
	}

	public UserVO(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "UserVO [id=" + id + ", name=" + name + "]";
	}

}
