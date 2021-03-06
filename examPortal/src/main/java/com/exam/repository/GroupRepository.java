package com.exam.repository;

import java.util.Set;

import org.springframework.data.repository.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.exam.entities.Group;
import com.exam.entities.User;

public interface GroupRepository extends JpaRepository<Group, Long>{
	
	public Group findByGroupName(String groupName);
	@Query(value = "Select g from Group g join g.userGroup ug join ug.user u where u.id=:Id")
	public Set<Group> findByGroupByUserId(@Param("Id") Long Id);
	
	@Query(value = "Select u from User u join u.userGroup ug join ug.group g where g.groupId=:gid")
//	@Query(value = "Select g from Group g join g.userGroup ug join ug.user u where g.groupId=:gid")
	public Set<User> findByUserByGroupId(@Param("gid") Long gid);

}
