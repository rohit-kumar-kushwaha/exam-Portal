package com.exam.service;

import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.Query;

import com.exam.entities.Group;
import com.exam.entities.User;

public interface GroupService {
	
	public Group createGroup(Group group);
	
	public Group getGroup(String groupName);
	public Set<Group> getGroup();
	public Set<Group> getGroup(Long userId);
	public Optional<Group> findByGroupId(Long groupId);
	public Set<User> getUserByGroup(Long groupId);
	
	public void deleteGroup(Long groupId);
	
	

}
