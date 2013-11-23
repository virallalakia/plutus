package com.voidmainworld.plutus.service;

import java.util.List;

import com.voidmainworld.plutus.vo.user.UserVO;

public interface TestService {

	List<UserVO> getAllUsers();

	UserVO getUser(String userId);

	public void addUser(UserVO user);

	public void updateUser(UserVO user);

	public void removeUser(String userId);

}
