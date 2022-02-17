package com.exam.controllers;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.entities.Role;
import com.exam.entities.User;
import com.exam.entities.UserRole;
import com.exam.repository.UserRepository;
import com.exam.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
	
	// for testing 
	@GetMapping("/test")
	public String test() {
		return "API is running";
	}
	
	//create user
	@PostMapping("/")
	public User createUser(@RequestBody User user) throws Exception {
		
		Set<UserRole> roles = new HashSet<>();
		Long uid =  this.userService.totalUser();
		uid++;
		user.setId(uid);
		Role role = new Role();
		role.setRoleId(45L);
		role.setRoleName("NORMAL");
		
		UserRole userRole = new UserRole();
		userRole.setUser(user);
		userRole.setRole(role);
		userRole.setUserRoleId(++uid);
		
		roles.add(userRole);
		
		return this.userService.createUser(user, roles);
		
	}
	
	// getting user by username
	@GetMapping("/{username}")
	public User getUser(@PathVariable("username") String username) {
		
		return this.userService.getUser(username);
		
	}
	
	//delete user by id
	@DeleteMapping("/{userId}")
	public void deleteUserById(@PathVariable("userId") Long userId) {
		this.userService.deleteUserById(userId);
	}
	
	// update user
	@PutMapping("/update/{userId}")
	public User updateUser(@RequestBody User user, @PathVariable("userId") Long userId) {
		
		return this.userService.updateUser(user, userId);
		
	}

}
