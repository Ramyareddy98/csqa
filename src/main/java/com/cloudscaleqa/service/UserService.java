package com.cloudscaleqa.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.cloudscaleqa.model.QAModel;
import com.cloudscaleqa.model.Tool;
import com.cloudscaleqa.model.Toolgroup;
import com.cloudscaleqa.model.User;
import com.cloudscaleqa.model.Userrecommendation;
import com.cloudscaleqa.repository.ToolGrpRepo;
import com.cloudscaleqa.repository.ToolRepository;
import com.cloudscaleqa.repository.UserRecommendationRepo;
import com.cloudscaleqa.repository.UserRepository;
import com.cloudscaleqa.util.ApplicationStartup;

@Service
public class UserService {
	@Autowired
	ToolGrpRepo toolGrouppRepo;
	@Autowired
	UserRecommendationRepo userrecomrepo;
	@Autowired
	ToolRepository toolRepo;
	@Autowired
	UserRepository userRepo;
	@Autowired
	private EntityManagerFactory entityManagerFactory;

	@Autowired
	UserRepository userRepository;

	public User findByuser(String userName, String password) {
		return userRepository.findByEmailAndPassword(userName, password);
	}

	public User findUser(String email) {
		return userRepository.findOne(email);
	}

	public User createUser(User user) {
		return userRepository.save(user);
	}

	public User updateUser(User user) {
		return userRepository.save(user);
	}
public void sendEmail(User user) throws InterruptedException, MessagingException {
	JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
	MimeMessage message = mailSender.createMimeMessage();
	MimeMessageHelper helper = new MimeMessageHelper(message);
	helper.setFrom("postmaster@cloudscaleqa.com");
	String[] sendToUsers = {"contact@cloudscaleqa.com","swagata@cloudscaleqa.com","pandari@mytrits.com"};
	helper.setTo(sendToUsers);
   
	helper.setText("The following contact information was submitted on DevCenter. Please take necessary action. <br>"
			+ "FirstName: " + "<b>" + user.getFirstName()
			+ "</b> <br> LastName:" + "<b>" + user.getLastName()
			+ "</b> <br>Company:" + "<b>" + user.getCompany()
			+"</b> <br>Designation/Title:" + "<b>" + user.getAltEmail()
			+"</b> <br>Email:" + "<b>" + user.getEmail()
			+"</b> <br>Phone Number:" + "<b>" + user.getMobile()+"</b> ", true);
	
	helper.setSubject("Mail from DevCenter-Contact-Us");
	ApplicationStartup.emailQ.put(message);
}
	/**
	 * 
	 * @param qaModel
	 * @param userEmail
	 */
	public void createUserRecommend(QAModel qaModel, String userEmail) {

		List<Userrecommendation> userRecommendedList = new ArrayList<Userrecommendation>();
		userRecommendedList = userrecomrepo.findByUserEmail(userEmail);
		for (Userrecommendation obj : userRecommendedList) {
			userrecomrepo.delete(obj.getId());
		}
		User user = userRepo.findOne(userEmail);

		if (qaModel.getGeneric().get(0).getGeneric_auttype().contains("static_analysis")) {
			doStaticAnalysis(qaModel, user);
		}
		if (qaModel.getGeneric().get(0).getGeneric_auttype().contains("unit_testing")) {
			doUnitTesting(qaModel, user);
		}
		if (qaModel.getGeneric().get(0).getGeneric_auttype().contains("ui_web")) {
			doWeb_Ui(qaModel, user);
		}
		if (qaModel.getGeneric().get(0).getGeneric_auttype().contains("ui_desktop")) {
			doDesktop_Ui(qaModel, user);
		}
		if (qaModel.getGeneric().get(0).getGeneric_auttype().contains("ui_mobile")) {
			doMobile_Ui(qaModel, user);
		}
		if (qaModel.getGeneric().get(0).getGeneric_auttype().contains("perf")) {
			doPerformance(qaModel, user);
		}
		if (qaModel.getGeneric().get(0).getGeneric_auttype().contains("api")) {
			doAPI(qaModel, user);
		}
		doFrameWork(qaModel, user);
		if (qaModel.getTechnical().get(0).getTechnical_CI_integration().equals("true")) {
			doContinuousIntegration(qaModel, user);
		}

	}

	/**
	 * 
	 * @param qaModel
	 * @param user
	 */
	public void doContinuousIntegration(QAModel qaModel, User user) {
		List<Toolgroup> toolGrpList = toolGrouppRepo.findByValue("ci");
		Toolgroup toolGrp = toolGrpList.get(0);
		if (qaModel.getTechnical().get(0).getTechnical_CI_tool().equals("unknown")) {
			createRecommandedGrp(user, "jenkins", toolGrp);
		} else {
			createRecommandedGrp(user, qaModel.getTechnical().get(0).getTechnical_CI_tool(), toolGrp);
		}
	}

	/**
	 * 
	 * @param qaModel
	 * @param user
	 */
	public void doFrameWork(QAModel qaModel, User user) {
		List<String> tools = new ArrayList<String>();
		if (qaModel.getGeneric().get(0).getGeneric_context().contains("InSprint")) {
			tools.add("BDD");
			tools.add("ATDD");
			tools.add("Modular");
		}
		if (qaModel.getGeneric().get(0).getGeneric_context().contains("Release Testing")) {
			tools.add("Keyword");
			tools.add("Hybrid");
			tools.add("Modular");
		}
		if (qaModel.getGeneric().get(0).getGeneric_context().contains("Both")) {
			tools.add("Keyword");
			tools.add("Hybrid");
			tools.add("Modular");
			tools.add("BDD");
		}
		// autowner
		List<String> tools1 = new ArrayList<String>();
		if (qaModel.getGeneric().get(0).getGeneric_autowner().contains("dev")) {
			tools1.add("Modular");
			tools1.add("ATDD");
			tools1.add("BDD");
		}
		if (qaModel.getGeneric().get(0).getGeneric_autowner().contains("qa")) {
			tools1.add("Modular");
			tools1.add("Keyword Driven");
			tools1.add("Hybrid");
			tools1.add("BDD");
		}
		if (qaModel.getGeneric().get(0).getGeneric_autowner().contains("ba")) {
			tools1.add("Keyword Driven");
			tools1.add("BDD");
		}
		List<String> tools2 = intersection(tools, tools1);
		List<Toolgroup> toolGrpList = toolGrouppRepo.findByValue("framework");
		Toolgroup toolGrp = toolGrpList.get(0);
		if (tools2.isEmpty()) {
			createRecommandedGrp(user, "BDD", toolGrp);
		} else {
			Set<String> finaltools = new HashSet<String>(tools2);
			for (String tool : finaltools) {
				createRecommandedGrp(user, tool, toolGrp);
			}
		}
	}

	/**
	 * 
	 * @param list1
	 * @param list2
	 * @return
	 */
	public <T> List<T> intersection(List<T> list1, List<T> list2) {
		List<T> list = new ArrayList<T>();

		for (T t : list1) {
			if (list2.contains(t)) {
				list.add(t);
			}
		}

		return list;
	}

	/**
	 * 
	 * @param qaModel
	 * @return
	 */
	public List<String> isProgrammingLanguages(QAModel qaModel) {
		List<String> combinedArray = new ArrayList<String>();
		if (!qaModel.getTechnical().get(0).getTechnical_techstack_programmingLanguages().isEmpty()) {

			combinedArray.addAll(qaModel.getTechnical().get(0).getTechnical_techstack_serverEndTechs());
			combinedArray.addAll(qaModel.getTechnical().get(0).getTechnical_techstack_programmingLanguages());

		} else {
			combinedArray.addAll(qaModel.getTechnical().get(0).getTechnical_techstack_serverEndTechs());

		}

		return combinedArray;
	}

	/**
	 * 
	 * @param qaModel
	 * @param user
	 */
	public void doStaticAnalysis(QAModel qaModel, User user) {
		List<Toolgroup> toolGrpList = toolGrouppRepo.findByValue("static_analysis");
		Toolgroup toolGrp = toolGrpList.get(0);
		if (qaModel.getTechnical().get(0).getTechnical_techstack_programmingLanguages().contains("java")
				|| qaModel.getTechnical().get(0).getTechnical_techstack_programmingLanguages().contains("jsp")
				|| qaModel.getTechnical().get(0).getTechnical_techstack_programmingLanguages().contains("js")) {
			createRecommandedGrp(user, "pmd", toolGrp);

			createRecommandedGrp(user, "sonarqube", toolGrp);
		} else {

			createRecommandedGrp(user, "sonarqube", toolGrp);
		}
	}

	/**
	 * 
	 * @param qaModel
	 * @param user
	 */
	public void doUnitTesting(QAModel qaModel, User user) {
		List<String> combinedList = isProgrammingLanguages(qaModel);
		List<Toolgroup> toolGrpList = toolGrouppRepo.findByValue("unit_testing");
		Toolgroup toolGrp = toolGrpList.get(0);

		if (combinedList.contains("c#") || combinedList.contains(".NET") || combinedList.contains("VB.NET")) {

			createRecommandedGrp(user, "nunit", toolGrp);
		}

		if (combinedList.contains("Java") || combinedList.contains("Scala")) {

			createRecommandedGrp(user, "testing", toolGrp);
		}
		if (combinedList.contains("Groovy") || combinedList.contains("Scala")) {

			createRecommandedGrp(user, "spock", toolGrp);
		}
		if (combinedList.contains("NodeJs") || combinedList.contains("javascript")
				|| combinedList.contains("typescript")) {

			createRecommandedGrp(user, "jasmine", toolGrp);
		}
		if (combinedList.contains("ABAP")) {

			createRecommandedGrp(user, "abap_unit", toolGrp);
		}

		if (combinedList.contains("GO")) {

			createRecommandedGrp(user, "go_test", toolGrp);
		}
		if (combinedList.contains("PHP")) {

			createRecommandedGrp(user, "php_unit", toolGrp);
		}
		if (combinedList.contains("SFDC")) {

			createRecommandedGrp(user, "apex", toolGrp);
		}

	}

	
	/**
	 * 
	 * @param qaModel
	 * @return
	 */
	public String costSubQuery(QAModel qaModel) {
		String costSubQuery = null;
		if (qaModel.getBudget().get(0).getBudget_cots_open().equals("cots")) {
			costSubQuery = " (t.COST >0 AND t.COST <=:cost)";
			return costSubQuery;
		} else if (qaModel.getBudget().get(0).getBudget_cots_open().equals("open")) {
			costSubQuery = " (t.COST =:cost)";
			return costSubQuery;
		} else {
			costSubQuery = " (t.COST <=:cost)";
			return costSubQuery;
		}
	}

	/**
	 * 
	 * @param qaModel
	 * @param user
	 */
	public void doWeb_Ui(QAModel qaModel, User user) {

		EntityManager session = entityManagerFactory.createEntityManager();
		try {
			String costSubQuery = costSubQuery(qaModel);
			if (qaModel.getBudget().get(0).getBudget_cots_open().equals("open")) {
				qaModel.getBudget().get(0).setBudget_range("0");
			}
			Query q = session.createNativeQuery(
					"select DISTINCT t.Value from tool t,toolgroup tg, toolgrouptoolassoc tgta, browsers b, toolbrowserassoc tba, fronendtech fet, toolfrontendtechassoc tfeta, os os,toolosassoc tosa where  b.Value in (:browserList) AND fet.Value in (:frontendList) AND os.Value in (:osList) AND tg.Value = 'ui_web' AND (tgta.TGVal=tg.Value AND tgta.TVal = t.Value) AND (tba.TVal = t.Value AND tba.BRVal = b.Value) AND (tfeta.TVal = t.Value AND tfeta.FTVal = fet.Value) AND (tosa.TVal = t.Value AND tosa.OSVal = os.Value) AND "
							+ costSubQuery);
			q.setParameter("browserList", qaModel.getTechnical().get(0).getTechnical_browsers());
			q.setParameter("frontendList", qaModel.getTechnical().get(0).getTechnical_techstack_frontEndTechs());
			q.setParameter("osList", qaModel.getTechnical().get(0).getTechnical_targetOS());
			q.setParameter("cost", Integer.parseInt(qaModel.getBudget().get(0).getBudget_range()));

			//System.out.println("The query with string is" + q.toString());
			//System.out.println("The query without string  is" + q);
			List<Object> result = q.getResultList();
			//System.out.println("The result is" + result);
			List<Toolgroup> toolGrpList = toolGrouppRepo.findByValue("ui_web");
			Toolgroup toolGrp = toolGrpList.get(0);
			for (Object obj : result) {
				createRecommandedGrp(user, obj.toString(), toolGrp);
			}
		} catch (Exception e) {
			System.out.println("exception" + e);
		} finally {
			if (session.isOpen())
				session.close();
		}

	}

	/**
	 * 
	 * @param qaModel
	 * @param user
	 */
	public void doDesktop_Ui(QAModel qaModel, User user) {

		EntityManager session = entityManagerFactory.createEntityManager();
		try {
			String costSubQuery = costSubQuery(qaModel);
			if (qaModel.getBudget().get(0).getBudget_cots_open().equals("open")) {
				qaModel.getBudget().get(0).setBudget_range("0");
			}
			String cloudSupportQuery=null;
			if(qaModel.getTechnical().get(0).getTechnical_cloudSupport().equals("0")) {
				cloudSupportQuery="(t.CloudExecutionSupport = 1 or t.CloudExecutionSupport = 0)";
			}else {
				cloudSupportQuery="t.CloudExecutionSupport = 1";
			}
			
			Query q = session.createNativeQuery(
					"select DISTINCT  t.Value from tool t,toolgroup tg,toolgrouptoolassoc tgta,os os,desktopapptype dsk, fronendtech fet,toolfrontendtechassoc tfeta, toolosassoc tosa,tooldsktpapptypeassoc tdska where fet.Value in (:frontendList)  AND os.Value in (:osList)  AND tg.Value = 'ui_desktop'  AND dsk.Value in (:desktopList) AND (tgta.TGVal=tg.Value AND tgta.TVal = t.Value)  AND (tfeta.TVal = t.Value AND tfeta.FTVal = fet.Value) AND (tosa.TVal = t.Value AND tosa.OSVal = os.Value)  AND (tdska.DSKAPTPVal = dsk.Value AND tdska.TVal = t.Value)  AND "+cloudSupportQuery+"  AND "
							+ costSubQuery);
			q.setParameter("desktopList", qaModel.getTechnical().get(0).getTechnical_desktop_apps());
			q.setParameter("frontendList", qaModel.getTechnical().get(0).getTechnical_techstack_frontEndTechs());
			q.setParameter("osList", qaModel.getTechnical().get(0).getTechnical_targetOS());
			q.setParameter("cost", Integer.parseInt(qaModel.getBudget().get(0).getBudget_range()));
			List<Object> result = q.getResultList();
			//System.out.println("The result is" + result);
			List<Toolgroup> toolGrpList = toolGrouppRepo.findByValue("ui_desktop");
			Toolgroup toolGrp = toolGrpList.get(0);
			for (Object obj : result) {
				createRecommandedGrp(user, obj.toString(), toolGrp);
			}
		} catch (Exception e) {
			System.out.println("exception" + e);
		} finally {
			if (session.isOpen())
				session.close();
		}

	}

	/**
	 * 
	 * @param qaModel
	 * @param user
	 */
	public void doMobile_Ui(QAModel qaModel, User user) {

		EntityManager session = entityManagerFactory.createEntityManager();
		try {
			String costSubQuery = costSubQuery(qaModel);
			if (qaModel.getBudget().get(0).getBudget_cots_open().equals("open")) {
				qaModel.getBudget().get(0).setBudget_range("0");
			}
			Query q = session.createNativeQuery(
					"select DISTINCT t.Value from tool t, toolgroup tg, os os, mobos mos, mobileapptype mapptp, toolgrouptoolassoc tgta, toolosassoc tosa, toolmobosassoc tmosa, toolmobapptypeassoc tmata where mapptp.Value in (:mapptpList) AND os.Value in (:osList) AND mos.Value in (:mosList) AND tg.Value = 'ui_mobile' AND (tgta.TGVal=tg.Value AND tgta.TVal = t.Value) AND (tosa.TVal = t.Value AND tosa.OSVal = os.Value) AND (tmosa.TVal = t.Value AND tmosa.MOSVal = mos.Value) AND (tmata.MAPPVal = mapptp.Value AND tmata.TVal = t.Value) AND "
							+ costSubQuery);
			q.setParameter("mapptpList", qaModel.getTechnical().get(0).getTechnical_mobile_apps());
			q.setParameter("osList", qaModel.getTechnical().get(0).getTechnical_targetOS());
			q.setParameter("mosList", qaModel.getTechnical().get(0).getTechnical_mobileOSVersion());
			q.setParameter("cost", Integer.parseInt(qaModel.getBudget().get(0).getBudget_range()));
			List<Object> result = q.getResultList();
			//System.out.println("The result is" + result);
			List<Toolgroup> toolGrpList = toolGrouppRepo.findByValue("ui_mobile");
			Toolgroup toolGrp = toolGrpList.get(0);
			for (Object obj : result) {
				createRecommandedGrp(user, obj.toString(), toolGrp);
			}
		} catch (Exception e) {
			System.out.println("exception" + e);
			// return null;
		} finally {
			if (session.isOpen())
				session.close();
		}

	}

	/**
	 * 
	 * @param qaModel
	 * @param user
	 */
	public void doPerformance(QAModel qaModel, User user) {
		List<Toolgroup> toolGrpList = toolGrouppRepo.findByValue("perf");
		Toolgroup toolGrp = toolGrpList.get(0);
		if (qaModel.getTechnical().get(0).getTechnical_perf_apps().contains("load")) {
			createRecommandedGrp(user, "jmeter", toolGrp);
		} else if (qaModel.getTechnical().get(0).getTechnical_perf_apps().contains("stress")
				|| qaModel.getTechnical().get(0).getTechnical_perf_apps().contains("volume")
				|| qaModel.getTechnical().get(0).getTechnical_perf_apps().contains("spike")
				|| qaModel.getTechnical().get(0).getTechnical_perf_apps().contains("endurance")
				|| qaModel.getTechnical().get(0).getTechnical_perf_apps().contains("scalability")) {
			createRecommandedGrp(user, "loadrunner", toolGrp);
		}

		if (qaModel.getTechnical().get(0).getTechnical_perf_types().contains("db")
				|| qaModel.getTechnical().get(0).getTechnical_perf_types().contains("ftp")
				|| qaModel.getTechnical().get(0).getTechnical_perf_types().contains("http")
				|| qaModel.getTechnical().get(0).getTechnical_perf_types().contains("rest")
				|| qaModel.getTechnical().get(0).getTechnical_perf_types().contains("soap")
				|| qaModel.getTechnical().get(0).getTechnical_perf_types().contains("pop3")
				|| qaModel.getTechnical().get(0).getTechnical_perf_types().contains("tcp")) {
			createRecommandedGrp(user, "jmeter", toolGrp);
		} else if (qaModel.getTechnical().get(0).getTechnical_perf_types().contains("db")
				|| qaModel.getTechnical().get(0).getTechnical_perf_types().contains("files")
				|| qaModel.getTechnical().get(0).getTechnical_perf_types().contains("ftp")
				|| qaModel.getTechnical().get(0).getTechnical_perf_types().contains("http")
				|| qaModel.getTechnical().get(0).getTechnical_perf_types().contains("rest")
				|| qaModel.getTechnical().get(0).getTechnical_perf_types().contains("soap")
				|| qaModel.getTechnical().get(0).getTechnical_perf_types().contains("oracle")
				|| qaModel.getTechnical().get(0).getTechnical_perf_types().contains("peoplesoft")
				|| qaModel.getTechnical().get(0).getTechnical_perf_types().contains("pop3")
				|| qaModel.getTechnical().get(0).getTechnical_perf_types().contains("sap")
				|| qaModel.getTechnical().get(0).getTechnical_perf_types().contains("siebel")
				|| qaModel.getTechnical().get(0).getTechnical_perf_types().contains("tcp")) {
			createRecommandedGrp(user, "loadrunner", toolGrp);
		}

	}

	/**
	 * 
	 * @param qaModel
	 * @param user
	 */
	public void doAPI(QAModel qaModel, User user) {
		List<Toolgroup> toolGrpList = toolGrouppRepo.findByValue("api");
		Toolgroup toolGrp = toolGrpList.get(0);
		if (qaModel.getTechnical().get(0).getTechnical_techstack_programmingLanguages().isEmpty()) {

			if (qaModel.getTechnical().get(0).getTechnical_techstack_APITech().contains("rest")) {
				createRecommandedGrp(user, "RestAssured", toolGrp);
			}

		} else {
			if (qaModel.getTechnical().get(0).getTechnical_techstack_programmingLanguages().contains("java")
					&& qaModel.getTechnical().get(0).getTechnical_techstack_APITech().contains("rest")) {
				createRecommandedGrp(user, "RestAssured", toolGrp);
			}
			if (qaModel.getTechnical().get(0).getTechnical_techstack_programmingLanguages().contains("c#")
					&& qaModel.getTechnical().get(0).getTechnical_techstack_APITech().contains("rest")) {
				createRecommandedGrp(user, "restSharp", toolGrp);
			}
		}

		if (qaModel.getTechnical().get(0).getTechnical_techstack_APITech().contains("soap")) {
			createRecommandedGrp(user, "SOAPUI", toolGrp);
		}
		if (qaModel.getTechnical().get(0).getTechnical_techstack_APITech().contains("rest")
				&& qaModel.getTechnical().get(0).getTechnical_techstack_APITech().contains("soap")) {
			createRecommandedGrp(user, "postman", toolGrp);
		}

	}


	/**
	 * 
	 * @param user
	 * @param toolValue
	 * @param toolGrp
	 */
	public void createRecommandedGrp(User user, String toolValue, Toolgroup toolGrp) {
		Tool tool = toolRepo.findByvalue(toolValue);
		if (null != tool) {
			Userrecommendation userrecom = new Userrecommendation();

			userrecom.setUser(user);

			userrecom.setTool(tool);
			userrecom.setToolgroup(toolGrp);
			userrecomrepo.save(userrecom);
		}
	}
}
