package com.exam;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.exam.entities.Role;
import com.exam.entities.User;
import com.exam.entities.UserRole;
import com.exam.service.UserService;

@SpringBootApplication
public class ExamPortalApplication implements CommandLineRunner {
	
	@Autowired
	private UserService userService;

	public static void main(String[] args) {
		
		
		SpringApplication.run(ExamPortalApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("Starting code");
		
//		User user = new User();
//		
//		user.setId(1L);
//		user.setFirstName("Rohit");
//		user.setLastName("kumar");
//		user.setUsername("rohit3888kumar");
//		user.setPassword("12345");
//		user.setEmail("test@gmail.com");
//		user.setImgUrl("default.png");
//		
//		Role role1 = new Role();
//		
//		role1.setRoleId(44L);
//		role1.setRoleName("ADMIN");
//		
//		Set<UserRole> userRolesSet = new HashSet<>();
//		UserRole userRole = new UserRole();
//		userRole.setUserRoleId(2L);
//		userRole.setRole(role1);
//		userRole.setUser(user);
//		
//		userRolesSet.add(userRole);
//		
//		User user1 = this.userService.createUser(user, userRolesSet);
//		System.out.println(user1.getUsername());
		
		
	}

}
