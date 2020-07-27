	
	
	function submitAnswers(){
		
		var maxNoOfQuarters=20;
		var basic = 1000;
		var singleAutoTestExeCost = 0.015;
		var singleManualTestExeCost = 5;

		var autoTestWriteCost = 46;
		var manualTestWriteCost = 5.5;
		var constAutoToolLicenceCost=500;
		var constAutoToolRenewalCost=1000;
		var constpersourceautomationperquarter=120;
		// var autoToolLicenceCost = 1250;
		var productivityPercent =5;
          var manualOnSiteBilling=60;
			var manualOffSiteBilling=18;
			var automationOnSiteBilling=75;
			var automationOffSiteBilling=25;
			var autoExecCostinhr=0.030833;
			var manualExceCostinhr=0.320048;
			var autoWriteCostinhr=3.86;
			var manualWriteCostinhr=0.5;
			// //////////////////
		
	var autoToolLicenceCost=0;
	var autoToolRenewalCost=0;
	if(document.getElementById("lifespan1-1").checked){
		autoToolLicenceCost=constAutoToolLicenceCost;
		autoToolRenewalCost=constAutoToolRenewalCost;
	}else if(document.getElementById("lifespan1-2").checked){
		autoToolLicenceCoste=0;
		autoToolRenewalCost=0;
	}
	var automationTeamMembers=parseInt(document.getElementById("input8a").value);
	var automationTeamMemOnSite=document.getElementById("input8b").value;
	var automationTeamMemOffSite=100-automationTeamMemOnSite;
	var costOfAutoResource=((((automationTeamMembers)*(automationTeamMemOnSite/100))*automationOnSiteBilling)+(((automationTeamMembers)*(automationTeamMemOffSite/100))*automationOffSiteBilling))/automationTeamMembers;
	
	var manualTeamMembers=parseInt(document.getElementById("input7a").value);
	var manualTeamMemOnSite=document.getElementById("input7b").value;
	var manualTeamMemOffSite=100-manualTeamMemOnSite;
	var costOfManualResource=((((manualTeamMembers)*(manualTeamMemOnSite/100))*manualOnSiteBilling)+(((manualTeamMembers)*(manualTeamMemOffSite/100))*manualOffSiteBilling))/manualTeamMembers;
	
	
	var costOfExecutingAutoTestA11=costOfAutoResource*autoExecCostinhr;
	var costOfExecutingManualTestA12=costOfManualResource*manualExceCostinhr;
	var costOfVolatilityA13=1;
	
	var FullManualExeCostA23 = costOfExecutingManualTestA12;
	
		
	var costOfWritingAutoTestA16=costOfAutoResource*autoWriteCostinhr;
	var costOfWritingManualTestA17=costOfAutoResource*manualWriteCostinhr;
	var roiResultList =[];
	var netCostPerTestList = [];
	var irrPercent = 0;
	
	// var noOfQuarters = parseInt(document.getElementById("input5").value);
	
	
	
	var automationPercent = parseInt(document.getElementById("input3").value);
	var targetAutoPercent = parseInt(document.getElementById("input4").value);
	
	var noOfTestCases = parseInt(document.getElementById("input1").value);
	var testCaseIncreasePercent = document.getElementById("input2").value;	
	
	 var futureTargetTestCycles = document.getElementById("input11").value;//This
	// should be calculated value not direct value
	var q10=parseInt(document.getElementById("input10").value);
	var q13=parseInt(document.getElementById("input13").value);
        
	//console.log("===================inputs++============= 1 "+noOfTestCases);
	//console.log("===================inputs++============= 2 "+testCaseIncreasePercent);
	//console.log("===================inputs++============= 3 "+automationPercent);
	//console.log("===================inputs++============= 4 "+targetAutoPercent);
	//console.log("===================inputs++============= 7 "+manualTeamMembers   + " "+manualTeamMemOnSite );
	//console.log("===================inputs++============= 8 "+automationTeamMembers +" "+automationTeamMemOnSite);
	
	//console.log("===================inputs++============= 10 "+q10);
	//console.log("===================inputs++============= 11 "+futureTargetTestCycles);
	//console.log("===================inputs++============= 13 "+q13);
	
	
	
	
	var targetTestCycles =q10*q13;
	
	// var noOfTestCycles = parseInt(document.getElementById("input10").value);
	
	var autoTestCases = parseInt(noOfTestCases*(automationPercent/100));// its
																		// fine
	
	var manualTestCases = noOfTestCases - autoTestCases;// its fine
	
	var target90=noOfTestCases*(90/100);
	var currentTest=autoTestCases;
	var total=target90	-currentTest;
	
	// var rateOfChange=testCaseIncreasePercent;
	
	var totalperquarter=constpersourceautomationperquarter*automationTeamMembers;
	var quarters=Math.round(total/totalperquarter);
	var inAll=Math.round((testCaseIncreasePercent/100)*quarters*total);
	var noOfQuarters = Math.round(inAll/totalperquarter)+quarters;
	//console.log("@@@Total number of Quarters "+noOfQuarters);
	var initialQuarters=noOfQuarters;
	if(noOfQuarters==0){
		initialQuarters=1;
		noOfQuarters=1;
	}
	
	if(noOfQuarters==1){
		noOfQuarters=2;
		//console.log("@@@Total number of Quarters After increment of 1 "+noOfQuarters);
			
	}
	
	//console.log("##Total Test cases"+ noOfTestCases);
	//console.log("##Automated Test cases"+ autoTestCases);
	//console.log("##Manual Test cases"+ manualTestCases);
	//console.log("##Test Cycles"+ targetTestCycles);
	//console.log("##Totalperquater "+ totalperquarter);
	
	
	//pandari//var costOfExecutingAutoTest=(parseInt(document.getElementById("input1").value)*(parseInt(document.getElementById("input4").value)/100))*costOfExecutingAutoTestA11*targetTestCycles;
	var costOfExecutingAutoTest=autoTestCases*costOfExecutingAutoTestA11*targetTestCycles;
	//console.log("-->Cost of executing Auto test"+costOfExecutingAutoTest);
	var costOfExecutingManualTest= manualTestCases*costOfExecutingManualTestA12*targetTestCycles;
	//console.log("-->Cost of executing Manual test"+costOfExecutingManualTest);
	

	var costOfVolatility=(25/100)*noOfTestCases*costOfVolatilityA13;
	//console.log("-->Cost of volatility of test "+costOfVolatility);
	

	// var totalExecutionCostQ1 = (autoTestCases*singleAutoTestExeCost) +
	// (manualTestCases*singleManualTestExeCost)+;//Multiply with testcycles and
	// add cost of volatility
		var totalExecutionCostQ1 = costOfExecutingAutoTest+ costOfExecutingManualTest+costOfVolatility;
		//console.log("-->Total Execution Cost"+totalExecutionCostQ1);
		
	//pandari//var autoTestWriteCostForQ1 = (parseInt(document.getElementById("input1").value)*(parseInt(document.getElementById("input4").value)/100))*costOfWritingAutoTestA16;
	
	var autoTestWriteCostForQ1 = autoTestCases*costOfWritingAutoTestA16;
	//console.log("==>Cost of writing auto test"+autoTestWriteCostForQ1);
	var manualTestWriteCostForQ1 = (noOfTestCases-autoTestCases)*costOfWritingManualTestA17; ///(c4-c5)*A17
	//console.log("==>Cost of writing manual test"+manualTestWriteCostForQ1);
	var autoToolLicenceCostQ1=(autoToolLicenceCost/4)*automationTeamMembers;
	//console.log("==>Auto Tool Licence cost"+autoToolLicenceCostQ1);
	var autoToolRenewalCostQ1=0;
	var totalInvestmentForQ1 = autoTestWriteCostForQ1*1+manualTestWriteCostForQ1*1+autoToolLicenceCostQ1*1+autoToolRenewalCostQ1;// Add
	
 //console.log("==>Total Investment"+totalInvestmentForQ1);																										// auto
																																	// tool
																																	// renewal
																																	// cost
	
	var totalAutoModelCosts = totalExecutionCostQ1*1+totalInvestmentForQ1*1;// its
																			// fine
	var fullManualModelCosts = noOfTestCases*FullManualExeCostA23*targetTestCycles;// multiply
																					// with
																					// testcycles
	var productivityForQ1 = 0;
	var netSavingForQ1 = fullManualModelCosts*1-totalAutoModelCosts*1+productivityForQ1*1;// its
																						// fine
	// var cumilativeForQ1 = netSavingForQ1;
	//console.log("The fullmanualmodelcost is "+fullManualModelCosts+" and The totalAutoModelCost is "+totalAutoModelCosts+ " and productivity"+productivityForQ1);
	
	roiResultList.push({
			"quarterNo":"Q1",
			"noOfTestCases":noOfTestCases,
			"netSavings":netSavingForQ1,
			"cumulative":netSavingForQ1
		});
	//console.log("======netCostPerAutoTest is "+ parseInt((totalAutoModelCosts/noOfTestCases)/targetTestCycles));
	//console.log("======The netCostPerManualTest is "+ parseInt((fullManualModelCosts/noOfTestCases)/targetTestCycles) );
	//console.log("======The Netsavings is "+ netSavingForQ1);
	
	netCostPerTestList.push({
		"quarterNo":"Q1",
		"netCostPerAutoTest":parseInt((totalAutoModelCosts/noOfTestCases)/targetTestCycles),
		"netCostPerManualTest":parseInt((fullManualModelCosts/noOfTestCases)/targetTestCycles)
	});
		
	var cumulativeForQ = netSavingForQ1;
	//console.log("&&%%%%%%%%%%%%&&&&&&&&&&&&&&&&&&&The cumulativeForQ is "+ cumulativeForQ);
	
	var prevTestCases = noOfTestCases;//c4
	 //d48-d44/g29
	var totaltargetperquarter=(futureTargetTestCycles*q13)-targetTestCycles;//q11*q13;
	var testCyclesIncreament=totaltargetperquarter/initialQuarters;
	var firstCycle=targetTestCycles;
	//pandari //var totalperQ=totalperquarter+(parseInt(document.getElementById("input1").value)*(parseInt(document.getElementById("input4").value)/100));
	var totalperQ=totalperquarter+autoTestCases;
	var prevAutotestcase=autoTestCases;
    var isTargetReached=0;
	// From sencond onwards
	if(noOfQuarters>0 && isFinite(noOfQuarters)){
	for(var i=2; i<= noOfQuarters; i++){
		//var prevAutotestcase=c5;
		
		if(firstCycle<(futureTargetTestCycles*q13)){
			firstCycle=firstCycle+testCyclesIncreament;
			
		}else if(firstCycle>=(futureTargetTestCycles*q13)){
			firstCycle=futureTargetTestCycles*q13;
		}
		//console.log(i+"firstcycle"+firstCycle);
		 // D20=D16+D17+D18+D19 //D16==(D5-C5)*$A$16
		if(totalperQ > target90){
			totalperQ=target90;	
			//console.log("Inside total **************"+ totalperQ );
			//break;
			isTargetReached=1;
		}
		var totaltestcasess= prevTestCases*(1+(testCaseIncreasePercent/100));
		//console.log(i+"###Total Test cases"+totaltestcasess );
		//console.log(i+"###Automated Test cases"+ totalperQ );
		
			
		var manualTestCase=totaltestcasess-totalperQ;
		//console.log(i+"###Manual Test cases"+ manualTestCase);
		//console.log(i+"###Test Cycles"+ firstCycle);
		//console.log("the prevtestcases "+prevTestCases);
		//console.log("the prevAutotestcase "+prevAutotestcase);
		
		var automatedTestCasescostWriting= (totalperQ-prevAutotestcase)*costOfWritingAutoTestA16;// D16
		//console.log(i+"===>Cost of writing auto test"+ automatedTestCasescostWriting);
		var costofwritingmanualtest=(totaltestcasess-prevTestCases)*costOfWritingManualTestA17;// D17
		//console.log(i+"===>Cost of writing manual test"+ costofwritingmanualtest);
		var licenseCost=(autoToolLicenceCost/4)*automationTeamMembers;// D18
		//console.log(i+"===>Auto Tool Licence cost"+ licenseCost);
		var licenseRenewal=0;
		var productivityForQ =0;
		if(i>4){
			licenseRenewal=(autoToolRenewalCost/4)*automationTeamMembers;
			
			//console.log(i+"===>Auto Tool License Renewal"+ licenseRenewal);
			
		}
		productivityForQ=firstCycle*1*(productivityPercent/100);
		//console.log(i+"$$$$$$$$$$>automatedTestCasescostWriting"+automatedTestCasescostWriting);
		//console.log(i+"$$$$$$$$$$>costofwritingmanualtest"+costofwritingmanualtest);
		//console.log(i+"$$$$$$$$$$>licenseCost"+licenseCost);
		//console.log(i+"$$$$$$$$$$>licenseRenewal"+licenseRenewal);
		
		var totalInvestment= automatedTestCasescostWriting+costofwritingmanualtest+licenseCost+licenseRenewal ;// D16+d17+18+d19
		//console.log(i+"===>Total Investment"+totalInvestment);
		var costofexecutingautotests= totalperQ*costOfExecutingAutoTestA11*firstCycle ;// D11
		//console.log(i+"--->Cost of executing Auto test"+costofexecutingautotests);
		
		var costofexecutingmanualtests=manualTestCase*costOfExecutingManualTestA12*firstCycle;// D12\
		//console.log(i+"--->Cost of executing Manual test"+costofexecutingmanualtests);
																									// //d6*a12*d8
																										// //d6=d4-d5
																										// //d4==C4*(1+$A$4*D7)
		var costofvolatilitys= (25/100)*totaltestcasess*costOfVolatilityA13; // D13
		//console.log(i+"--->Cost of volatility of test (Test maintenance cost)"+costofvolatilitys);
		
		var totalExecutionCosts= costofexecutingautotests+costofexecutingmanualtests+costofvolatilitys;//c11+c12+c13
		
		//console.log(i+"--->Total Execution Cost"+totalExecutionCosts);
		//console.log(i+ "00000000> totalInvestment Cost"+totalInvestment);
		//console.log(i+ "0000000> totalExecutionCosts Cost"+totalExecutionCosts);	
		
			
		var totalAutoModelCost= totalInvestment+totalExecutionCosts;// D20+d14
																	// //
		// var oldTotaltest= (prevTestCases*(1+(testCaseIncreasePercent/100)));
		//var fullManualModelCost = (prevTestCases*(1+(testCaseIncreasePercent/100)))*FullManualExeCostA23*firstCycle+costofwritingmanualtest;// d4*a23*d8*d17
		var fullManualModelCost =totaltestcasess*FullManualExeCostA23*firstCycle;// d4*a23*d8*d17
																																																						// //d4=c4*(1+a4)
																																																						// //d8=c8
																																																						// c8=q10+q13
																																																						// //d17==(D4-C4)*$A$17
		
		/*
		 * var testCyclesForQ = targetTestCycles*(autoTestCases/noOfTestCases);
		 */
		//console.log(i+"The fullmanualmodelcost is "+fullManualModelCost+" and "+"The totalAutoModelCost is "+totalAutoModelCost+ " and "+productivityForQ);
		
		var netSavingForQ = fullManualModelCost*1-totalAutoModelCost*1+productivityForQ*1;// its
		//console.log(i+"======The Netsavings is "+ netSavingForQ);
																				// fine
		cumulativeForQ = cumulativeForQ+ netSavingForQ;
		//console.log(i+"&&&&&&&&&&&&&&&&&&&&&The cumulativeForQ is "+ cumulativeForQ);
		roiResultList.push({
			"quarterNo":"Q"+i,
			"noOfTestCases":totaltestcasess,
			"netSavings":netSavingForQ,
			"cumulative":cumulativeForQ
		});
		
		//console.log(i+"======netCostPerAutoTest is "+parseInt((totalAutoModelCost/totaltestcasess)/firstCycle) )
		//console.log(i+"The netCostPerManualTest is "+parseInt((fullManualModelCost/totaltestcasess)/firstCycle) );
		
		netCostPerTestList.push({ 
			"quarterNo":"Q"+i,
			"netCostPerAutoTest":parseInt((totalAutoModelCost/totaltestcasess)/firstCycle),
			"netCostPerManualTest":parseInt((fullManualModelCost/totaltestcasess)/firstCycle)
		});
		
		prevTestCases=totaltestcasess;
		prevAutotestcase=totalperQ;
		
	
			if(isTargetReached==0){
		totalperQ=totalperquarter+totalperQ;
			}
		
		if(i==noOfQuarters){
		if(cumulativeForQ<0){
			if(noOfQuarters==maxNoOfQuarters){
				break;
			}
			noOfQuarters=noOfQuarters+1;
			
		}else{
			break;
		}
		}
	}
	}
	
	
	for(var roi=0; roi<roiResultList.length; roi++){
	
		localStorage.removeItem("q"+roi);
		localStorage.removeItem("netSavings"+roi);
		localStorage.removeItem("cumulative"+roi);
		
		localStorage.setItem("q"+roi,roiResultList[roi].quarterNo);
		localStorage.setItem("netSavings"+roi,roiResultList[roi].netSavings);
		localStorage.setItem("cumulative"+roi,roiResultList[roi].cumulative);
	}
	
	for(var net=0; net<netCostPerTestList.length;net++){	
		localStorage.removeItem("qNet"+net);
		localStorage.removeItem("autoTestNetCost"+net);
		localStorage.removeItem("manualTestNetCost"+net);
		
		
		localStorage.setItem("qNet"+net,netCostPerTestList[net].quarterNo);
		localStorage.setItem("autoTestNetCost"+net,netCostPerTestList[net].netCostPerAutoTest);
		localStorage.setItem("manualTestNetCost"+net,netCostPerTestList[net].netCostPerManualTest);
	}
	
	localStorage.setItem("roiresultSize",roiResultList.length);
	localStorage.setItem("netCostresultSize",netCostPerTestList.length);
	
}
	
	