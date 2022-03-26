package com.exam.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.entities.User;
import com.exam.entities.UserRole;
import com.exam.helper.UserFoundException;
import com.exam.helper.UserNotFoundException;
import com.exam.repository.RoleRepository;
import com.exam.repository.UserRepository;
import com.exam.service.UserService;


@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	
	// creating user
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		
		User local = this.userRepository.findByUsername(user.getUsername());
		if(local != null) {
			System.out.println("User is already there !!");
			throw new UserFoundException();
		}
		else {
			// user create
			for(UserRole ur : userRoles) {
				roleRepository.save(ur.getRole());
			}
			
			user.getUserRole().addAll(userRoles);
			local = this.userRepository.save(user);
		}
		
		return local;
	}

	// getting user by username
	@Override
	public User getUser(String username) {
		
		return this.userRepository.findByUsername(username);
	}

	// count all user
	@Override
	public Long totalUser() {
		
		return this.userRepository.count();
	}

	@Override
	public void deleteUserById(Long id) {
		this.userRepository.deleteById(id);
		
	}

	@Override
	public User updateUser(User user, Long id) {
		user.setId(id);
		User updateUser = this.userRepository.save(user);
		return updateUser;
	}

}
