package com.cloudscaleqa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cloudscaleqa.model.Userrecommendation;

public interface UserRecommendationRepo extends JpaRepository<Userrecommendation, Integer> {

	  //@Query(value = "SELECT * FROM Userrecommendation WHERE email= ?1", nativeQuery = true)
List<Userrecommendation> findByUserEmail(String  email);

	
}
