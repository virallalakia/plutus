package com.voidmainworld.plutus.daoservice.testuser.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.voidmainworld.plutus.dao.testuser.TestUser;
import com.voidmainworld.plutus.dao.testuser.TestUserDAO;
import com.voidmainworld.plutus.daoservice.testuser.TestUserService;

@Service
public class TestUserServiceImpl implements TestUserService {

	@Autowired
	private TestUserDAO	testUserDAO;

	public TestUserDAO getTestUserDAO() {
		return testUserDAO;
	}

	public void setTestUserDAO(TestUserDAO testUserDAO) {
		this.testUserDAO = testUserDAO;
	}

	@Transactional
	public List<TestUser> getTestUser() {
		return testUserDAO.getTestUser();
	}

	@Transactional
	public TestUser getTestUser(int id) {
		return testUserDAO.getTestUser(id);
	}

	@Transactional
	public void addTestUser(TestUser testUser) {
	}

	@Transactional
	public void updateTestUser(TestUser testUser) {
	}

	@Transactional
	public void removeTestUser(int id) {
	}

}
