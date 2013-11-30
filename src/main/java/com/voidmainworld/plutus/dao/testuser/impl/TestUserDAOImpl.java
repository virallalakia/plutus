package com.voidmainworld.plutus.dao.testuser.impl;

import java.util.List;

import org.hibernate.Hibernate;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.voidmainworld.plutus.dao.testuser.TestUser;
import com.voidmainworld.plutus.dao.testuser.TestUserDAO;

@Repository
public class TestUserDAOImpl implements TestUserDAO {

	@Autowired
	private SessionFactory	sessionFactory;

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@SuppressWarnings("unchecked")
	public List<TestUser> getTestUser() {
		List<TestUser> testUsers = sessionFactory.getCurrentSession().createQuery("from TestUser").list();
		Hibernate.initialize(testUsers);
		return testUsers;
	}

	public TestUser getTestUser(int id) {
		TestUser testUser = (TestUser) sessionFactory.getCurrentSession().load(TestUser.class, id);
		Hibernate.initialize(testUser);
		return testUser;
	}

	public void addTestUser(TestUser testUser) {
		sessionFactory.getCurrentSession().save(testUser);
	}

	public void updateTestUser(TestUser testUser) {
		sessionFactory.getCurrentSession().update(testUser);
	}

	public void removeTestUser(int id) {
		TestUser testUser = (TestUser) sessionFactory.getCurrentSession().load(TestUser.class, id);
		if (null != testUser) {
			sessionFactory.getCurrentSession().delete(testUser);
		}
	}
}
