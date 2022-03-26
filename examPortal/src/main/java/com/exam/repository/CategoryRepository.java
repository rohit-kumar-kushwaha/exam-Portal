package com.exam.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
