package com.voidmainworld.plutus.daoservice.testuser;

import java.util.List;

import com.voidmainworld.plutus.dao.testuser.TestUser;

public interface TestUserService {
	public List<TestUser> getTestUser();

	public TestUser getTestUser(int id);

	public void addTestUser(TestUser testUser);

	public void updateTestUser(TestUser testUser);

	public void removeTestUser(int id);
}
