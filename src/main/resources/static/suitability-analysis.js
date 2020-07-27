



var resultSet = [];
function submitQuestionary(){		
	var initialAppList = [];
	var appList = [];
	for(var i=1;i<=6;i++){
		var inputId ="input"+i;
		var appName = document.forms["q1form"][inputId].value;
		//if(appName!= ''){			
			initialAppList.push({"appId":initialAppList.length+1, "appName":appName});
			for(var qn=1; qn<=16; qn++){
				document.getElementById("q"+qn+"app"+i).innerHTML = appName;
			}				
		//}	
		if(appName!= ''){	
			appList.push({"appId":i, "appName":appName});
			for(var qn=1; qn<=16; qn++){
				document.getElementById("q"+qn+"app"+i).innerHTML = appName;
			}
		}
	}	
	
	console.log("appList size :"+initialAppList.length);	
	console.log("appList size :"+appList.length);	
	
	if(appList.length == 0){
		for(var a=1; a <= 6;a++){		
			for(var qn=1; qn<=16; qn++){
				document.getElementById("q"+qn+"app"+a).innerHTML = "App Name "+a;
				document.getElementById("q"+qn+"app"+a+"_div").hidden =false;
			}
		}
	}
	else{
		for(var a=1; a <= 6;a++){		
			for(var qn=1; qn<=16; qn++){
				document.getElementById("q"+qn+"app"+a+"_div").hidden =true;
			}
			for(var f=0; f< initialAppList.length; f++){
				if(initialAppList[f].appName !=''){
					var appDivId =f+1;
					for(var qn=1; qn<=16; qn++){
						document.getElementById("q"+qn+"app"+appDivId+"_div").hidden =false;
					}
				}
			}		
		}	
	}
	
	
	resultSet = [];
	var answerList = [];
	
	for(var ap=0; ap<appList.length;ap++ ){
		//for question 1
		var totalCost = 0;
		var totalBenefit = 0;
		var index = appList[ap].appId;
		
		if(document.getElementById("radio"+index+"-"+1).checked){
			let ansValue=document.getElementById("radio"+index+"-"+1).value;
			totalBenefit = totalBenefit+ (15*ansValue);
	}
		else if(document.getElementById("radio"+index+"-"+2).checked){
	
			let ansValue=document.getElementById("radio"+index+"-"+2).value;
			totalBenefit = totalBenefit+ (15*ansValue);
			console.log("the value issdsdsdsdsdsdsdsdsdsdsdsdsds "+totalBenefit);
			console.log("the value is "+document.getElementById("radio"+index+"-"+2).value);
		}
		else if(document.getElementById("radio"+index+"-"+3).checked){
		
			let ansValue=document.getElementById("radio"+index+"-"+3).value;
			totalBenefit = totalBenefit+ (15*(ansValue));
			console.log("the value issdsdsdsdsdsdsdsdsdsdsdsdsds "+totalBenefit);
		}
		//for question 2
		if(document.getElementById("rollback"+index+"-"+1).checked){
	
			let ansValue=document.getElementById("rollback"+index+"-"+1).value;
			totalBenefit = totalBenefit+ (15*(ansValue));
			console.log("the value issdsdsdsdsdsdsdsdsdsdsdsdsds "+totalBenefit);
		}
		else if(document.getElementById("rollback"+index+"-"+2).checked){
	
			let ansValue=document.getElementById("rollback"+index+"-"+2).value;
			
			totalBenefit = totalBenefit+ (15*ansValue);
			console.log("the value issdsdsdsdsdsdsdsdsdsdsdsdsds "+totalBenefit);
		}
		else if(document.getElementById("rollback"+index+"-"+3).checked){
	
			let ansValue=document.getElementById("rollback"+index+"-"+3).value;
			
			totalBenefit = totalBenefit+ (15*ansValue);
			//console.log("98998989898"+document.getElementById("lifespan"+index+"-"+1).value)
		}
		//for question 3	
		if(document.getElementById("lifespan"+index+"-"+1).checked){
	
			let ansValue=document.getElementById("lifespan"+index+"-"+1).value;
			totalBenefit = totalBenefit+ (10*(ansValue));
		}
		else if(document.getElementById("lifespan"+index+"-"+2).checked){
	
			let ansValue=document.getElementById("lifespan"+index+"-"+2).value;
			totalBenefit = totalBenefit+ (10*ansValue);
		}
		else if(document.getElementById("lifespan"+index+"-"+3).checked){

			let ansValue=document.getElementById("lifespan"+index+"-"+3).value;
			
			totalBenefit = totalBenefit+ (10*ansValue);
			console.log("98998989898"+document.getElementById("lifespan"+index+"-"+3).value)
		}
		//for question 4
		if(document.getElementById("newversion"+index+"-"+1).checked){

			let ansValue=document.getElementById("newversion"+index+"-"+1).value;
			
			totalBenefit = totalBenefit+ (10*(ansValue));
			
		}
		else if(document.getElementById("newversion"+index+"-"+2).checked){

			let ansValue=document.getElementById("newversion"+index+"-"+2).value;
			
			totalBenefit = totalBenefit+ (10*ansValue);
		}
		else if(document.getElementById("newversion"+index+"-"+3).checked){

			let ansValue=document.getElementById("newversion"+index+"-"+3).value;
			
			totalBenefit = totalBenefit+ (10*ansValue);
		}
		//for question 5
		
		if(document.getElementById("testcycles"+index+"-"+1).checked){
	
			let ansValue=document.getElementById("testcycles"+index+"-"+1).value;
			
			totalBenefit = totalBenefit+ (10*(ansValue));
		}
		else if(document.getElementById("testcycles"+index+"-"+2).checked){

			let ansValue=document.getElementById("testcycles"+index+"-"+2).value;
			
			totalBenefit = totalBenefit+ (10*ansValue);
		}
		else if(document.getElementById("testcycles"+index+"-"+3).checked){

			let ansValue=document.getElementById("testcycles"+index+"-"+3).value;
			
			totalBenefit = totalBenefit+ (10*ansValue);
		}
			
		//for question 6
			
		if(document.getElementById("targetenvironments"+index+"-"+1).checked){

			let ansValue=document.getElementById("targetenvironments"+index+"-"+1).value;
			
			totalBenefit = totalBenefit+ (10*(ansValue));
		}
		else if(document.getElementById("targetenvironments"+index+"-"+2).checked){

			let ansValue=document.getElementById("targetenvironments"+index+"-"+2).value;
			
			totalBenefit = totalBenefit+ (10*ansValue);
		}
		else if(document.getElementById("targetenvironments"+index+"-"+3).checked){

			let ansValue=document.getElementById("targetenvironments"+index+"-"+3).value;
			
			totalBenefit = totalBenefit+ (10*ansValue);
		}
		
		//for question 7
		
		if(document.getElementById("sprintTeam"+index+"-"+1).checked){

			let ansValue=document.getElementById("sprintTeam"+index+"-"+1).value;
			
			totalBenefit = totalBenefit+ (10*(ansValue));
		}
		else if(document.getElementById("sprintTeam"+index+"-"+2).checked){

			let ansValue=document.getElementById("sprintTeam"+index+"-"+2).value;
			
			totalBenefit = totalBenefit+ (10*ansValue);
		}
		else if(document.getElementById("sprintTeam"+index+"-"+3).checked){

			let ansValue=document.getElementById("sprintTeam"+index+"-"+3).value;
			
			totalBenefit = totalBenefit+ (10*ansValue);
		}
		
		//for question 8
		
		if(document.getElementById("pipeline"+index+"-"+1).checked){

			let ansValue=document.getElementById("pipeline"+index+"-"+1).value;
			
			totalBenefit = totalBenefit+ (10*(ansValue));
		}
		else if(document.getElementById("pipeline"+index+"-"+2).checked){

			let ansValue=document.getElementById("pipeline"+index+"-"+2).value;
			
			totalBenefit = totalBenefit+ (10*ansValue);
		}
		else if(document.getElementById("pipeline"+index+"-"+3).checked){

			let ansValue=document.getElementById("pipeline"+index+"-"+3).value;
			
			totalBenefit = totalBenefit+ (10*ansValue);
		}
		
		//for question 9
		
		if(document.getElementById("clients"+index+"-"+1).checked && document.getElementById("clients"+index+"-"+2).checked && document.getElementById("clients"+index+"-"+3).checked){
			totalBenefit = totalBenefit+ (10*5);
			
		}
		else if(document.getElementById("clients"+index+"-"+1).checked && document.getElementById("clients"+index+"-"+2).checked){
			totalBenefit = totalBenefit+ (10*2);
			
		}
		else if(document.getElementById("clients"+index+"-"+1).checked && document.getElementById("clients"+index+"-"+3).checked){
			totalBenefit = totalBenefit+ (10*2);
		}
		else if(document.getElementById("clients"+index+"-"+2).checked && document.getElementById("clients"+index+"-"+3).checked){
			totalBenefit = totalBenefit+ (10*2);
		}
		else if(document.getElementById("clients"+index+"-"+1).checked){
			totalBenefit = totalBenefit+ (10*(-5));
		}
		else if(document.getElementById("clients"+index+"-"+2).checked){
			totalBenefit = totalBenefit+ (10*(-5));
		}
		else if(document.getElementById("clients"+index+"-"+3).checked){
			totalBenefit = totalBenefit+ (10*(-5));
		}
	
		
		//for question 10
		
		if(document.getElementById("legacysystems"+index+"-"+1).checked){
	
			let ansValue=document.getElementById("legacysystems"+index+"-"+1).value;
			
			totalCost = totalCost+ (10*(ansValue));
		}
		else if(document.getElementById("legacysystems"+index+"-"+2).checked){
		
			let ansValue=document.getElementById("legacysystems"+index+"-"+2).value;
			
			totalCost = totalCost+ (10*ansValue);
		}
		else if(document.getElementById("legacysystems"+index+"-"+3).checked){

			let ansValue=document.getElementById("legacysystems"+index+"-"+3).value;
			
			totalCost = totalCost+ (10*ansValue);
		}
		
		//for question 11
		
		if(document.getElementById("specifications"+index+"-"+1).checked){
	
			let ansValue=document.getElementById("specifications"+index+"-"+1).value;
			
			totalCost = totalCost+ (20*(ansValue));
		}
		else if(document.getElementById("specifications"+index+"-"+2).checked){
	
			let ansValue=document.getElementById("specifications"+index+"-"+2).value;
			
			totalCost = totalCost+ (20*ansValue);
		}
		else if(document.getElementById("specifications"+index+"-"+3).checked){
	
			let ansValue=document.getElementById("specifications"+index+"-"+3).value;
			
			totalCost = totalCost+ (20*ansValue);
		}
		
		//for question 12
		
		if(document.getElementById("functionalTest"+index+"-"+1).checked){
	
			let ansValue=document.getElementById("functionalTest"+index+"-"+1).value;
			
			totalCost = totalCost+ (10*(ansValue));
		}
		else if(document.getElementById("functionalTest"+index+"-"+2).checked){
	
			let ansValue=document.getElementById("functionalTest"+index+"-"+2).value;
			
			totalCost = totalCost+ (10*ansValue);
		}
		else if(document.getElementById("functionalTest"+index+"-"+3).checked){

			let ansValue=document.getElementById("functionalTest"+index+"-"+3).value;
			
			totalCost = totalCost+ (10*ansValue);
		}
		
		//for question 13
		
		if(document.getElementById("nonFunctionalTest"+index+"-"+1).checked){

			let ansValue=document.getElementById("nonFunctionalTest"+index+"-"+1).value;
			
			totalCost = totalCost+ (10*(ansValue));
		}
		else if(document.getElementById("nonFunctionalTest"+index+"-"+2).checked){
	
			let ansValue=document.getElementById("nonFunctionalTest"+index+"-"+2).value;
			
			totalCost = totalCost+ (10*ansValue);
		}
		else if(document.getElementById("nonFunctionalTest"+index+"-"+3).checked){
	
			let ansValue=document.getElementById("nonFunctionalTest"+index+"-"+3).value;
			
			totalCost = totalCost+ (10*ansValue);
		}
		
		//for question 14
		
		if(document.getElementById("dataCreation"+index+"-"+1).checked){
	
			let ansValue=document.getElementById("dataCreation"+index+"-"+1).value;
			
			totalCost = totalCost+ (10*(ansValue));
		}
		else if(document.getElementById("dataCreation"+index+"-"+2).checked){
	
			let ansValue=document.getElementById("dataCreation"+index+"-"+2).value;
			
			totalCost = totalCost+ (10*ansValue);
		}
		else if(document.getElementById("dataCreation"+index+"-"+3).checked){

			let ansValue=document.getElementById("dataCreation"+index+"-"+3).value;
			
			totalCost = totalCost+ (10*ansValue);
		}
		
		
		//for question 15
		
		if(document.getElementById("automationTools"+index+"-"+1).checked){

			let ansValue=document.getElementById("automationTools"+index+"-"+1).value;
			
			totalCost = totalCost+ (20*(ansValue));
		}
		else if(document.getElementById("automationTools"+index+"-"+2).checked){
	
			let ansValue=document.getElementById("automationTools"+index+"-"+2).value;
			
			totalCost = totalCost+ (20*ansValue);
		}
		else if(document.getElementById("automationTools"+index+"-"+3).checked){
	
			let ansValue=document.getElementById("automationTools"+index+"-"+3).value;
			
			totalCost = totalCost+ (20*ansValue);
		}
		
		//for question 16
		
		if(document.getElementById("testActivities"+index+"-"+1).checked){
	
			let ansValue=document.getElementById("testActivities"+index+"-"+1).value;
			
			totalCost = totalCost+ (20*(ansValue));
		}
		else if(document.getElementById("testActivities"+index+"-"+2).checked){
	
			let ansValue=document.getElementById("testActivities"+index+"-"+2).value;
			
			totalCost = totalCost+ (20*ansValue);
		}
		else if(document.getElementById("testActivities"+index+"-"+3).checked){

			let ansValue=document.getElementById("testActivities"+index+"-"+3).value;
			
			totalCost = totalCost+ (20*ansValue);
		}
		console.log("result set size :"+resultSet.length);
		resultSet.push({ 
			"appId":appList[ap].appId,
			"appName":appList[ap].appName,
			"benefit":totalBenefit/100,
			"cost":totalCost/100
			});			
	}

		
	for(var res=0; res<resultSet.length; res++){
		console.log("app Name :"+resultSet[res].appName);
		console.log("app benefit :"+resultSet[res].benefit);
		console.log("app cost :"+resultSet[res].cost);	
		
		localStorage.setItem("app"+res+"Name",resultSet[res].appName);
		localStorage.setItem("app"+res+"Benefit",resultSet[res].benefit);
		localStorage.setItem("app"+res+"Cost",resultSet[res].cost);
	}	
	localStorage.removeItem("result",resultSet);
	localStorage.setItem("result",resultSet);
	localStorage.setItem("resultSize",resultSet.length);
	//console.log("result set size from localstorage:"+localStorage.getItem("result").length);
		
} 




