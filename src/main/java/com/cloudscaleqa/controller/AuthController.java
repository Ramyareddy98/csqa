package com.cloudscaleqa.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cloudscaleqa.model.QABudget;
import com.cloudscaleqa.model.QAGeneric;
import com.cloudscaleqa.model.QAModel;
import com.cloudscaleqa.model.QATechnical;
import com.cloudscaleqa.model.User;
import com.cloudscaleqa.repository.ToolGrpRepo;
import com.cloudscaleqa.repository.ToolRepository;
import com.cloudscaleqa.repository.UserRecommendationRepo;
import com.cloudscaleqa.repository.UserRepository;
import com.cloudscaleqa.service.UserService;

@RestController
public class AuthController {

	@Autowired
	UserService userService;

	@Autowired
	ToolGrpRepo toolGrouppRepo;
	@Autowired
	UserRecommendationRepo userrecomrepo;
	@Autowired
	ToolRepository toolRepo;
	@Autowired
	UserRepository userRepo;

	@RequestMapping(method = RequestMethod.GET, value = "/userLogin", params = { "userName", "password" })
	public ResponseEntity<User> login(@RequestParam(value = "userName") String userName,
			@RequestParam(value = "password") String password) {
		try {
			User user = userService.findByuser(userName, password);
			if (null != user) {
				return new ResponseEntity<User>(user, HttpStatus.OK);
			} else {
				return new ResponseEntity<User>(user, HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<User>(new User(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@RequestMapping(method = RequestMethod.POST, value = "/user")
	public ResponseEntity<User> createUSer(@RequestBody User userObject) {
		try {
			User userObj = userService.findUser(userObject.getEmail());
			if (null == userObj) {
				User user = new User();
				user.setFirstName(userObject.getFirstName());
				user.setEmail(userObject.getEmail());
				user.setLastName(userObject.getFirstName());
				user.setImgSrc(userObject.getImgSrc());
				// user.setMobile("8885604256");
				User newUser = userService.createUser(user);

				return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
			} else {
				userObj.setImgSrc(userObject.getImgSrc());
				User newUser = userService.updateUser(userObj);
				return new ResponseEntity<User>(newUser, HttpStatus.CONFLICT);
			}

		} catch (Exception e) {
			return new ResponseEntity<User>(new User(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@RequestMapping(method = RequestMethod.POST, value = "/signUpUser")
	public ResponseEntity<User> signUpUser(@RequestBody User userObject) {
		User userObj = userService.findUser(userObject.getEmail());
		if (null == userObj) {
			User user = new User();
			user.setFirstName(userObject.getFirstName());
			user.setEmail(userObject.getEmail());
			user.setLastName(userObject.getFirstName());
			user.setImgSrc(userObject.getImgSrc());
			if (null == user.getImgSrc()) {

				user.setImgSrc("/assets/images/default_user_avatar.jpg");
			}
			user.setMobile(userObject.getMobile());
			user.setCompany(userObject.getCompany());
			user.setPassword(userObject.getPassword());
			User newUser = userService.createUser(user);

			return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
		} else if (null == userObj.getPassword()) {
			userObj.setFirstName(userObject.getFirstName());
			userObj.setEmail(userObject.getEmail());
			userObj.setLastName(userObject.getFirstName());
			if (null == userObj.getImgSrc()) {

				userObj.setImgSrc("/assets/images/default_user_avatar.jpg");
			}

			userObj.setMobile(userObject.getMobile());
			userObj.setCompany(userObject.getCompany());
			userObj.setPassword(userObject.getPassword());
			User newUser = userService.createUser(userObj);
			return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<User>(new User(), HttpStatus.CONFLICT);
		}
		// return null;

	}

	@RequestMapping(method = RequestMethod.GET, value = "/qamodel")
	public ResponseEntity<QAModel> qamodel() {
		try {
			QAModel qaModel = new QAModel();
			List<QAGeneric> generic = new ArrayList<QAGeneric>();
			QAGeneric qaGeneric = new QAGeneric();
			qaGeneric.setGeneric_autowner("qa");
			qaGeneric.setGeneric_context("sprint");
			List<String> generic_auttype = new ArrayList<String>();
			generic_auttype.add("static_analysis");
			generic_auttype.add("unit_testing");
			generic_auttype.add("ui_web");
			generic_auttype.add("ui_desktop");
			generic_auttype.add("ui_mobile");
			generic_auttype.add("perf");
			generic_auttype.add("api");
			qaGeneric.setGeneric_auttype(generic_auttype);
			generic.add(qaGeneric);
			qaModel.setGeneric(generic);
			//////////////////////////////
			List<QATechnical> technical = new ArrayList<QATechnical>();
			QATechnical qaTechnical = new QATechnical();
			List<String> technical_browsers = new ArrayList<String>();

			technical_browsers.add("chrome");
			technical_browsers.add("mozilla");
			technical_browsers.add("ie");
			technical_browsers.add("edge");
			technical_browsers.add("safari");
			qaTechnical.setTechnical_browsers(technical_browsers);

			List<String> technical_desktop_apps = new ArrayList<String>();
			technical_desktop_apps.add("erp");
			technical_desktop_apps.add("pos");
			technical_desktop_apps.add("standard");
			qaTechnical.setTechnical_desktop_apps(technical_desktop_apps);

			qaTechnical.setTechnical_cloudSupport("1");

			List<String> technical_mobile_apps = new ArrayList<String>();
			technical_mobile_apps.add("mobile_native");
			technical_mobile_apps.add("mobile_hybrid");
			technical_mobile_apps.add("mobile_browser_based");
			qaTechnical.setTechnical_mobile_apps(technical_mobile_apps);

			List<String> technical_mobileOSVersion = new ArrayList<String>();
			technical_mobileOSVersion.add("ios7");
			technical_mobileOSVersion.add("ios10");
			technical_mobileOSVersion.add("andr2");
			technical_mobileOSVersion.add("andr7");
			qaTechnical.setTechnical_mobileOSVersion(technical_mobileOSVersion);

			List<String> technical_targetOS = new ArrayList<String>();
			technical_targetOS.add("linux");
			technical_targetOS.add("windows");
			technical_targetOS.add("mac");
			qaTechnical.setTechnical_targetOS(technical_targetOS);

			List<String> technical_techstack_programmingLanguages = new ArrayList<String>();
			technical_techstack_programmingLanguages.add("c#");
			technical_techstack_programmingLanguages.add("groovy");
			technical_techstack_programmingLanguages.add("go");
			technical_techstack_programmingLanguages.add("java");
			technical_techstack_programmingLanguages.add("js");
			technical_techstack_programmingLanguages.add("perl");
			technical_techstack_programmingLanguages.add("php");
			technical_techstack_programmingLanguages.add("python");
			technical_techstack_programmingLanguages.add("ruby");
			technical_techstack_programmingLanguages.add("type");
			technical_techstack_programmingLanguages.add("vbs");
			qaTechnical.setTechnical_techstack_programmingLanguages(technical_techstack_programmingLanguages);

			List<String> technical_techstack_frontEndTechs = new ArrayList<String>();
			technical_techstack_frontEndTechs.add("BootStrap");
			technical_techstack_frontEndTechs.add("jQuery");
			technical_techstack_frontEndTechs.add("Ajax");
			technical_techstack_frontEndTechs.add("ASP.NET");
			technical_techstack_frontEndTechs.add("Reactjs");
			technical_techstack_frontEndTechs.add("Zeptojs");
			technical_techstack_frontEndTechs.add("Angular");
			technical_techstack_frontEndTechs.add("Ember");
			technical_techstack_frontEndTechs.add("Backbone");
			technical_techstack_frontEndTechs.add("CodeJock");
			technical_techstack_frontEndTechs.add("Infragistics");
			technical_techstack_frontEndTechs.add("Syncfusion");
			technical_techstack_frontEndTechs.add("Oracle Forms");
			technical_techstack_frontEndTechs.add("Telerik");
			technical_techstack_frontEndTechs.add("Qt");
			technical_techstack_frontEndTechs.add("WPF");
			technical_techstack_frontEndTechs.add("Standard Windows");
			qaTechnical.setTechnical_techstack_frontEndTechs(technical_techstack_frontEndTechs);

			List<String> technical_techstack_serverEndTechs = new ArrayList<String>();
			technical_techstack_serverEndTechs.add("PHP");
			technical_techstack_serverEndTechs.add("Java");
			technical_techstack_serverEndTechs.add("Scala");
			technical_techstack_serverEndTechs.add("NodeJS");
			technical_techstack_serverEndTechs.add(".NET");
			technical_techstack_serverEndTechs.add("Oracle Apps");
			technical_techstack_serverEndTechs.add("SFDC");

			qaTechnical.setTechnical_techstack_serverEndTechs(technical_techstack_serverEndTechs);

			List<String> technical_techstack_APITech = new ArrayList<String>();
			technical_techstack_APITech.add("rest");
			technical_techstack_APITech.add("soap");
			qaTechnical.setTechnical_techstack_APITech(technical_techstack_APITech);

			List<String> technical_perf_apps = new ArrayList<String>();
			technical_perf_apps.add("db");
			technical_perf_apps.add("files");
			technical_perf_apps.add("ftp");
			technical_perf_apps.add("http");
			technical_perf_apps.add("rest");
			technical_perf_apps.add("soap");
			technical_perf_apps.add("oracle");
			technical_perf_apps.add("peoplesoft");
			technical_perf_apps.add("mail");
			technical_perf_apps.add("sap");
			technical_perf_apps.add("siebel");
			technical_perf_apps.add("tcp");
			qaTechnical.setTechnical_perf_apps(technical_perf_apps);

			List<String> technical_perf_types = new ArrayList<String>();
			technical_perf_types.add("load");
			technical_perf_types.add("stress");
			technical_perf_types.add("volume");
			technical_perf_types.add("spike");
			technical_perf_types.add("endurance");
			technical_perf_types.add("scalability");
			qaTechnical.setTechnical_perf_types(technical_perf_types);

			qaTechnical.setTechnical_CI_integration("true");
			qaTechnical.setTechnical_CI_tool("unknown");

			technical.add(qaTechnical);

			///
			List<QABudget> budget = new ArrayList<QABudget>();
			QABudget qabudget = new QABudget();
			qabudget.setBudget_cots_open("any");
			qabudget.setBudget_range("2k");
			budget.add(qabudget);
			qaModel.setBudget(budget);
			qaModel.setTechnical(technical);

			/*
			 * for(QAGeneric generic1: qaModel.getGeneric()) { for(String
			 * autoType:generic1.getGeneric_auttype()) {
			 * if(autoType.equals("static_analysis")) { for(QATechnical
			 * technical1:qaModel.getTechnical()) { for(String
			 * programlng:technical1.getTechnical_techstack_programmingLanguages()) {
			 * if(programlng.equals("java")||programlng.equals("jsp")||programlng.equals(
			 * "js")) {
			 * 
			 * } } }
			 * 
			 * } } }
			 */
			// 1

			userService.createUserRecommend(qaModel, "pandari@mytrits.com");

			return new ResponseEntity<QAModel>(qaModel, HttpStatus.OK);

		} catch (Exception e) {

		}
		return null;

	}

	@RequestMapping(method = RequestMethod.POST, value = "/QA", params = { "email" })
	public ResponseEntity<String> qA(@RequestBody QAModel qamodel, @RequestParam(value = "email") String email) {
		userService.createUserRecommend(qamodel, email);
		return new ResponseEntity<String>(HttpStatus.OK);

	}



	@RequestMapping(method = RequestMethod.POST, value = "/supportEmail")
	public ResponseEntity<User> sendEmail(@RequestBody User userObject) {
		try {
			userService.sendEmail(userObject);
			return new ResponseEntity<User>(new User(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<User>(new User(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
}
