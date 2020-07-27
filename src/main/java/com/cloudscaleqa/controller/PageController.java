package com.cloudscaleqa.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.cloudscaleqa.model.CustomToolGroup;
import com.cloudscaleqa.model.CustomUser;
import com.cloudscaleqa.model.User;
import com.cloudscaleqa.service.ToolGrpAssoService;
import com.cloudscaleqa.service.UserRecommendation;
import com.cloudscaleqa.service.UserService;

@Controller
public class PageController {

	@Autowired
	UserRecommendation userRecommendationService;
	@Autowired
	UserService userService;
	@Autowired
	ToolGrpAssoService toolGrpAssoService;

	@RequestMapping(method = RequestMethod.POST, value = "/devcenterpage")
	public String welcome(Map<String, Object> model, @RequestBody String emailId) {
		String email1 = emailId.substring(emailId.lastIndexOf("=") + 1);
		String email = email1.trim();
		CustomUser customUser = userRecommendationService.getRecommnededList(email);
		List<CustomToolGroup> toolgrouptoolassocList = toolGrpAssoService.getAllList();
		//////System.out.println("The size is" + toolgrouptoolassocList.size());

		double number = (double) toolgrouptoolassocList.size() / 3;
		int rowNumber = (int) Math.ceil(number);
		//////System.out.println(number + "The rows is" + rowNumber);

		List<Integer> rows = new ArrayList<Integer>();
		for (int num = 1; num <= rowNumber; num++) {
			rows.add(num);
		}

		////System.out.println("The rows size is" + rows.size());
		int i = 1;
		int j = 1;
		Map<String, Object> allMap = new HashMap<String, Object>();
		for (CustomToolGroup customTG : toolgrouptoolassocList) {
			allMap.put(i + "" + j + "bucket", customTG.getToolGroup());
			allMap.put(i + "" + j + "tools", customTG.getTools());

			if (j == 3) {
				j = 0;
				i++;
			}
			j++;
		}
		model.put("allData", allMap);
		model.put("toolGrpAssoService", toolGrpAssoService);

		model.put("rows", rows);
		model.put("allToolGroup", toolgrouptoolassocList);
		if (null != customUser.getUser()) {
			model.put("firstName", customUser.getUser().getFirstName());
			model.put("companyName", customUser.getUser().getCompany());
			model.put("email", customUser.getUser().getEmail());
			model.put("mobile", customUser.getUser().getMobile());
			model.put("userImage", customUser.getUser().getImgSrc());
			if (null != customUser.getToolGroupList()) {
				double rown = (double) customUser.getToolGroupList().size() / 3;
				int rowns = (int) Math.ceil(rown);
				List<Integer> recmndrows = new ArrayList<Integer>();
				for (int num = 1; num <= rowns; num++) {
					recmndrows.add(num);
				}
				model.put("recmndrows", recmndrows);
				int k = 1;
				int l = 1;
				Map<String, Object> recommendedMap = new HashMap<String, Object>();

				for (CustomToolGroup customTG : customUser.getToolGroupList()) {
					recommendedMap.put(k + "" + l + "bucket", customTG.getToolGroup());
					recommendedMap.put(k + "" + l + "tools", customTG.getTools());
					if (l == 3) {
						l = 0;
						k++;
					}
					l++;
				}
				model.put("recommendedMap", recommendedMap);
			}
		} else {
			User userObj = userService.findUser(email);
			if (null != userObj) {
				model.put("firstName", userObj.getFirstName());
				model.put("companyName", userObj.getCompany());
				model.put("email", userObj.getEmail());
				model.put("mobile", userObj.getMobile());
				model.put("userImage", userObj.getImgSrc());

			}
		}
		// List<CustomToolGroup> toolgrouptoolassocList
		// =toolGrpAssoService.getAllList();

		if (customUser.getToolGroupList().isEmpty()) {
			model.put("MessageHeader", "Test Automation Tool-Stack Assessment");
			model.put("MessageDescription",
					"In just a few minutes, you can get an instant automated recommendation on the test automation tool-stack specific to your context. All you need to do is, just answer a few questions to set the context.");
			model.put("MessageBottom", "This is absolutely free of cost!");
			model.put("MessageEnd", "");
			model.put("buttonText", "Assess now");
			
		}else {
			model.put("MessageHeader", "My Test Automation Tool-Stack Assessment");
			model.put("MessageDescription",
					"Based on your answers to the test automation tool-stack assessment questionnaire, here are the recommended tools under different tool group(s).");
			model.put("MessageBottom", "At any time you may take the assessment again.");
			model.put("MessageEnd", "We also recommend that you check-out the 'All' section below to know about various tools and the contexts they can be used for.");
			model.put("buttonText", "Re-assess");
			
		}
		return "dev-center-2";
	}

	@RequestMapping(method = RequestMethod.GET, value = "/devcenterpage")
	public String getDevcenter(Map<String, Object> model) {
		// CustomUser customUser=userRecommendationService.getRecommnededList(email);
		List<CustomToolGroup> toolgrouptoolassocList = toolGrpAssoService.getAllList();
		////System.out.println("The size is" + toolgrouptoolassocList.size());

		double number = (double) toolgrouptoolassocList.size() / 3;
		int rowNumber = (int) Math.ceil(number);
		////System.out.println(number + "The rows is" + rowNumber);

		List<Integer> rows = new ArrayList<Integer>();
		for (int num = 1; num <= rowNumber; num++) {
			rows.add(num);
		}

		////System.out.println("The rows size is" + rows.size());
		int i = 1;
		int j = 1;
		Map<String, Object> allMap = new HashMap<String, Object>();
		for (CustomToolGroup customTG : toolgrouptoolassocList) {
			allMap.put(i + "" + j + "bucket", customTG.getToolGroup());
			allMap.put(i + "" + j + "tools", customTG.getTools());

			if (j == 3) {
				j = 0;
				i++;
			}
			j++;
		}
		model.put("allData", allMap);
		model.put("toolGrpAssoService", toolGrpAssoService);

		model.put("rows", rows);
		model.put("allToolGroup", toolgrouptoolassocList);
		return "dev-center";
	}

}
