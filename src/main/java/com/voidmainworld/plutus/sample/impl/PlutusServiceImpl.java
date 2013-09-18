package com.voidmainworld.plutus.sample.impl;

import static com.voidmainworld.plutus.constant.PlutusContants.APP_JSON;
import static com.voidmainworld.plutus.constant.PlutusContants.APP_XML;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.voidmainworld.plutus.sample.PlutusService;
import com.voidmainworld.plutus.vo.user.UserVO;

@Path("/user")
@Produces({ APP_JSON, APP_XML })
@Consumes({ APP_JSON, APP_XML })
public class PlutusServiceImpl implements PlutusService {

	@GET
	@Path("/")
	public List<UserVO> getAllUsers() {

		List<UserVO> userlist = new ArrayList<UserVO>(5);

		for (int i = 0; i < 5; i++) {
			userlist.add(new UserVO(i, "User " + i));
		}

		return userlist;
	}

	@GET
	@Path("/{userId}")
	public UserVO getUser(@PathParam("userId") String userId) {

		UserVO user = new UserVO(Long.parseLong(userId), "User " + userId);

		return user;
	}

}
