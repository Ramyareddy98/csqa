package com.cloudscaleqa.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONTokener;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class GapAnalysisBusinessLogic {

	@Value("${image.0}")
	private String image0;
	@Value("${image.1}")
	private String image1;
	@Value("${image.2}")
	private String image2;
	@Value("${image.3}")
	private String image3;
	@Value("${image.4}")
	private String image4;
	@Value("${image.5}")
	private String image5;
	@Value("${json.Fileurl}")
	private String jsonFileUrl;
	
	
	private final String BULLET_UTF = "\u2022";
	private final boolean DEBUG_MODE = false;

	private HashMap<String, Integer> levelThresholdMap = new HashMap<String, Integer>();
	private HashMap<String, Double> levelAdjustmentMap = new HashMap<String, Double>();
	private HashMap<String, String> doingWellMap = new HashMap<String, String>();
	private HashMap<String, String> improvementMap = new HashMap<String, String>();

	public String getBase64Image(String level) {
		String base64Image = "";
		if (level.equals("0")) {
			return base64Image = image0;
		} else if (level.equals("1")) {
			return base64Image = image1;
		} else if (level.equals("2")) {
			return base64Image = image2;
		} else if (level.equals("3")) {
			return base64Image = image3;
		} else if (level.equals("4")) {
			return base64Image = image4;
		} else {
			return base64Image = image5;
		}
	}

	private void prepareMapsFromJSON() throws IOException {
		JSONTokener tokener = null;
		JSONArray jArr = null;
		if (DEBUG_MODE)
			System.out.println("preparing map from JSON");
		try {

			// ClassPathResource resource = new
			// ClassPathResource("gap_analysis_answer.json");
		/*	File file = new File(
					"/var/lib/jenkins/workspace/CloudScaleQA_Deploy/CloudScaleQA/target/gap_analysis_answer.json");
			*/
			File file =new File(jsonFileUrl);
			tokener = new JSONTokener(new FileReader(file));

			// Get JSONArray of answers and their attributes
			// Store answerKey : <Attribute> in various Maps
			jArr = new JSONArray(tokener);
			for (int i = 0; i < jArr.length(); i++) {
				JSONObject ansJSONObj = (JSONObject) jArr.get(i);
				String ansKey = (String) ansJSONObj.keys().next();
				JSONObject ansAttribs = ansJSONObj.getJSONObject(ansKey);

				levelThresholdMap.put(ansKey, ansAttribs.getInt("lvl_threshold"));
				levelAdjustmentMap.put(ansKey, ansAttribs.getDouble("lvl_adjustment"));
				doingWellMap.put(ansKey, ansAttribs.getString("doing_well"));
				improvementMap.put(ansKey, ansAttribs.getString("improvement"));

				if (DEBUG_MODE) {
					displayAllMapContents();
				}
			}

		} catch (FileNotFoundException e) {
			System.out.println("FileNotFoundException: " + e.getMessage());
		} catch (JSONException e) {
			System.out.println("JSONException: " + e.getMessage());
		}
	}

	private void displayAllMapContents() {
		System.out.println(levelThresholdMap.toString());
		System.out.println(levelAdjustmentMap.toString());
		System.out.println(doingWellMap.toString());
		System.out.println(improvementMap.toString());
	}

	public Map<String, HashMap> analyzeGap(String[] buildmgmtAnswers, String[] envAnswers, String[] releaseAnswers,
			String[] testAnswers) throws IOException {

		Map<String, HashMap> analysisAndRecomm = new HashMap<String, HashMap>();

		if (buildmgmtAnswers.length == 0 || envAnswers.length == 0 || releaseAnswers.length == 0
				|| testAnswers.length == 0) {
			System.out.println("At least one of the inputs is a blank array. Cannot proceed.");
			return null;
		}

		// Load JSON, parse it into various Map variables
		prepareMapsFromJSON();

		// get analysis Map for each area, put it in Map and return
		analysisAndRecomm.put("buildMaturityAnalysis", getAnalysisMap(buildmgmtAnswers));
		analysisAndRecomm.put("envMaturityAnalysis", getAnalysisMap(envAnswers));
		analysisAndRecomm.put("releaseMaturityAnalysis", getAnalysisMap(releaseAnswers));
		analysisAndRecomm.put("testMaturityAnalysis", getAnalysisMap(testAnswers));

		return analysisAndRecomm;
	}

	private HashMap<String, String> getAnalysisMap(String[] answerKeys) {

		double level = 0;
		double levelAdj = 0.0;
		String doingWellList = "";
		String improvementList = "";

		HashMap<String, String> analysisMap = new HashMap<String, String>();

		for (String answerKey : answerKeys) {
			double currLevel = (double) levelThresholdMap.get(answerKey);
			if (currLevel > level) {
				level = currLevel;
			}
			levelAdj += levelAdjustmentMap.get(answerKey);
			String currDoingWell = doingWellMap.get(answerKey).trim();
			if (!currDoingWell.isEmpty()) {
				doingWellList +=  " "+ currDoingWell ;
			}
			String currImprovement = improvementMap.get(answerKey).trim();
			if (!currImprovement.isEmpty()) {
				improvementList += " "+ currImprovement;
			}
		}

		level += levelAdj;
		// If final adjusted level is < = 0, bring it to 1.0
		if (level <= 1.0) {
			level = 1.0;
		}

		if (doingWellList.isEmpty()) {
			doingWellList = "Well, it seems like you really need to focus in this particular area within your"
					+ " Continuous Integration / Continuous Delivery process maturity."
					+ " Please go through the list of what you can do better.";
		}

		if (improvementList.isEmpty()) {
			improvementList = "Just sustain what you are doing. Keep up the great work!";
		}

		analysisMap.put("finalLevel", (long) (Math.round(level)) + "");
		analysisMap.put("finalDoingWell", doingWellList.trim());
		analysisMap.put("finalImprovements", improvementList.trim());

		return analysisMap;
	}

}
