package com.voidmainworld.plutus.vo.user;

import java.io.Serializable;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.map.annotate.JsonSerialize;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
public class UserVO implements Serializable {

	private static final long serialVersionUID = 7456046476491395764L;

	private long id;
	private String name;

	public UserVO() {
		super();
	}

	public UserVO(long id) {
		this(id, Long.toString(id));
	}

	public UserVO(long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
