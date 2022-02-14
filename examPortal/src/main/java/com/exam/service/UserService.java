package com.exam.service;

import java.util.Set;

import com.exam.entities.User;
import com.exam.entities.UserRole;

public interface UserService {
	
//	for creating user
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;
	
	// get user by username
	public User getUser(String username);
	
	// count all user
	public Long totalUser();
	
	// delete user by id
	public void deleteUserById(Long id);
	
	// for update user
	public User updateUser(User user, Long id);

}
