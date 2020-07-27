package com.cloudscaleqa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cloudscaleqa.model.User;

public interface UserRepository extends JpaRepository<User, String>{

	User findByEmailAndPassword(String email,String password);
	
}
