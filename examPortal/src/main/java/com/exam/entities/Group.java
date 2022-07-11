package com.exam.entities;

import java.util.HashSet;
import java.util.Set;

import javax.annotation.Generated;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "group_info")
public class Group {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long groupId;
	private Long secretKey;
	private String groupName;
	private String description;
	private String createdBy;
	
	
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "group")
	@JsonIgnore
	private Set<UserGroup> userGroup = new HashSet<>();
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "groups")
	@JsonIgnore
	private Set<Quiz> quizzes = new HashSet<Quiz>();
	
	
	
	public Set<Quiz> getQuizzes() {
		return quizzes;
	}
	public void setQuizzes(Set<Quiz> quizzes) {
		this.quizzes = quizzes;
	}
	public Set<UserGroup> getUserGroup() {
		return userGroup;
	}
	public void setUserGroup(Set<UserGroup> userGroup) {
		this.userGroup = userGroup;
	}
	public Group() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Group(Long groupId, Long secretKey, String groupName, String createdBy, Set<UserGroup> userGroup, String description) {
		super();
		this.groupId = groupId;
		this.secretKey = secretKey;
		this.groupName = groupName;
		this.createdBy = createdBy;
		this.userGroup = userGroup;
		this.description = description;
	}
	
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Long getGroupId() {
		return groupId;
	}
	public void setGroupId(Long groupId) {
		this.groupId = groupId;
	}
	public Long getSecretKey() {
		return secretKey;
	}
	public void setSecretKey(Long secretKey) {
		this.secretKey = secretKey;
	}
	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	public String getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	
	
	

}
