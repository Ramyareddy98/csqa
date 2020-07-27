function firstmethod() {
	var userId = localStorage.getItem("userEmail");
	var loginbtn = document.getElementById("loginbtn");
	var logoutbtn = document.getElementById("logoutbtn");
	//console.log("user" + JSON.stringify(userId));
	//console.log("user is is " + userId);
	if (null === userId) {
		//console.log("in if" + document.getElementById("loginbtn"));
		// document.getElementById("loginbtn").disabled = false;
		loginbtn.style.display = "block"
		logoutbtn.style.display = "none"
		var qs = getQueryStrings();
		var myParam = qs["qa"];

		//console.log("22222w23232323" + myParam);
		var email = localStorage.getItem("userEmail")
		if (myParam == 'true' && email == null) {

			document.getElementById("loginbtn").click();

			//console.log("22323232");
		}
	} else {
		//console.log("in else");

		loginbtn.style.display = "none"
		logoutbtn.style.display = "block"

	}

	onLoadGoogle();
}
function devcenterRedirect() {
	var userEmail = localStorage.getItem("userEmail");

	if (userEmail != null) {
		//console.log("user exist")
		var form = document.createElement('form');
		form.enctype = "text/plain";
		document.body.appendChild(form);
		form.method = 'post';
		form.action = "https://" + location.hostname+"/devcenterpage";
		// for (var name in data) {
		var input = document.createElement('input');
		input.type = 'hidden';
		input.name = "email";
		input.value = userEmail;
		//console.log("the email is *******************************************"
				
		form.appendChild(input);
		// }
		form.submit();
		/*
		 * window.location = "https://localhost:9999/devcenter?email=" +
		 * userEmail;
		 */
	} else {
		firstmethod();
	}
}
var isGoogle = false;

function googleSignIn() {
	//console.log("in googlesignIn");
	this.isGoogle = true;
}
function clearMessages() {
	document.getElementById("usernamedivid").innerHTML = "";
	document.getElementById("passworddivid").innerHTML = "";
	document.getElementById("invalidcredId").innerHTML = "";
	var name = document.getElementById("username").value = "";
	var password = document.getElementById("password").value = "";
}
function onLogin() {
	var isValid = false;
	var name = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	//console.log("name name " + name + password)
	if (!name.replace(/\s/g, '').length) {
		document.getElementById("usernamedivid").innerHTML = "*Enter Username";
		isValid = true;
		// return;
	} else {
		document.getElementById("usernamedivid").innerHTML = "";
	}
	if (!password.replace(/\s/g, '').length) {
		document.getElementById("passworddivid").innerHTML = "*Enter Password";
		isValid = true;
		// return;
	} else {
		document.getElementById("passworddivid").innerHTML = "";
	}
	if (isValid) {
		return;
	}
	var xhr = new XMLHttpRequest();
	var url = "https://" + location.hostname +"/userLogin?userName=" + name + "&password=" + password;
	//console.log("url is " + url)
	xhr.open("GET", url, false);
	xhr.send();
	if (xhr.status == 200) {
		//console.log("login success +++++++++++" + xhr.responseText.email);
		var user = JSON.parse(xhr.responseText);
		//console.log("login success +++++++++++"
				//+ JSON.stringify(xhr.responseText));
		//console.log("login success +++++++++++"
				//+ JSON.parse(xhr.responseText).email);
		localStorage.setItem("userEmail", name);
		localStorage.setItem("userFirstName", user.firstName);
		//console.log("login success 6666666+"
				//+ localStorage.getItem("userEmail"));
		document.getElementById("invalidcredId").innerHTML = "";
		devcenter();
		// self.close();
		// opener.location.reload(true);

		// window.location =
		
	} else {
		document.getElementById("invalidcredId").innerHTML = "Invalid Credentials";
	}
	//console.log(xhr.status);
	//console.log(xhr.statusText);
	//console.log("login +++++++++++");

}
function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
function clearSignUpdata() {

	document.getElementById("divfnameId").innerHTML = "";

	document.getElementById("divlnameId").innerHTML = "";

	document.getElementById("divemailId").innerHTML = "";

	document.getElementById("divmobileId").innerHTML = "";

	document.getElementById("divcompanyId").innerHTML = "";

	document.getElementById("divpassId").innerHTML = "";
	document.getElementById("signupinvalidcredId").innerHTML = "";

	document.getElementById("divcpassId").innerHTML = "";
	document.getElementById("fname").value = "";
	document.getElementById("lname").value = "";
	document.getElementById("email").value = "";
	document.getElementById("cpassword").value = "";
	document.getElementById("confirmpassword").value = "";
	document.getElementById("companyname").value = "";
	document.getElementById("mobile").value = "";
}
function createUser() {
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("cpassword").value;
	var confirmPassword = document.getElementById("confirmpassword").value;
	var company = document.getElementById("companyname").value;
	var mobile = document.getElementById("mobile").value;
	// var companyname = document.getElementById("companyname").value;
	// //console.log("fname"+fname+lname+email+mobile+companyname);
	var isValid = false;
	if (!fname.replace(/\s/g, '').length) {
		document.getElementById("divfnameId").innerHTML = "*Enter First name";
		isValid = true;
	} else {
		document.getElementById("divfnameId").innerHTML = "";
	}
	if (!lname.replace(/\s/g, '').length) {
		document.getElementById("divlnameId").innerHTML = "*Enter Last name";
		isValid = true;
	} else {
		document.getElementById("divlnameId").innerHTML = "";
	}
	if (!email.replace(/\s/g, '').length) {

		document.getElementById("divemailId").innerHTML = "*Enter  Email";
		isValid = true;
	} else {
		if (validateEmail(email) == false) {
			document.getElementById("divemailId").innerHTML = "*Enter Valid Email";
			isValid = true;
		} else {
			document.getElementById("divemailId").innerHTML = "";

		}
	}
	if (!mobile.replace(/\s/g, '').length) {
		document.getElementById("divmobileId").innerHTML = "*Enter Mobile";
		isValid = true;
	} else if (/^\d{10}$/.test(mobile) == false) {
		document.getElementById("divmobileId").innerHTML = "*Enter Valid Mobile";
		isValid = true;
	} else {
		document.getElementById("divmobileId").innerHTML = "";
	}
	if (!company.replace(/\s/g, '').length) {
		document.getElementById("divcompanyId").innerHTML = "*Enter Company";
		isValid = true;
	} else {
		document.getElementById("divcompanyId").innerHTML = "";
	}
	if (!password.replace(/\s/g, '').length) {
		document.getElementById("divpassId").innerHTML = "*Enter Password";
		isValid = true;
	} else {
		document.getElementById("divpassId").innerHTML = "";
	}
	if (!confirmPassword.replace(/\s/g, '').length) {
		document.getElementById("divcpassId").innerHTML = "*Enter Confirm Password";
		isValid = true;
	} else {
		if (password != confirmPassword) {
			document.getElementById("divcpassId").innerHTML = "*Password Doesn't Match";
			isValid = true;
		} else {
			document.getElementById("divcpassId").innerHTML = "";
		}

	}
	if (isValid) {
		return;
	}

	var xhr = new XMLHttpRequest();
	var url = "https://" + location.hostname + "/signUpUser";
	var user = {
		"email" : email,
		"mobile" : mobile,
		"firstName" : fname,
		"lastName" : lname,
		"company" : company,
		"password" : password
	}
	xhr.open('POST', url, false);
	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhr.send(JSON.stringify(user));
	if (xhr.status == 201) {
		//console.log("login ***********************99999***********"
			//	+ xhr.responseText);
		localStorage.setItem("userEmail", email);
		devcenter();
		// document.getElementById("userImage").src = profile.getImageUrl();
	}
	if (xhr.status == 409) {
		document.getElementById("signupinvalidcredId").innerHTML = "User "
				+ email + " Already Exist";

	}
}

function onSignIn(googleUser) {
	// this.isGoogle = true;
	if (this.isGoogle) {
		var profile = googleUser.getBasicProfile();
		//console.log('ID: ' + profile.getId()); // Do not send to your backend!
		// Use an ID token instead.
		//console.log('Name: ' + profile.getName());
		localStorage.setItem("userImage", profile.getImageUrl());
		localStorage.setItem("userFirstName", profile.getName());
		//console.log('Image URL: ' + profile.getImageUrl());
		//console.log('Email: ' + profile.getEmail());
		localStorage.setItem("userEmail", profile.getEmail());// This is null
		var data = {
			'email' : profile.getEmail(),
			'firstName' : profile.getName()
		};

		var xhr = new XMLHttpRequest();
		var url = "https://" + location.hostname + "/user";
		var user = {
			"email" : profile.getEmail(),
			"firstName" : profile.getName(),
			"imgSrc" : profile.getImageUrl()
		}
		xhr.open('POST', url, false);
		xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhr.send(JSON.stringify(user));
		if (xhr.status == 201) {
			//console.log("login ***********************99999***********"
				//	+ xhr.responseText);
			devcenter();
			document.getElementById("userImage").src = profile.getImageUrl();
		}
		if (xhr.status == 409) {
			//console.log("login ***********************22***********"
				//	+ xhr.responseText);
			devcenter();
		}
		//console.log("login **********************************" + xhr.status);
	}
}

function onloadata() {
	//console.log("username" + localStorage.getItem("userFirstName"))
	var userFirtName = localStorage.getItem("userFirstName")
	document.getElementById("avatarnameid").innerHTML = userFirtName;
	//console.log("login *******************dve***************"
			//+ localStorage.getItem("userEmail"));
	var xhr = new XMLHttpRequest();
	var url = "https://" + location.hostname+ "/userRecommended?email=pandari@mytrits.com";
	xhr.open('GET', url, false);
	xhr.send();

	//console.log("login ***********************99999***********"
			//+ xhr.responseText);
}
function face() {
	var userId = localStorage.getItem("userEmail");
	var loginbtn = document.getElementById("loginbtn");
	var logoutbtn = document.getElementById("logoutbtn");
	//console.log("user" + JSON.stringify(userId));

	if (userId === null) {
		//console.log("in if" + document.getElementById("loginbtn"));
		document.getElementById("loginbtn").disabled = false;
		// loginbtn.style.display="block"
		// logoutbtn.style.display="none"

	} else {
		//console.log("in else")

		loginbtn.style.display = "none"
		logoutbtn.style.display = "block"

	}
}

function logout() {
	localStorage.removeItem("userEmail");
	googleLogout();
	//console.log("user" + JSON.stringify(localStorage.getItem("userEmail")));
	FB.init({
		appId : '328231821012468',
		cookie : true,
		xfbml : true,
		version : 'v2.11'
	});
	FB.getLoginStatus(function(response) {
		//console.log("facebook logout" + JSON.stringify(response))
		if (response && response.status === 'connected') {
			FB.logout(function(response) {
				//console.log("facebook logout done")
			});
		}
	});

	var loginbtn = document.getElementById("loginbtn");
	var logoutbtn = document.getElementById("logoutbtn");
	logoutbtn.style.display = "none";
	loginbtn.style.display = "block";
	//console.log("in logout success");

}
window.fbAsyncInit = function() {
	FB.init({
		appId : '328231821012468',
		cookie : true,
		xfbml : true,
		version : 'v2.11'
	});
}

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {
		return;
	}
	js = d.createElement(s);
	js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function login() {
	FB.login(function(response) {
		if (response.status === 'connected') {
			FB.api('/me?fields=id,email,name,picture', function(data) {
				//console.log(data.email)
				//console.log(data.name)
				//console.log("the picture" + JSON.stringify(data.picture))// it
				// will
				// not
				// be
				// null
				// ;)

				var xhr = new XMLHttpRequest();
				var imageUrl = data.picture.data.url;
				var url = "https://" + location.hostname + "/user";
				//console.log("the url image is " + imageUrl);
				var user = {
					"email" : data.email,
					"firstName" : data.name,
					"imgSrc" : imageUrl
				}
				xhr.open('POST', url, false);
				xhr.setRequestHeader("Content-Type",
						"application/json;charset=UTF-8");
				xhr.send(JSON.stringify(user));

				if (xhr.status == 201) {
					//console.log("login ***********************99999***********"
						//	+ xhr.responseText);
					localStorage.setItem("userEmail", user.email);
					devcenter();
				}
				if (xhr.status == 409) {
					//console.log("login ***********************22***********"
							//+ xhr.responseText);
					localStorage.setItem("userEmail", user.email);
					devcenter();
				}

			})
			//console.log("kdheuhfo" + JSON.stringify(response));
		}
	}, {
		scope : 'email'
	});
}

function statusChangeCallback(response) {
	if (response.status === 'connected') {
		//console.log("connected")
	} else {
		//console.log("not connected")
	}
}

var ans = false;
var count = 0;
function answers1() {
	localStorage.removeItem('uiMobile');
	localStorage.removeItem('unittest');
	localStorage.removeItem('api');
	localStorage.removeItem('performance');
	localStorage.removeItem('staticAnalysis');
	localStorage.removeItem('uiDesktop');
	localStorage.removeItem('uiWeb');
	localStorage.setItem("option", "")
	var genericans3 = new Array();
	var genericans1 = "";
	$('input[name="generic_context"]:checked').each(function() {
		genericans1 = this.value;
	});
	localStorage.setItem("genericans1", genericans1)
	var genericans2 = "";
	$('input[name="generic_autowner"]:checked').each(function() {
		genericans2 = this.value;
	});

	localStorage.setItem("genericans2", genericans2)
	$('input[name="generic_auttype"]:checked').each(function() {

		genericans3.push(this.value);

	});

	//console.log("scu" + JSON.stringify(genericans1))
	//console.log("scu" + JSON.stringify(genericans2))
	//console.log("mxh" + JSON.stringify(genericans3))

	count++;
	//console.log("count" + count)

	let unique_array = []
	for (let i = 0; i < genericans3.length; i++) {
		if (unique_array.indexOf(genericans3[i]) == -1) {
			unique_array.push(genericans3[i])
		}
	}
	localStorage.setItem("genericans3", JSON.stringify(unique_array))
	//console.log("hbjhj" + unique_array.length)
	for (var j; j < unique_array.length; j++) {
		//console.log("dh" + unique_array[j])
	}
}
function answers2() {
	//console.log("ngsdhg");
	var storedNames = JSON.parse(localStorage.getItem("genericans3"));
	for (var g = 0; g < storedNames.length; g++) {
		//console.log("dhnj" + JSON.stringify(storedNames[g]));
	}

	var techanswers1 = new Array();
	$('input[name="technical_browsers"]:checked').each(function() {

		techanswers1.push(this.value);

	});
	let techans1 = []
	for (let i = 0; i < techanswers1.length; i++) {
		if (techans1.indexOf(techanswers1[i]) == -1) {
			techans1.push(techanswers1[i])
		}
	}
	localStorage.setItem("finaltechans1", JSON.stringify(techans1))
	var techanswers2 = new Array();
	$('input[name="technical_desktop_apps"]:checked').each(function() {

		techanswers2.push(this.value);

	});
	let techans2 = []
	for (let i = 0; i < techanswers2.length; i++) {
		if (techans2.indexOf(techanswers2[i]) == -1) {
			techans2.push(techanswers2[i])
		}
	}
	localStorage.setItem("finaltechans2", JSON.stringify(techans2))

	var techanswers2 = JSON.parse(localStorage.getItem("finaltechans2"));

	for (var i = 0; i < techanswers2.length; i++) {
		//console.log("dyh" + JSON.stringify(techanswers2[i]));
	}

	var techanswers24 = JSON.parse(localStorage.getItem("finaltechans1"));

	for (var i = 0; i < techanswers24.length; i++) {
		//console.log("dycfdh" + JSON.stringify(techanswers24[i]));
	}
	let techans3 = "";

	$('input[name="technical_cloudSupport"]:checked').each(function() {
		techans3 = this.value;
	});
	localStorage.setItem("finaltechans3", JSON.stringify(techans3))
	var techanswers241 = localStorage.getItem("finaltechans3")
	//console.log("jdhu" + JSON.stringify(techanswers241))
	var techanswers4 = new Array();
	$('input[name="technical_mobile_apps"]:checked').each(function() {

		techanswers4.push(this.value);

	});
	let techans4 = []
	for (let i = 0; i < techanswers4.length; i++) {
		if (techans4.indexOf(techanswers4[i]) == -1) {
			techans4.push(techanswers4[i])
		}
	}
	localStorage.setItem("finaltechans4", JSON.stringify(techans4))
	var techanswers24 = JSON.parse(localStorage.getItem("finaltechans4"));

	for (var i = 0; i < techanswers24.length; i++) {
		//console.log("tech3" + JSON.stringify(techanswers24[i]));
	}
	var techanswers5 = new Array();
	$('input[name="technical_mobileOSVersion"]:checked').each(function() {

		techanswers5.push(this.value);

	});
	let techans5 = []
	for (let i = 0; i < techanswers5.length; i++) {
		if (techans5.indexOf(techanswers5[i]) == -1) {
			techans5.push(techanswers5[i])
		}
	}
	localStorage.setItem("finaltechans5", JSON.stringify(techans5))
	var techanswers24 = JSON.parse(localStorage.getItem("finaltechans5"));

	for (var i = 0; i < techanswers24.length; i++) {
		//console.log("tech5" + JSON.stringify(techanswers24[i]));
	}
	var techanswers6 = new Array();
	$('input[name="technical_targetOS"]:checked').each(function() {

		techanswers6.push(this.value);

	});
	let techans6 = []
	for (let i = 0; i < techanswers6.length; i++) {
		if (techans6.indexOf(techanswers6[i]) == -1) {
			techans6.push(techanswers6[i])
		}
	}
	localStorage.setItem("finaltechans6", JSON.stringify(techans6))
	var techanswers24 = JSON.parse(localStorage.getItem("finaltechans6"));

	for (var i = 0; i < techanswers24.length; i++) {
		//console.log("tech6" + JSON.stringify(techanswers24[i]));
	}

	var techanswers9 = new Array();
	$('input[name="technical_perf_types"]:checked').each(function() {

		techanswers9.push(this.value);

	});
	let techans9 = []
	for (let i = 0; i < techanswers9.length; i++) {
		if (techans9.indexOf(techanswers9[i]) == -1) {
			techans9.push(techanswers9[i])
		}
	}
	localStorage.setItem("finaltechans9", JSON.stringify(techans9))
	var techanswers24 = JSON.parse(localStorage.getItem("finaltechans9"));

	for (var i = 0; i < techanswers24.length; i++) {
		//console.log("tech65" + JSON.stringify(techanswers24[i]));
	}

	let techans11 = "";

	$('input[name="technical_CI_tool"]:checked').each(function() {
		techans11 = this.value;
	});
	localStorage.setItem("finaltechans11", techans11)
	var techanswers241 = localStorage.getItem("finaltechans11")
	//console.log("tech11" + JSON.stringify(techanswers241))
	let techans10 = "";

	$('input[name="technical_CI_integration"]:checked').each(function() {
		techans10 = this.value;
	});
	localStorage.setItem("finaltechans10", techans10)
	var techanswers241 = localStorage.getItem("finaltechans10")
	//console.log("tech11" + JSON.stringify(techanswers241))

	var languages = document.getElementById('programmingLanguages');
	var values = [];
	if (null != languages) {
		for (var i = 0; i < languages.options.length; i++) {
			if (languages.options[i].selected) {
				values.push(languages.options[i].value);
			}
		}

		for (var i = 0; i < values.length; i++) {
			//console.log("ds" + JSON.stringify(values[i]))
		}
	}
	localStorage.setItem("finaltech7a", JSON.stringify(values));

	var frontenftechs = document.getElementById('frontEndTechs');
	var techvalues = [];
	if (null != frontenftechs) {
		for (var i = 0; i < frontenftechs.options.length; i++) {
			if (frontenftechs.options[i].selected) {
				techvalues.push(frontenftechs.options[i].value);
			}
		}
		for (var i = 0; i < techvalues.length; i++) {
			//console.log("ds" + JSON.stringify(values[i]))
		}
	}
	localStorage.setItem("finaltech7b", JSON.stringify(techvalues));
	var backendtechs = document.getElementById('serverEndTechs');
	var backtechvalues = [];
	if (null != backendtechs) {
		for (var i = 0; i < backendtechs.options.length; i++) {
			if (backendtechs.options[i].selected) {
				backtechvalues.push(backendtechs.options[i].value);
			}
		}
		for (var i = 0; i < backtechvalues.length; i++) {
			//console.log("ds" + JSON.stringify(values[i]))
		}
	}
	localStorage.setItem("finaltech7c", JSON.stringify(backtechvalues));
	var api = document.getElementById('api');
	var apivalues = [];
	if (null != api) {
		for (var i = 0; i < api.options.length; i++) {
			if (api.options[i].selected) {
				apivalues.push(api.options[i].value);
			}
		}
		for (var i = 0; i < apivalues.length; i++) {
			//console.log("ds" + JSON.stringify(apivalues[i]))
		}
	}
	localStorage.setItem("finaltech7d", JSON.stringify(apivalues));
	var perfApps = document.getElementById('perfApp');
	var prefappsvalues = [];
	if (null != perfApps) {
		for (var i = 0; i < perfApps.options.length; i++) {
			if (perfApps.options[i].selected) {
				prefappsvalues.push(perfApps.options[i].value);
			}
		}
		for (var i = 0; i < prefappsvalues.length; i++) {
			//console.log("ds" + JSON.stringify(prefappsvalues[i]))
		}
	}
	localStorage.setItem("finaltech8", JSON.stringify(prefappsvalues));

}
function backinthree() {
	//console.log("sdfghjk")

	var technicalans10 = localStorage.getItem("option");
	/*
	 * document.getElementById("ques21").style.display="";
	 * document.getElementById("ques22").style.display="";
	 * document.getElementById("ques23").style.display="";
	 * document.getElementById("ques24").style.display="";
	 * document.getElementById("ques25").style.display="";
	 * document.getElementById("ques26").style.display="";
	 * document.getElementById("ques27").style.display="";
	 * document.getElementById("ques28").style.display="";
	 * document.getElementById("ques29").style.display="";
	 * document.getElementById("ques210").style.display="";
	 * document.getElementById("ques211").style.display="";
	 */
	if (technicalans10 === "no") {

		// $("#ques210").removeClass("item active f-e");

		// $("#ques210").addClass("item");
		// $("#ques11").removeClass("item");
		// $("#ques12").removeClass("item");
		var uimobile = localStorage.getItem("uiMobile")
		var api = localStorage.getItem("api")
		var unit = localStorage.getItem("unittest")
		var perf = localStorage.getItem("performance")
		var value1 = localStorage.getItem("uiDesktop")
		var stasticanys = localStorage.getItem("staticAnalysis")
		var uiWeb = localStorage.getItem("uiWeb")

		if (uiWeb === null) {

		} else {
			// $("#ques21").removeClass("item active f-e");
			// $("#ques21").addClass("item");
			document.getElementById("ques21").style.display = "";
		}

		if (perf === null) {

		} else {
			document.getElementById("ques28").style.display = "";
			document.getElementById("ques29").style.display = "";
		}
		if (value1 === null && uiWeb === null && api === null
				&& stasticanys === null && unit === null) {

		} else {
			document.getElementById("ques27").style.display = "";
		}
		document.getElementById("ques26").style.display = "";
		if (uimobile === null) {

		} else {
			document.getElementById("ques24").style.display = "";
			document.getElementById("ques25").style.display = "";
		}
		if (value1 === null) {

		} else {
			document.getElementById("ques22").style.display = "";
			document.getElementById("ques23").style.display = "";
		}

		// document.getElementById("ques210").style.display="";
		// $("#ques210").addClass("item active f-e");
	} else {

		var mobile = localStorage.getItem("inmobknull")
		var desk = localStorage.getItem("indesknull")
		var uimobile = localStorage.getItem("uiMobile")
		var api = localStorage.getItem("api")
		var unit = localStorage.getItem("unittest")
		var perf = localStorage.getItem("performance")
		var value1 = localStorage.getItem("uiDesktop")
		var stasticanys = localStorage.getItem("staticAnalysis")
		var uiWeb = localStorage.getItem("uiWeb")
		var webdep = localStorage.getItem("inwebnull")

		if (uiWeb === null) {

		} else {
			// $("#ques21").removeClass("item active f-e");
			// $("#ques21").addClass("item");
			document.getElementById("ques21").style.display = "";
		}

		if (perf === null) {

		} else {
			document.getElementById("ques28").style.display = "";
			document.getElementById("ques29").style.display = "";
		}
		if (value1 === null && uiWeb === null && api === null
				&& stasticanys === null && unit === null) {

		} else {
			document.getElementById("ques27").style.display = "";
		}
		document.getElementById("ques26").style.display = "";

		if (value1 === null) {

		} else {
			document.getElementById("ques22").style.display = "";
			document.getElementById("ques23").style.display = "";
		}
		if (uimobile === null) {

		} else {
			document.getElementById("ques24").style.display = "";
			document.getElementById("ques25").style.display = "";
		}

		document.getElementById("ques210").style.display = "";

		// document.getElementById("ques211").style.display="";
		// $("#ques211").addClass("item active f-e");

	}

}

function back() {

	localStorage.setItem("backbuon", "back");
	back.num++;
	//console.log("vgg" + JSON.stringify(back.num))
	document.getElementById("ques12").style.display = "";
	document.getElementById("ques11").style.display = "";

	if (back.num === 1) {
		//console.log("dfghjk")
		localStorage.setItem("staticval1", 1);
	}
	if (back.num === 2) {
		//console.log("dfghjk")
		localStorage.setItem("staticval2", 2);
	}
}

function redirectToDevcenter() {
	var userEmail = localStorage.getItem("userEmail");
	// var userEmail = "pandari@mytrits.com";
	if (userEmail != null) {
		//console.log("user exist")
		var form = document.createElement('form');
		form.enctype = "text/plain";
		document.body.appendChild(form);
		form.method = 'post';
		form.action = "https://" + location.hostname + "/devcenterpage";
		// for (var name in data) {
		var input = document.createElement('input');
		input.type = 'hidden';
		input.name = "email";
		input.value = userEmail;
		//console.log("the email is *******************************************"
				//+ userEmail)
		form.appendChild(input);
		// }
		form.submit();
		/*
		 * window.location = "https://localhost:9999/devcenter?email=" +
		 * userEmail;
		 */
	} else {
		window.location = "https://" + location.hostname + "/devcenterpage";
	}
}

function budgetq1option2() {
	let ans2 = "";

	$('input[name="budget_cots_open"]:checked').each(function() {
		ans2 = this.value;

	});

	localStorage.setItem("finalbudgetans2", ans2)
	localStorage.setItem("budgetq1dependency", "ok")

}
function budgetq1option3() {
	var ans1 = "";
	$('input[name="budget_range"]:checked').each(function() {

		ans1 = this.value;

	});

	localStorage.setItem("finalbudgetans1", ans1)
	localStorage.setItem("budgetq1dependency", "ok")

}

function answers3() {
	var ans1 = "";
	$('input[name="budget_range"]:checked').each(function() {

		ans1 = this.value;

	});

	localStorage.setItem("finalbudgetans1", ans1)
	var techanswers24 = localStorage.getItem("finalbudgetans1");

	//console.log("tech6" + JSON.stringify(techanswers24));

	let ans2 = "";

	$('input[name="budget_cots_open"]:checked').each(function() {
		ans2 = this.value;
	});
	localStorage.setItem("finalbudgetans2", ans2)

	var techanswers241 = localStorage.getItem("finalbudgetans2")
	//console.log("jdbfghrhehu" + JSON.stringify(techanswers241))
	var genericAnswer1 = localStorage.getItem("genericans1")
	var genericAnswer2 = localStorage.getItem("genericans2")
	var genericAnswer3 = JSON.parse(localStorage.getItem("genericans3"));
	var generic = JSON.stringify({
		"generic_context" : genericAnswer1,
		"generic_autowner" : genericAnswer2,
		"generic_auttype" : genericAnswer3
	})
	//console.log("khfi" + JSON.stringify(generic));

	var genericarray = JSON.parse("[" + generic + "]");

	//console.log("khfcdsdfi" + JSON.stringify(genericarray));
	var technicalnas1 = JSON.parse(localStorage.getItem("finaltechans1"));
	var technicalnas2 = JSON.parse(localStorage.getItem("finaltechans2"));
	var technicalnas3 = JSON.parse(localStorage.getItem("finaltechans3"));
	var technicalnas4 = JSON.parse(localStorage.getItem("finaltechans4"));
	var technicalnas5 = JSON.parse(localStorage.getItem("finaltechans5"));
	var technicalnas6 = JSON.parse(localStorage.getItem("finaltechans6"));
	var technicalnas7a = JSON.parse(localStorage.getItem("finaltech7a"));
	var technicalnas7b = JSON.parse(localStorage.getItem("finaltech7b"));
	var technicalnas7c = JSON.parse(localStorage.getItem("finaltech7c"));
	var technicalnas7d = JSON.parse(localStorage.getItem("finaltech7d"));
	var technicalnas8 = JSON.parse(localStorage.getItem("finaltech8"));
	var technicalnas9 = JSON.parse(localStorage.getItem("finaltechans9"));
	var technicalnas10 = localStorage.getItem("finaltechans10");
	var technicalnas11 = localStorage.getItem("finaltechans11")
	var technical = JSON.stringify({
		"technical_browsers" : technicalnas1,
		"technical_desktop_apps" : technicalnas2,
		"technical_cloudSupport" : technicalnas3,
		"technical_mobile_apps" : technicalnas4,
		"technical_mobileOSVersion" : technicalnas5,
		"technical_targetOS" : technicalnas6,
		"technical_techstack_programmingLanguages" : technicalnas7a,
		"technical_techstack_frontEndTechs" : technicalnas7b,
		"technical_techstack_serverEndTechs" : technicalnas7c,
		"technical_techstack_APITech" : technicalnas7d,
		"technical_perf_apps" : technicalnas8,
		"technical_perf_types" : technicalnas9,
		"technical_CI_integration" : technicalnas10,
		"technical_CI_tool" : technicalnas11
	})
	//console.log("huhsfd" + JSON.stringify(technical))
	var technicalarray = JSON.parse("[" + technical + "]")
	//console.log("huhsfd" + JSON.stringify(technicalarray))
	var budgetans11 = localStorage.getItem("finalbudgetans1")
	var budgetans22 = localStorage.getItem("finalbudgetans2")
	var budget = JSON.stringify({
		"budget_cots_open" : budgetans11,
		"budget_range" : budgetans22
	})
	//console.log("huhvbfgsfd" + JSON.stringify(technical))
	var budgetarray = JSON.parse("[" + budget + "]")
	//console.log("huhsbgfgnfd" + JSON.stringify(budgetarray))
	var user = localStorage.getItem("userEmail")
	//console.log("emailid" + user);
}
function getQueryStrings() {
	var assoc = {};
	var decode = function(s) {
		return decodeURIComponent(s.replace(/\+/g, " "));
	};
	var queryString = location.search.substring(1);
	var keyValues = queryString.split('&');

	for ( var i in keyValues) {
		var key = keyValues[i].split('=');
		if (key.length > 1) {
			assoc[decode(key[0])] = decode(key[1]);
		}
	}

	return assoc;
}
function redirectToHome() {
	var userId = localStorage.getItem("userEmail");
	var loginbtn = document.getElementById("loginbtn");
	var logoutbtn = document.getElementById("logoutbtn");
	//console.log("user" + JSON.stringify(userId));
	//console.log("user is is " + userId);
	if (null === userId) {
		//console.log("in if" + document.getElementById("loginbtn"));
		// document.getElementById("loginbtn").disabled = false;
		loginbtn.style.display = "block"
		logoutbtn.style.display = "none"

	} else {
		//console.log("in else");

		loginbtn.style.display = "none"
		logoutbtn.style.display = "block"

	}
	//console.log("56565656")

	onLoadGoogle();
}
function backinthree1() {
	localStorage.setItem("backclick", "yes");
}
function dependeency() {
	//console.log("xfghjk")
	var mobile = localStorage.getItem("inmobknull")
	var desk = localStorage.getItem("indesknull")
	var webdep = localStorage.getItem("inwebnull")
	if (desk === "desk") {
		// var que24=$( "#ques24" ).hasClass( "item active" )
		/*
		 * ////console.log9"dfghjk if(que24){ //console.log("xc") }else{
		 */
		$("#ques24").removeClass("item active f-e");
		$("#ques24").addClass("item");
		// }

	}
	if (webdep === "web") {
		/*
		 * var que22=$( "#ques22" ).hasClass( "item active" ) if(que22){
		 * //console.log("xcvhjkl;")
		 * 
		 * }else{
		 */
		$("#ques22").removeClass("item active f-e");
		$("#ques22").addClass("item");
		// }
	}
	if (mobile === "mob") {
		var que26 = $("#ques26").hasClass("item active")
		//console.log("dfghj" + JSON.stringify(que26))
		/*
		 * if(que26 === true){ //console.log("in if") }else{
		 */
		$("#ques26").removeClass("item active f-e");
		$("#ques26").addClass("item");
		// }
	}
}
function devcenter() {
	//console.log("555555555555555555")
	var qs = getQueryStrings();

	var userEmail = localStorage.getItem("userEmail");
	var flagState = localStorage.getItem("flag");
	var parameters = localStorage.getItem("params");
	//console.log("The flag is " + flagState + parameters);
	if (flagState) {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "https://" + location.hostname + "/QA?email=" + userEmail, false);
		xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhr.send(parameters);
		//console.log("*************99999***********" + xhr.responseText);
		if (xhr.status == 200) {

			//console.log("login ***********************99999***********"
					//+ xhr.responseText);
			if (userEmail != null) {
				//console.log("user exist")
				var form = document.createElement('form');
				form.enctype = "text/plain";
				document.body.appendChild(form);
				form.method = 'post';
				form.action = "https://" + location.hostname+ "/devcenterpage";
				// for (var name in data) {
				var input = document.createElement('input');
				input.type = 'hidden';
				input.name = "email";
				input.value = userEmail;
				console
						.log("the email is *******************************************"
								+ userEmail)
				form.appendChild(input);
				// }
				form.submit();
			}
		}
		localStorage.setItem("flag", false);
		//console.log("55555555552222222222222222222")
	} else {

		if (userEmail != null) {
			//console.log("user exist")
			var form = document.createElement('form');
			form.enctype = "text/plain";
			document.body.appendChild(form);
			form.method = 'post';
			form.action = "https://" + location.hostname + "/devcenterpage";
			// for (var name in data) {
			var input = document.createElement('input');
			input.type = 'hidden';
			input.name = "email";
			input.value = userEmail;
			console
					.log("the email is *******************************************"
							+ userEmail)
			form.appendChild(input);
			// }
			form.submit();
		} else {
			window.location = "https://" + location.hostname + "/devcenterpage";
		}
	}
}

function devcenterLogout() {
	logout();

	window.location = "https://" + location.hostname + "/devcenterpage";
}
function googleLogout() {

	// if(!gapi.auth2){
	//console.log("in logout googldddde");

	var auth3 = gapi.auth2.getAuthInstance();
	auth3.signOut().then(function() {
		//console.log('User signed out.');
		gapi.auth2.getAuthInstance().disconnect();
	});
	// }
	//console.log("in logout google");
	// gapi.load('auth2', function () {
	// var auth2 = gapi.auth2.init( {client_id:
	// '467617503613-usrsjj1siq7isun7so4kbeui67tcnab0.apps.googleusercontent.com'});
	/*
	 * var auth3 = gapi.auth2.getAuthInstance(); auth3.signOut().then(function() {
	 * //console.log('User signed out.'); });
	 */
	// });
}
function answersoption() {
	$('input[name="technical_CI_integration"]:checked').each(function() {
		techans10 = this.value;
	});
	localStorage.setItem("finaltechans10", techans10)
	localStorage.setItem("option", "yes")

}
function answers() {
	//console.log("fbds")
	let techans10 = "";

	$('input[name="technical_CI_integration"]:checked').each(function() {
		techans10 = this.value;
	});
	localStorage.setItem("finaltechans10", techans10)
	var techanswers241 = localStorage.getItem("finaltechans10")
	//console.log("tech11" + JSON.stringify(techanswers241))
	localStorage.setItem("option", "no")

}

function onLoadGoogle() {
	//console.log("on load google");

	gapi
			.load(
					'auth2',
					function() {
						gapi.auth2
								.init({
									client_id : '467617503613-usrsjj1siq7isun7so4kbeui67tcnab0.apps.googleusercontent.com'
								});
					});

	gapi.signin2.render('gdbtn', {
		'scope' : 'profile email',
		'width' : 235,
		'height' : 44,
		'longtitle' : true,
		'theme' : 'dark',
		'onsuccess' : onSignIn
	});
	gapi.signin2.render('gdbtn2', {
		'scope' : 'profile email',
		'width' : 227,
		'height' : 44,
		'longtitle' : true,
		'theme' : 'dark',
		'onsuccess' : onSignIn
	});
}

function sendEmail() {
	//console.log("Send email called");
	let firstName = document.getElementById("firstNameId").value;
	let lastName = document.getElementById("lastNameId").value;
	let company = document.getElementById("companyId").value;
	let designation = document.getElementById("designationId").value;
	let email = document.getElementById("emailId").value;
	let mobile = document.getElementById("mobileId").value;
	//console.log("Send email called");
	if (!firstName.replace(/\s/g, '').length) {
		document.getElementById("errorMsgfname").innerHTML = "*Enter firstName";
		return;
	}else{
		document.getElementById("errorMsgfname").innerHTML = "";
	}
	if (!lastName.replace(/\s/g, '').length) {
		document.getElementById("errorMsglname").innerHTML = "*Enter lastName";
		return;
	}else{
		document.getElementById("errorMsglname").innerHTML = "";
	}
	if (!company.replace(/\s/g, '').length) {
		document.getElementById("errorMsgCompany").innerHTML = "*Enter Company";
		return;
	}else{
		document.getElementById("errorMsgCompany").innerHTML = "";
	}
	if (!designation.replace(/\s/g, '').length) {
		document.getElementById("errorMsgDesgntn").innerHTML = "*Enter Designation/Title";
		return;
	}else{
		document.getElementById("errorMsgDesgntn").innerHTML = "";
	}
	if (!email.replace(/\s/g, '').length) {
		document.getElementById("errorMsgEmail").innerHTML = "*Enter  Email";
		return;
	}else{
		document.getElementById("errorMsgEmail").innerHTML = "";
	}
	if (!mobile.replace(/\s/g, '').length) {
		document.getElementById("errorMsgMobile").innerHTML = "*Enter Phone Number";
		return;
	}else{
		document.getElementById("errorMsgMobile").innerHTML = "";
	}

	var xhr = new XMLHttpRequest();
	var url = "https://" + location.hostname + "/supportEmail";
	var user = {
		"email" : email,
		"mobile" : mobile,
		"firstName" : firstName,
		"lastName" : lastName,
		"company" : company,
		"altEmail" : designation
	}
	xhr.open('POST', url, true);
	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhr.send(JSON.stringify(user));
	if (xhr.status == 200) {
		//console.log("success 200");

	}
	devcenter();
	//console.log("Send email called");

	//}
}
