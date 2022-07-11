package com.exam.controllers;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.exam.entities.Group;
import com.exam.entities.User;
import com.exam.entities.UserGroup;
import com.exam.helper.UserFoundException;
import com.exam.repository.UserRepository;
import com.exam.service.GroupService;
import com.exam.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired 
	private GroupService groupService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	
	
	// for testing 
	@GetMapping("/test")
	public String test() {
		return "API is running";
	}
	
	//create user
	@PostMapping("/")
	public User createUser(@RequestBody User user) throws Exception {
		
		//Set<UserGroup> roles = new HashSet<>();
//		Long uid =  this.userService.totalUser();
//		uid++;
//		user.setId(uid);
		
		// encoding password with bcryptpasswordencoder
		user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
		user.setRole("NORMAL");
		
		//Group role = new Group();
		//role.setRoleId(45L);
		//role.setRoleName("NORMAL");
		
		//UserGroup userRole = new UserGroup();
		//userRole.setUser(user);
		//.setRole(role);
		//userRole.setUserRoleId(++uid);
		
		//roles.add(userRole);
		
		return this.userService.createUser(user);
		
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
		
		
//		try {
//			
//			if (!file.isEmpty()) {
//				// upload the file to folder and update the name of contact
//				String picName = userId + "_" + file.getOriginalFilename();
//				user.setImgUrl(picName);
//				File saveFile = new ClassPathResource("static/img").getFile();
//
//				Path path = Paths.get(saveFile.getAbsolutePath() + File.separator + picName);
//
//				Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
//				System.out.println("contact image uploade");
//
//			}
			
			return this.userService.updateUser(user, userId);
			
//		} catch (Exception e) {
//			// TODO: handle exception
//			System.out.println(e.getMessage());
//			return user;
//			
//		}
		
		
		
	}
	
	@ExceptionHandler(UserFoundException.class)
	public ResponseEntity<?> exceptionHandler(UserFoundException ex) {
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	
	
	

}
