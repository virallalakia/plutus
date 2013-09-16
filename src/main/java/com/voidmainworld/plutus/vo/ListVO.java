package com.voidmainworld.plutus.vo;

import java.util.List;

public class ListVO extends PlutusBaseVO {

	private static final long serialVersionUID = 320645122810539810L;

	private List<? extends Object> list;

	public ListVO(List<? extends Object> list) {
		this.list = list;
	}

	public List<? extends Object> getList() {
		return list;
	}

	public void setList(List<? extends Object> list) {
		this.list = list;
	}

}
