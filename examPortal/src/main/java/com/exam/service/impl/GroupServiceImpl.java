package com.exam.service.impl;

import java.util.Collection;
import java.util.LinkedHashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.entities.Group;
import com.exam.entities.User;
import com.exam.repository.GroupRepository;
import com.exam.repository.UserGroupRepository;
import com.exam.service.GroupService;

@Service
public class GroupServiceImpl implements GroupService{
	
	@Autowired
	private GroupRepository groupRepository;
	
	@Autowired
	private UserGroupRepository userGroupRepository;
	
//	@Autowired
//	private GroupService groupService;

	@Override
	public Group createGroup(Group group) {
		return this.groupRepository.save(group);
	}

	@Override
	public Group getGroup(String groupName) {
		return this.groupRepository.findByGroupName(groupName);
	}

	@Override
	public Set<Group> getGroup() {
		return new LinkedHashSet<>(this.groupRepository.findAll());
//		return new LinkedHashSet<Group>((Collection<? extends Group>) this.groupRepository.findAll());
	}

	@Override
	public Optional<Group> findByGroupId(Long groupId) {
		return this.groupRepository.findById(groupId);
	}

	@Override
	public Set<Group> getGroup(Long userId) {
		return new LinkedHashSet<Group>(this.groupRepository.findByGroupByUserId(userId));
	}

	@Override
	public Set<User> getUserByGroup(Long groupId) {
		return this.groupRepository.findByUserByGroupId(groupId);
	}

	@Override
	public void deleteGroup(Long groupId) {
		// TODO Auto-generated method stub
		this.groupRepository.deleteById(groupId);
		
	}

//	@Override
//	public Set<User> getUserByGroup(Long groupId) {
//		return this.groupRepository.findByUserByGroupId(groupId);
//	}



}
