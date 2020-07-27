package com.cloudscaleqa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cloudscaleqa.model.Toolgroup;

public interface ToolGrpRepo extends JpaRepository<Toolgroup, String> {
	List<Toolgroup>  findByValue(String value);
	

}
