package com.exam.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.entities.Marks;
import com.exam.repository.MarksRepository;
import com.exam.service.MarksService;

@Service
public class MarksServiceImpl implements MarksService {
	
	@Autowired
	private MarksRepository marksRepository;

	@Override
	public Marks addMarks(Marks marks) {
		return this.marksRepository.save(marks);
	}

}
