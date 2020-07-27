package com.cloudscaleqa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cloudscaleqa.model.CustomToolGroup;
import com.cloudscaleqa.model.CustomUser;
import com.cloudscaleqa.service.ToolGrpAssoService;
import com.cloudscaleqa.service.UserRecommendation;

@RestController
public class RecommendedController {

	@Autowired
	UserRecommendation userRecommendedService;
	@Autowired
	ToolGrpAssoService toolGrpAssoService;

	@RequestMapping(method = RequestMethod.GET, value = "/userRecommended", params = { "email" })
	public ResponseEntity<CustomUser> getRecommended(@RequestParam(value = "email") String email) {
		try {
			CustomUser UserrecommendationList = userRecommendedService.getRecommnededList(email);
			if (null != UserrecommendationList) {
				return new ResponseEntity<CustomUser>(UserrecommendationList, HttpStatus.OK);
			} else {
				return new ResponseEntity<CustomUser>(UserrecommendationList, HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<CustomUser>(new CustomUser(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@RequestMapping(method = RequestMethod.GET, value = "/All")
	public ResponseEntity<List<CustomToolGroup>> All() {
		try {
			List<CustomToolGroup> toolgrouptoolassocList = toolGrpAssoService.getAllList();
			// return (ResponseEntity<List<CustomToolGroup>>) ;
			return new ResponseEntity<List<CustomToolGroup>>(toolgrouptoolassocList, HttpStatus.OK);
		} catch (Exception e) {
			// return new ResponseEntity<User>(new User(),
			// HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return null;

	}

}
