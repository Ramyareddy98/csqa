var answerList = [];
var answerList1 = [];
var answerList2 = [];
var answerList3 = [];
var answerList4 = [];

function submitGapAnalysis1() {
	answerList1 = [];
	// gap analysis 1
	if (document.getElementById("automationScripts1-1").checked) {
		answerList1.push({
			"answer" : document.getElementById("automationScripts1-1").value
		});

	} else if (document.getElementById("automationScripts1-2").checked) {
		answerList1.push({
			"answer" : document.getElementById("automationScripts1-2").value
		});
	} else if (document.getElementById("automationScripts1-3").checked) {
		answerList1.push({
			"answer" : document.getElementById("automationScripts1-3").value
		});
	}
	// qstn 2
	if (document.getElementById("sourceControl1-1").checked) {
		answerList1.push({
			"answer" : document.getElementById("sourceControl1-1").value

		});
	} else if (document.getElementById("sourceControl1-2").checked) {
		answerList1.push({
			"answer" : document.getElementById("sourceControl1-2").value
		});
	}
	// qstn 3
	if (document.getElementById("singleDefinedProcess1-1").checked) {
		answerList1.push({
			"answer" : document.getElementById("singleDefinedProcess1-1").value
		});
	} else if (document.getElementById("singleDefinedProcess1-2").checked) {
		answerList1.push({
			"answer" : document.getElementById("singleDefinedProcess1-2").value
		});
	}
	// qstn 4
	if (document.getElementById("automatedSmokeTests1-1").checked) {
		answerList1.push({
			"answer" : document.getElementById("automatedSmokeTests1-1").value
		});
	} else if (document.getElementById("automatedSmokeTests1-2").checked) {
		answerList1.push({
			"answer" : document.getElementById("automatedSmokeTests1-1").value
		});
	}

	// qstn 5
	if (document.getElementById("commitTests1-1").checked) {
		answerList1.push({
			"answer" : document.getElementById("commitTests1-1").value
		});
	} else if (document.getElementById("commitTests1-2").checked) {
		answerList1.push({
			"answer" : document.getElementById("commitTests1-2").value
		})
	}
	// qstn 6
	if (document.getElementById("buildBroken1-1").checked) {
		answerList1.push({
			"answer" : document.getElementById("buildBroken1-1").value
		});
	} else if (document.getElementById("buildBroken1-2").checked) {
		answerList1.push({
			"answer" : document.getElementById("buildBroken1-2").value
		});
	} else if (document.getElementById("buildBroken1-3").checked) {
		answerList1.push({
			"answer" : document.getElementById("buildBroken1-3").value
		});
	}
	// qstn 7
	if (document.getElementById("trunkLine1-1").checked) {
		answerList1.push({
			"answer" : document.getElementById("trunkLine1-1").value
		});
	} else if (document.getElementById("trunkLine1-2").checked) {
		answerList1.push({
			"answer" : document.getElementById("trunkLine1-2").value
		});
	} else if (document.getElementById("trunkLine1-3").checked) {
		answerList1.push({
			"answer" : document.getElementById("trunkLine1-3").value
		});
	} else if (document.getElementById("trunkLine1-4").checked) {
		answerList1.push({
			"answer" : document.getElementById("trunkLine1-4").value
		});
	}
	// qstn 8
	if (document.getElementById("retrospective1-1").checked) {
		answerList1.push({
			"answer" : document.getElementById("retrospective1-1").value
		});
	} else if (document.getElementById("retrospective1-2").checked) {
		answerList1.push({
			"answer" : document.getElementById("retrospective1-2").value
		});
	}

	for (var a = 0; a < answerList1.length; a++) {
		localStorage.setItem("b" + a, answerList1[a].answer);
	}

}

function submitGapAnalysis2() {
	answerList2 = [];
	// gap analysis 2
	if (document.getElementById("deployment1-1").checked) {
		answerList2.push({
			"answer" : ocument.getElementById("deployment1-1").value
		});
	} else if (document.getElementById("deployment1-2").checked) {
		answerList2.push({
			"answer" : document.getElementById("deployment1-2").value
		});
	} else if (document.getElementById("deployment1-3").checked) {
		answerList2.push({
			"answer" : document.getElementById("deployment1-3").value
		});
	}
	// qstn 2
	if (document.getElementById("storedConfiguration1-1").checked) {
		answerList2.push({
			"answer" : document.getElementById("storedConfiguration1-1").value

		});
	} else if (document.getElementById("storedConfiguration1-2").checked) {
		answerList2.push({
			"answer" : document.getElementById("storedConfiguration1-2").value
		});
	} else if (document.getElementById("storedConfiguration1-3").checked) {
		answerList2.push({
			"answer" : document.getElementById("storedConfiguration1-3").value
		});
	}
	// qstn 3
	if (document.getElementById("versionControl1-1").checked) {
		answerList2.push({
			"answer" : document.getElementById("versionControl1-1").value
		});
	} else if (document.getElementById("versionControl1-2").checked) {
		answerList2.push({
			"answer" : document.getElementById("versionControl1-2").value
		});
	}
	// qstn 4
	if (document.getElementById("orchestrate1-1").checked) {
		answerList2.push({
			"answer" : document.getElementById("orchestrate1-1").value

		});
	} else if (document.getElementById("orchestrate1-2").checked) {
		answerList2.push({
			"answer" : document.getElementById("orchestrate1-2").value

		});
	}
	// qstn 5
	if (document.getElementById("virtualization1-1").checked) {
		answerList2.push({
			"answer" : document.getElementById("virtualization1-1").value

		});
	} else if (document.getElementById("virtualization1-2").checked) {
		answerList2.push({
			"answer" : document.getElementById("virtualization1-2").value
		});
	}
	// answerList.push(answerList2);
	for (var b = 0; b < answerList2.length; b++) {
		localStorage.setItem("e" + b, answerList2[b].answer);
	}

}

function submitGapAnalysis3() {
	answerList3 = [];
	// gap analysis 3
	if (document.getElementById("releases1-1").checked) {
		answerList3.push({
			"answer" : document.getElementById("releases1-1").value
		});
	} else if (document.getElementById("releases1-2").checked) {
		answerList3.push({
			"answer" : document.getElementById("releases1-2").value
		});
	}
	// qstn 2
	if (document.getElementById("traceability1-1").checked) {
		answerList3.push({
			"answer" : document.getElementById("traceability1-1").value
		});
	} else if (document.getElementById("traceability1-2").checked) {
		answerList3.push({
			"answer" : document.getElementById("traceability1-2").value
		});
	}
	// qstn 3
	if (document.getElementById("regulatory1-1").checked) {
		answerList3.push({
			"answer" : document.getElementById("regulatory1-1").value
		});
	} else if (document.getElementById("regulatory1-2").checked) {
		answerList3.push({
			"answer" : document.getElementById("regulatory1-2").value
		});
	}
	// qstn 4
	if (document.getElementById("releaseplan1-1").checked) {
		answerList3.push({

			"answer" : document.getElementById("releaseplan1-1").value

		});

	} else if (document.getElementById("releaseplan1-2").checked) {
		answerList3.push({
			"answer" : document.getElementById("releaseplan1-2").value

		});

	}
	// qstn 5
	if (document.getElementById("cycleTimes1-1").checked) {
		answerList3.push({
			"answer" : document.getElementById("cycleTimes1-1").value
		});
	} else if (document.getElementById("cycleTimes1-2").checked) {
		answerList3.push({
			"answer" : document.getElementById("cycleTimes1-2").value
		});
	}
	// answerList.push(answerList3);

	for (var c = 0; c < answerList3.length; c++) {

		localStorage.setItem("r" + c, answerList3[c].answer);

	}

}

function submitGapAnalysis4() {
	answerList4 = [];
	// gap analysis 4

	if (document.getElementById("testAutomation1-1").checked) {
		answerList4.push({
			"answer" : document.getElementById("testAutomation1-1").value
		});
	} else if (document.getElementById("testAutomation1-2").checked) {
		answerList4.push({
			"answer" : document.getElementById("testAutomation1-2").value
		});
	} else if (document.getElementById("testAutomation1-3").checked) {
		answerList4.push({
			"answer" : document.getElementById("testAutomation1-3").value
		});
	}
	// qstn 2
	if (document.getElementById("commitstage1-1").checked) {
		answerList4.push({
			"answer" : document.getElementById("commitstage1-1").value
		});
	} else if (document.getElementById("commitstage1-2").checked) {
		answerList4.push({
			"answer" : document.getElementById("commitstage1-2").value
		});
	}
	// qstn 3
	if (document.getElementById("DDapproach1-1").checked) {
		answerList4.push({
			"answer" : document.getElementById("DDapproach1-1").value
		});
	} else if (document.getElementById("DDapproach1-2").checked) {
		answerList4.push({
			"answer" : document.getElementById("DDapproach1-2").value
		});
	}
	// qstn 4
	if (document.getElementById("automatedAcceptance1-1").checked) {
		answerList4.push({
			"answer" : document.getElementById("automatedAcceptance1-1").value
		});
	} else if (document.getElementById("automatedAcceptance1-2").checked) {
		answerList4.push({
			"answer" : document.getElementById("automatedAcceptance1-2").value
		});
	}
	// qstn 5
	if (document.getElementById("nonfunctional1-1").checked) {
		answerList4.push({
			"answer" : document.getElementById("nonfunctional1-1").value
		});
	} else if (document.getElementById("nonfunctional1-2").checked) {
		answerList4.push({
			"answer" : document.getElementById("nonfunctional1-2").value
		});

	}
	// qstn 6
	if (document.getElementById("qualityGates1-1").checked) {
		answerList4.push({
			"answer" : document.getElementById("qualityGates1-1").value
		});

	} else if (document.getElementById("qualityGates1-2").checked) {
		answerList4.push({
			"answer" : document.getElementById("qualityGates1-2").value
		});

	}
	// answerList.push(answerList4);

	for (var d = 0; d < answerList4.length; d++) {
		localStorage.setItem("t" + d, answerList4[d].answer);

	}

	// submitAnswers();
}
