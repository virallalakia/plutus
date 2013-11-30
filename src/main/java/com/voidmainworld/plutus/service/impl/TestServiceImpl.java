package com.voidmainworld.plutus.service.impl;

import static com.voidmainworld.plutus.constant.PlutusContants.APP_JSON;
import static com.voidmainworld.plutus.constant.PlutusContants.APP_XML;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import org.springframework.beans.factory.annotation.Autowired;

import com.voidmainworld.plutus.dao.testuser.TestUser;
import com.voidmainworld.plutus.daoservice.testuser.TestUserService;
import com.voidmainworld.plutus.service.TestService;
import com.voidmainworld.plutus.vo.user.UserVO;

@Path("/testuser")
@Produces({ APP_JSON, APP_XML })
@Consumes({ APP_JSON, APP_XML })
public class TestServiceImpl implements TestService {

	@Autowired
	private TestUserService	testUserService;

	@GET
	@Path("/")
	public List<UserVO> getAllUsers() {

		List<UserVO> userlist = new ArrayList<UserVO>();

		List<TestUser> listTestUser = testUserService.getTestUser();

		for (TestUser testUser : listTestUser) {
			userlist.add(new UserVO(testUser.getId(), testUser.getName()));
		}

		return userlist;
	}

	@GET
	@Path("/{userId}")
	public UserVO getUser(@PathParam("userId") String userId) {

		TestUser testUser = testUserService.getTestUser(Integer.parseInt(userId));

		return (new UserVO(testUser.getId(), testUser.getName()));
	}

	@POST
	@Path("/")
	public void addUser(UserVO user) {
		testUserService.addTestUser(new TestUser(user.getId(), user.getName()));
	}

	@POST
	@Path("/{userId}")
	public void updateUser(@PathParam("userId") String userId, UserVO user) {
		testUserService.updateTestUser(new TestUser(Integer.parseInt(userId), user.getName()));
	}

	@PUT
	@Path("/{userId}")
	public void removeUser(@PathParam("userId") String userId) {
		testUserService.removeTestUser(Integer.parseInt(userId));
	}

}
