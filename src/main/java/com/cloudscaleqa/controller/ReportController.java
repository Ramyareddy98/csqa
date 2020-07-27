package com.cloudscaleqa.controller;

import java.io.IOException;
import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.jasperreports.JasperReportsPdfView;

import com.cloudscaleqa.model.GapAnalysis;
import com.cloudscaleqa.model.Report;
import com.cloudscaleqa.service.GapAnalysisBusinessLogic;

import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JRException;

@RestController
public class ReportController {
	private final Logger log = LoggerFactory.getLogger(ReportController.class);
	 @Value("${logo.url}")
	 private String logourl;
	@Autowired
	private org.springframework.context.ApplicationContext applicationContext;

	@Autowired
	public GapAnalysisBusinessLogic gapAnalysisLogic;

	/**
	 * 
	 * @param image
	 * @return
	 * @throws JRException
	 * @throws IOException
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/report")
	public ModelAndView report(@RequestBody String image) {
		try {
			String base64Image = image.split(",")[1];
			JasperReportsPdfView view = new JasperReportsPdfView();
			view.setUrl("classpath:/reports/SuitabilityReport.jrxml");
			view.setApplicationContext(applicationContext);
			Format formatter = new SimpleDateFormat("dd-MMM-yyyy");
			String date = formatter.format(new Date());
			HashMap<String, Object> params = new HashMap<String, Object>();
			params.put("datetime", date);
			params.put("reportimage", base64Image);
			params.put("datasource", new JREmptyDataSource());
			return new ModelAndView(view, params);
		} catch (Exception e) {
			log.error("Exception in generating suitability analysis report" + e);
			return null;
		}
	}

	@RequestMapping(method = RequestMethod.POST, value = "/cicdreport")
	public ModelAndView ciCdReport(@ModelAttribute GapAnalysis gapAnalysis) {
		try {
			// HashMap<String, Object> params = new HashMap<String, Object>();
			System.out.println("the detais are" + gapAnalysis.getB1());
			String[] buildmgmtAnswers = { gapAnalysis.getB0(), gapAnalysis.getB1(), gapAnalysis.getB2(),
					gapAnalysis.getB3(), gapAnalysis.getB4(), gapAnalysis.getB5(), gapAnalysis.getB6(),
					gapAnalysis.getB7() };
			String[] envAnswers = { gapAnalysis.getE0(), gapAnalysis.getE1(), gapAnalysis.getE2(), gapAnalysis.getE3(),
					gapAnalysis.getE4() };
			String[] releaseAnswers = { gapAnalysis.getR0(), gapAnalysis.getR1(), gapAnalysis.getR2(),
					gapAnalysis.getR3(), gapAnalysis.getR4() };

			String[] testAnswers = { gapAnalysis.getT0(), gapAnalysis.getT1(), gapAnalysis.getT2(), gapAnalysis.getT3(),
					gapAnalysis.getT4(), gapAnalysis.getT5() };
			Map<String, HashMap> analysis = gapAnalysisLogic.analyzeGap(buildmgmtAnswers, envAnswers, releaseAnswers,
					testAnswers);

			HashMap<String, String> buildMaturity = analysis.get("buildMaturityAnalysis");

			HashMap<String, String> envMaturity = analysis.get("envMaturityAnalysis");

			HashMap<String, String> releaseMaturity = analysis.get("releaseMaturityAnalysis");

			HashMap<String, String> testMaturity = analysis.get("testMaturityAnalysis");

			JasperReportsPdfView view = new JasperReportsPdfView();
			view.setUrl("classpath:/reports/GapAnalysisReport.jrxml");
			view.setApplicationContext(applicationContext);
			Format formatter = new SimpleDateFormat("dd-MMM-yyyy");
			String date = formatter.format(new Date());
			HashMap<String, Object> params = new HashMap<String, Object>();
			params.put("logoUrl", logourl);
			params.put("image1", gapAnalysisLogic.getBase64Image(buildMaturity.get("finalLevel")));
			params.put("image2", gapAnalysisLogic.getBase64Image(envMaturity.get("finalLevel")));
			params.put("image3", gapAnalysisLogic.getBase64Image(releaseMaturity.get("finalLevel")));
			params.put("image4", gapAnalysisLogic.getBase64Image(testMaturity.get("finalLevel")));
			params.put("level1", buildMaturity.get("finalLevel"));
			params.put("level2", envMaturity.get("finalLevel"));
			params.put("level3", releaseMaturity.get("finalLevel"));
			params.put("level4", testMaturity.get("finalLevel"));
			params.put("doingwell1", buildMaturity.get("finalDoingWell"));
			params.put("doingwell2", envMaturity.get("finalDoingWell"));
			params.put("doingwell3", releaseMaturity.get("finalDoingWell"));
			params.put("doingwell4", testMaturity.get("finalDoingWell"));
			params.put("doingbetter1", buildMaturity.get("finalImprovements"));
			params.put("doingbetter2", envMaturity.get("finalImprovements"));
			params.put("doingbetter3", releaseMaturity.get("finalImprovements"));
			params.put("doingbetter4", testMaturity.get("finalImprovements"));
			params.put("datetime", date);
			params.put("datasource", new JREmptyDataSource());
			return new ModelAndView(view, params);
		} catch (Exception e) {
			System.out.println("Exception is " + e);
			return null;
		}
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/roireport")
	public ModelAndView roiReport(@ModelAttribute Report report) {
		try {
			String base64Image1 = report.getImage().split(",")[1];
			String base64Image2 = report.getReportName().split(",")[1];
			JasperReportsPdfView view = new JasperReportsPdfView();
			view.setUrl("classpath:/reports/RoiCalculator.jrxml");
			view.setApplicationContext(applicationContext);
			Format formatter = new SimpleDateFormat("dd-MMM-yyyy");
			String date = formatter.format(new Date());
			HashMap<String, Object> params = new HashMap<String, Object>();
			params.put("logoUrl", logourl);
			params.put("datetime", date);
			params.put("reportimage", base64Image1);
			params.put("reportimage2", base64Image2);
			params.put("datasource", new JREmptyDataSource());
			return new ModelAndView(view, params);
		} catch (Exception e) {
			log.error("Exception in generating suitability analysis report" + e);
			return null;
		}
	}

}
