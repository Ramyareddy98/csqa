package com.cloudscaleqa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cloudscaleqa.model.Tool;

public interface ToolRepository extends JpaRepository<Tool,String> {
	
Tool findByvalue(String value);
}

