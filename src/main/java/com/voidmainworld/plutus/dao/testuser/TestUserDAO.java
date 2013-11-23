package com.voidmainworld.plutus.dao.testuser;

import java.util.List;

public interface TestUserDAO {

	public List<TestUser> getTestUser();

	public TestUser getTestUser(int id);

	public void addTestUser(TestUser testUser);

	public void updateTestUser(TestUser testUser);

	public void removeTestUser(int id);

}
