package com.voidmainworld.plutus.vo;

import java.io.Serializable;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.map.annotate.JsonSerialize;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
public class PlutusBaseVO implements Serializable {

	private static final long serialVersionUID = -1508757406355302060L;

}
