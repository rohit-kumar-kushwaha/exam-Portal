package com.exam.controllers;

import java.security.Principal;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.exam.entities.Group;
import com.exam.entities.UserGroup;
import com.exam.repository.UserGroupRepository;
import com.exam.repository.UserRepository;
import com.exam.service.GroupService;

@RestController
@RequestMapping("/group")
@CrossOrigin("*")
public class GroupController {

	@Autowired
	private GroupService groupService;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	UserGroupRepository userGroupRepository;

	Random random = new Random(100000);

	// Group create
	@PostMapping("/")
	public Group createGroup(@RequestBody Group group) {

		Long key = (long) random.nextInt(999999);
		group.setSecretKey(key);
		return this.groupService.createGroup(group);

	}

	// get all group
	@GetMapping("/")
	public ResponseEntity<?> getGroup() {
		return ResponseEntity.ok(this.groupService.getGroup());
	}

	// join group
	@PostMapping("/join-group")
	public void joinGroup(@RequestBody Group group, Principal principal) {

		String userName = principal.getName();
		System.out.println("CURRENT USER : " + userName);

		Long secretKey = group.getSecretKey();
		String keyString = String.valueOf(secretKey);

		System.out.println("secretKey : " + secretKey);

		Long groupId = (long) Integer.parseInt(keyString.substring(6));
		Long key = (long) Integer.parseInt(keyString.substring(0, 6));
		Optional<Group> group1 = this.groupService.findByGroupId(groupId);

		System.out.println("GROUP ID : " + groupId);
		System.out.println("SECRET KEY : " + key);
		if (group != null) {
			if (group1.get().getSecretKey().equals(key)) {
				System.out.println("Hii");
				UserGroup userGroup = new UserGroup();
				userGroup.setGroup(group1.get());
				userGroup.setUser(this.userRepository.findByUsername(userName));
				this.userGroupRepository.save(userGroup);
				System.out.println("Group join Successfull...");
			}
			System.out.println("Hello " + group1.get().getSecretKey());
		} else {
			System.out.println("Wrong key");
		}
	}

	// get group by user ID
	@GetMapping("/{userId}")
	public ResponseEntity<?> getGroup(@PathVariable("userId") Long userId) {
		return ResponseEntity.ok(this.groupService.getGroup(userId));
	}

	// get user by group ID
	@GetMapping("/groups/{groupId}")
	public ResponseEntity<?> getUser(@PathVariable("groupId") Long groupId) {
		return ResponseEntity.ok(this.groupService.getUserByGroup(groupId));
	}
	
//	delete group
	@DeleteMapping("/{groupId}")
	public void deleteGroup(@PathVariable("groupId") Long groupId) {
		this.groupService.deleteGroup(groupId);
	}

}
