package com.voidmainworld.plutus.sample;

import java.util.List;

import com.voidmainworld.plutus.vo.user.UserVO;

public interface PlutusService {

	List<UserVO> getAllUsers();

	UserVO getUser(String userId);

}
