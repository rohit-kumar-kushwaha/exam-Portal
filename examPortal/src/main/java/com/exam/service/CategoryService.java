package com.exam.service;

import java.util.Set;

import com.exam.entities.Category;

public interface CategoryService {
	
	public Category addCategory(Category category);
	public Category updateCategory(Category category);
	public Set<Category> getCategories();
	public Category getCategory(long CategoryId);
	public void deleteCategory(long categoryId );
	

}
