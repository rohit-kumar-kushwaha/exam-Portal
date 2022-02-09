package com.exam.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entities.Role;
import com.exam.entities.User;

public interface RoleRepository extends JpaRepository<Role, Long>{
	
	

}
