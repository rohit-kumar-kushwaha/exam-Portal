package com.exam.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.exam.entities.Group;
import com.exam.entities.UserGroup;

public interface UserGroupRepository extends JpaRepository<UserGroup, Long>{
	
//	

}
