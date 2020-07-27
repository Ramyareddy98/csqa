'use strict';
var itemLength;
var progressIndex = 0, secNum, secNumber, progressItemArray = [], progressItemLen;
var array=localStorage.getItem("onOnfinish")
console.log("df"+JSON.stringify(array))
var unique_array = JSON.parse(localStorage.getItem("genericans3"));

var dependencyone=localStorage.getItem("onFinishOne")
var dependencytwo=localStorage.getItem("onFinishThree")
var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );

if(page === "automation-tool-2.html"){
	
	
	
	console.log("array "+JSON.stringify(unique_array))
	for (var j=0; j < unique_array.length; j++) {
	if(unique_array[j] === "ui_mobile"){
		localStorage.setItem("uiMobile","ui_mobile")
		console.log("mobile")
	}
	if(unique_array[j] === "unit_testing"){
		localStorage.setItem("unittest","unit_testing")
		console.log("unit_testing")
	}
	if(unique_array[j] === "api"){
		localStorage.setItem("api","api")
		console.log("api")
	}
	if(unique_array[j] === "perf"){
		localStorage.setItem("performance","perf")
		console.log("performance")
	}
	if(unique_array[j] === "static_analysis"){
		localStorage.setItem("staticAnalysis","static_analysis")
		console.log("static_analysis")
	}
	if(unique_array[j] === "ui_desktop"){
		console.log("ui_desktop")
		localStorage.setItem("uiDesktop","ui_desktop")
	}
	if(unique_array[j] === "ui_web"){
		console.log("web")
		localStorage.setItem("uiWeb","ui_web")
	}
	}
var uimobile=localStorage.getItem("uiMobile")
var api=localStorage.getItem("api")
var unit=localStorage.getItem("unittest")

var value1=localStorage.getItem("uiDesktop")
var stasticanys=localStorage.getItem("staticAnalysis")
var uiWeb=localStorage.getItem("uiWeb")
	console.log("desktop"+JSON.stringify(value1))
	console.log("mobile"+JSON.stringify(uimobile))
var perf=localStorage.getItem("performance")
if(value1 === null && uiWeb === null){
	var element3= document.getElementById("option72");
	console.log("dkke"+JSON.stringify(element3))
	//element3.classList.remove("item");
	$("#option72").remove();
}else{
	
}
if(value1 === null && uiWeb === null && api === null && stasticanys === null && unit === null){
	var element3= document.getElementById("ques27");
	console.log("dkke"+JSON.stringify(element3))
	//element3.classList.remove("item");
	$("#ques27").remove();
}else{
	
}
if(uiWeb === null){
	console.log("ui web")
	var element1 = document.getElementById("ques21");
	element1.classList.remove("item");
	$("#ques21").remove();
	
	var element1 = document.getElementById("ques22");
	
	$("#ques22").addClass("item active f-e");
	localStorage.setItem("inwebnull","web")
}else{
	
}
if(perf === null){
	console.log("in performance")
	var element1 = document.getElementById("ques28");
	element1.classList.remove("item");
	$("#ques28").remove();
	var element1 = document.getElementById("ques29");
	element1.classList.remove("item");
	$("#ques29").remove();
}else{
	
}




if(value1 === null){
console.log("in if desktop")
var element1 = document.getElementById("ques22");
element1.classList.remove("item");
	console.log("dkke"+JSON.stringify(element1))
	//document.getElementById("ques22").style.display="none"




$("#ques22").remove();
	var element2= document.getElementById("ques23");
	console.log("dkke"+JSON.stringify(element2))
	element2.classList.remove("item");
	$("#ques23").remove();
	localStorage.setItem("indesknull","desk")
	
	$("#ques24").addClass("item active f-e");
	




}

else{
	console.log(" in else")
	
	//document.getElementById("nextbutton").click();
	//console.log("clone"+JSON.stringify(clone))
	//$("#qu22").append(clone);    


	
}

if(uimobile === null){
	//var list=document.getElementsByClassName("item");
	//list[3].id="qandans24";
//	$("#qandans24").remove();
	console.log("in if uimobile")
	console.log("ui mobile"+JSON.stringify(uimobile))
	var element4 = document.getElementById("ques24");
	

	console.log("dkke"+JSON.stringify(element4))
	element4.classList.remove("item");
	$("#ques24").remove();
	var element5= document.getElementById("ques25");
	console.log("dkke"+JSON.stringify(element5))
	element5.classList.remove("item");
	$("#ques25").remove();
	$("#ques26").addClass("item active f-e");
	localStorage.setItem("inmobknull","mob")
	 
	}
	else{
		
	}


if(unit === null){
	console.log("in if desktop")
	var element6= document.getElementById("option73");
	if(element6 !=null ){
		console.log("dkke"+JSON.stringify(element6))
	//element6.classList.remove("item");
		$("#option73").remove();
		
	}
	else{
		
	}

	}else{
		
	}
if(api === null){
	console.log("in if desktop")
	var element6= document.getElementById("option74");
	if(element6 !=null ){
		console.log("dkke"+JSON.stringify(element6))
	//element6.classList.remove("item");
		$("#option74").remove();
		
	}
	else{
		
	}
	}else{
		
	}



if(stasticanys === null){
console.log("in if desktop")
var element6= document.getElementById("option71");
if(element6 !=null ){
	console.log("dkke"+JSON.stringify(element6))
//element6.classList.remove("item");
	$("#option71").remove();
	
}
else{
	
}
}else{
	
}


}
var dep1=localStorage.getItem("backintwo")
	var dep2=localStorage.getItem("backbuon");

if(dep1 === "yes"){
	localStorage.setItem("backdisable","backdisable");
	   console.log("xcvbn")
	   $("#ques11").removeClass("item active f-e");
	   $("#ques11").addClass("item");
	 //  $("#ques11").removeClass("item");
	 //  $("#ques12").removeClass("item");
	  document.getElementById("ques11").style.display="none";
	   document.getElementById("ques12").style.display="none";
	   document.getElementById("ques13").style.display="";
	    $("#ques13").addClass("item active f-e");
		    }

var dep12=localStorage.getItem("backinthree")


if(dep12 === "yes"){
	

   console.log("xcvbn")
    var technicalans10=localStorage.getItem("option");
   

    if(technicalans10 === "no"){
    	
    
    
   $("#ques210").removeClass("item active f-e");
    
   $("#ques210").addClass("item");
 //  $("#ques11").removeClass("item");
 //  $("#ques12").removeClass("item");
   var uimobile=localStorage.getItem("uiMobile")
	var api=localStorage.getItem("api")
	var unit=localStorage.getItem("unittest")
var perf=localStorage.getItem("performance")
	var value1=localStorage.getItem("uiDesktop")
	var stasticanys=localStorage.getItem("staticAnalysis")
	var uiWeb=localStorage.getItem("uiWeb")
	if(uiWeb === null){
		
	}else{
		 $("#ques21").removeClass("item active f-e");
		   $("#ques21").addClass("item");
		 document.getElementById("ques21").style.display="none";
	}
	if(value1 === null){
		
	}else{
		 document.getElementById("ques22").style.display="none";
   	   document.getElementById("ques23").style.display="none";
	}
	if(uimobile === null){
	
	}else{
		 document.getElementById("ques24").style.display="none";
   	   document.getElementById("ques25").style.display="none";
	}
	if(value1 === null && uiWeb === null && api === null && stasticanys === null && unit === null){
	
	}else{
		 document.getElementById("ques27").style.display="none";
	}
	
	 if(perf === null){
		 
	 }else{
		 document.getElementById("ques28").style.display="none";
   	   document.getElementById("ques29").style.display="none"; 
	 }
	  
	  document.getElementById("ques26").style.display="none";
	  
   document.getElementById("ques210").style.display="";
    $("#ques210").addClass("item active f-e");
	    }else{
	    	var uimobile=localStorage.getItem("uiMobile")
	    	var api=localStorage.getItem("api")
	    	var unit=localStorage.getItem("unittest")
var perf=localStorage.getItem("performance")
	    	var value1=localStorage.getItem("uiDesktop")
	    	var stasticanys=localStorage.getItem("staticAnalysis")
	    	var uiWeb=localStorage.getItem("uiWeb")
	    	if(uiWeb === null){
	    		
	    	}else{
	    		 $("#ques21").removeClass("item active f-e");
	    		   $("#ques21").addClass("item");
	    		 document.getElementById("ques21").style.display="none";
	    	}
	    	if(value1 === null){
	    		
	    	}else{
	    		 document.getElementById("ques22").style.display="none";
		    	   document.getElementById("ques23").style.display="none";
	    	}
	    	if(uimobile === null){
	    	
	    	}else{
	    		 document.getElementById("ques24").style.display="none";
		    	   document.getElementById("ques25").style.display="none";
	    	}
	    	if(value1 === null && uiWeb === null && api === null && stasticanys === null && unit === null){
	    	
	    	}else{
	    		 document.getElementById("ques27").style.display="none";
	    	}
	    	
	    	 if(perf === null){
	    		 
	    	 }else{
	    		 document.getElementById("ques28").style.display="none";
		    	   document.getElementById("ques29").style.display="none"; 
	    	 }
	    	  
	    	  
	    	   document.getElementById("ques26").style.display="none";
	    	  
	    	  
	    	   document.getElementById("ques210").style.display="none";
	    	   document.getElementById("ques211").style.display="";
	    	    $("#ques211").addClass("item active f-e");
	    	   
	    }
}

var progressItemLength = $('.item').length;
console.log("length"+JSON.stringify(progressItemLength))
progressItemArray.push(progressItemLength)
var btn;
var defaultOptions = {
    showProgress: true,
    showProgressCount: true,
    onFinish: function () {
        alert('Finished');
    }
};
var width = $(window).width();
$(window).on('resize', function () {
    if ($(this).width() !== width) {
        window.location.reload();
    }
});

// Main function to trigger tyle
$.fn.tyle = function (options) {
	 var showProgressBar, showProgressCount;

	
	    
    var targetElement = $(this);
    console.log("item"+JSON.stringify(targetElement))
    targetElement.before(' <div class="progress-container"></div>');
    if (options) {
        if (options.showProgress !== undefined)
            showProgressBar = options.showProgress;
        else
            showProgressBar = defaultOptions.showProgress;
        if (options.showProgressCount !== undefined)
            showProgressCount = options.showProgressCount;
        else
            showProgressCount = defaultOptions.showProgressCount;
        if (options.onFinish != undefined && typeof (options.onFinish) == 'function')
            defaultOptions.onFinish = options.onFinish;

        if (options.duration) {
            targetElement.children().css({
                '-webkit-transition-duration': options.duration / 1000 + 's',
                '-moz-transition-duration': options.duration / 1000 + 's',
                '-mz-transition-duration': options.duration / 1000 + 's',
                'transition-duration': options.duration / 1000 + 's'
            });
        }
    }
    else {
        showProgressBar = defaultOptions.showProgress;
        showProgressCount = defaultOptions.showProgressCount;
    }
    if (showProgressBar) {
        $('.progress-container').append('<div class="progress-indicator"><span class="progress-bar"></span></div>');
    }
    if (showProgressCount) {
        $('.progress-container').append(' <div class="progress-count">Step</div>');
    }
	//$('.step-buttons-container').append('<div class="step-nav"><button class="form-item-changer nav-btn prev-btn" btn-type="prev" disabled="true">Back</button><button class="form-item-changer nav-btn next-btn">Next</button></div>');

    itemLength = targetElement.children().length;
    console.log("child"+itemLength)
    var dep=localStorage.getItem("backintwo")
    if(dep === "yes"){
    	localStorage.setItem("backintwo","")
    	 console.log("in if")
    var indexItem=itemLength-1;
    	progressIndex=2;
    	
    progressIndication(2, itemLength);
    }else{
    	progressIndication(0, itemLength);
    }
    var dep2=localStorage.getItem("backinthree")
    if(page === 'automation-tool-2.html'){
    if(dep2 === "yes"){
    	localStorage.setItem("backinthree","")
    	 console.log("in if")
    var indexItem=itemLength-1;
    	console.log("xcvbn"+JSON.stringify(indexItem))
    	progressIndex=indexItem;
    progressIndication(indexItem, itemLength);
    }
    else{    	 console.log("in else")
    	progressIndication(0, itemLength);
   }
    }
   
    $('.form-item-changer').click(function () {
        if ($(window).width() > 991) {
            // For vertical transition in desktop
            $(this).initTyle(targetElement, "height");
        } else {

            // For horizontal transition in mobile and tablet
            $(this).initTyle(targetElement, "height");
        }
    });
};


// Initialize Tyle elements

$.fn.initTyle = function (targetElement, transType) {
	  var dep=localStorage.getItem("backintwo")
	    if(dep === "yes"){
	    	
	    	 var activeItem = targetElement.children('.active');
	    	    var itemIndex = targetElement.children().index(activeItem);
	    	    var nextItemIndex = targetElement.children().index(activeItem.next().next());
	    }else{
	    	var activeItem = targetElement.children('.active');
	        var itemIndex = targetElement.children().index(activeItem);
	        var nextItemIndex = targetElement.children().index(activeItem.next().next());
	    }
    
    console.log("item index"+JSON.stringify(itemIndex))
     console.log("nextItemIndex index"+JSON.stringify(nextItemIndex))
    var btn = $(this);
    var btnType = btn.attr('btn-type');
    if(btnType != 'prev'){
        if(!activeItem.hasClass('is-viewed')){
            activeItem.addClass('is-viewed');
        }
        if(!activeItem.next().hasClass('is-viewed')){
            disableBtn('.next-btn', false);
        }
        else{
            disableBtn('.next-btn', false);
        }
    }
    if (itemIndex === 0 && btnType === 'prev' && page === "automation-tool-1.html") {
    	document.getElementById("myBtn").disabled = true;
    	
    }
  
    if (itemIndex === 0) {
    	/*if(page === "automation-tool-3.html" && btnType === 'prev'){
    		localStorage.setItem("backinthree","yes")
        	//window.location="automation-tool-2.html";
        	window.history.back();
    	}*/
        disableBtn('.prev-btn', false);
    }
    if (nextItemIndex < 0 ) {
    	console.log("hgdi")
        disableBtn('.next-btn', false);
    }
    var budgetans1=localStorage.getItem("budgetq1dependency")
    var ans1=localStorage.getItem("finalbudgetans2")
    console.log("bcj")
    if(page === "automation-tool-3.html"  ){
    	console.log("cfghjhkjk"+JSON.stringify(ans1))
    	 console.log("bcjpage"+page)
    if(ans1 === "open" && btnType != 'prev'){
    	if(itemIndex == itemLength-2){
    		var element5= document.getElementById("budgetq2");
    		element5.style.visibility="hidden";
    		console.log("dkke"+JSON.stringify(element5))
    		element5.classList.remove("item");
    		/*$("#budgetq2").remove();*/
	    	console.log("option")
	    	 defaultOptions.onFinish(); 
	    }
    }
    }
    
    else{
    	 
    }
    var technicalans10=localStorage.getItem("option")
 //   console.log("hvgdh"+JSON.stringify(technicalans10))
    if(technicalans10 === "no" && page === "automation-tool-2.html" && btnType != 'prev'){
    if(itemIndex == itemLength-2){
    	console.log("option")
    	 defaultOptions.onFinish(); 
    }
    }
    if ((itemIndex >= 0 && itemIndex < itemLength - 1) || btnType == 'prev') {
    	console.log("call")
        elementTransitionType(activeItem, itemLength, itemIndex, btnType, transType, btn);
    }
    else {
    	console.log("dgfuew")
        defaultOptions.onFinish(); // On end
    }
    
};

// To Toggle button state

function disableBtn(btn, flag) {
    $(btn).attr('disabled', flag);
};

// To Indicate step progress

function progressIndication(itemIndex, itemLength) {
	console.log("fg"+JSON.stringify(itemIndex))
	if(page === "automation-tool-1.html"){
		if((itemIndex) === 0){
			console.log("dfghjk")
			document.getElementById("myBtn").disabled = true;
			
		}
	}
	
	console.log("fg"+JSON.stringify(itemIndex))
	
	console.log("vhjgdkj");
	/*var tech10= localStorage.getItem("finaltechans10")
	
	console.log("ndh"+JSON.stringify(tech10))
	var state=localStorage.getItem("final")
if(state === "no"){

	

	if("true"===JSON.stringify(tech10)){
		console.log("vknjds")
	}else{
		console.log("in performance")
		var element1 = document.getElementById("ques211");
		element1.classList.remove("item");
		$("#ques211").remove();
		
			  
			
		
	}
	
	}*/
console.log("itemlength"+itemLength)

    var progressPercent;
progressIndication.num++;
console.log("ghd"+JSON.stringify(progressIndication.num++))
    $('.progress-count').html((itemIndex + 1) + '/' + itemLength);
    if (itemIndex <= itemLength - 1) {
        progressPercent = (itemIndex + 1) / itemLength * 100;
    }
    console.log(itemIndex, itemLength)
    $('.progress-bar').css({ 'width': progressPercent + '%' });
}
progressIndication.num = 0;
// To get the type of transition
function elementTransitionType(activeItem, itemLength, itemIndex, btnType, transType, btn) {
    var transitionAxis, activeItemHeight, nextItemTransitionPos,nextItemHeight;
    itemIndex = itemIndex + 1;
  
    if (btnType === 'prev') {
        nextItemHeight=activeItem.prev().outerHeight();
    }
    else{
        nextItemHeight=activeItem.next().outerHeight();
    }
  
    console.log(nextItemHeight);
    if (transType === 'height') {
        activeItemHeight = activeItem.outerHeight();
        transitionAxis = 'Y'; // For selecting translate axis
    } else {
        
      
        activeItemHeight = activeItem.outerWidth()+5;
        console.log(activeItemHeight);
       
        
        
        transitionAxis = 'X'; // For selecting translate axis
    }
    var currentItemTransitionPos;
console.log("progress index"+JSON.stringify(progressIndex))
console.log("er"+JSON.stringify(secNumber))
    if (secNumber) {
     //   console.log(secNum)
        progressItemLen = progressItemArray[secNumber - 1];
    }
    else {
        progressItemLen = progressItemArray[0];
    }
    if (btnType === 'prev') {
        if (progressIndex == 0) {
        	if(page === "automation-tool-1.html"){
        		location.reload();
        		//window.location="automation-tool-1.html";
        	}
        	if(page === "automation-tool-2.html"){
        		
        		
        	localStorage.setItem("backintwo","yes")
        	//window.location="automation-tool-1.html";
        	window.history.back();
        	}
        	if(page === "automation-tool-3.html"){
        		
            	localStorage.setItem("backinthree","yes")
            	//window.location="automation-tool-2.html";
            	window.history.back();
            	}else{
        		$('li.active').removeClass('active').prev().addClass('active');
        	}
        	
            //$('li.active').removeClass('active').prev().addClass('active');
        }
        
        if (progressIndex < 1) {
        	console.log("xcvhjkl")
        	 progressIndex= progressIndex+1
           /* progressItemLen = progressItemArray[secNumber - 2];
            progressIndex = progressItemLen;*/
            

        }
        
       progressIndex = progressIndex - 1;
        if (secNumber) {
            btn.addClass('prev-pressed')
        }
      /*  var dep1=localStorage.getItem("staticval1");
        console.log("fghj"+JSON.stringify(dep1))
        
        var dep3=localStorage.getItem("staticval2");
        console.log("fghj"+JSON.stringify(dep3))
        var dep2=localStorage.getItem("backbuon");
        if(dep2 === "back"){
        	console.log("cvbnm,")
        	//progressIndication(1, 3);
        if(dep1 == 1){
        	console.log("zxcvbn")
        	progressIndication(1, 3);
        }
        else{
        	console.log("srtuikmbhil")
        	progressIndication(0, 3);
        }
        }else{*/
        	console.log("asdfgh")
        	  
        progressIndication(progressIndex, progressItemLen); // Subtracting 2 to get current progress
       // }
        disableBtn('.next-btn', false);
        itemIndex = itemIndex;
        if (itemIndex == 2) {
            nextItemTransitionPos = 0; // To resolve "Infinity" Error
           // disableBtn('.prev-btn', true)
        }
        else {
            nextItemTransitionPos = activeItemHeight * (itemIndex - 2); // To set position of element to inital state
        }
        currentItemTransitionPos = nextItemTransitionPos * 0.5; // Leaving Transition position prev
        
        transitionStyles(activeItem, activeItem.prev(), currentItemTransitionPos, -nextItemTransitionPos, transitionAxis);
    }
    else {
    	
        console.log("progressIndex",progressIndex)
        if (progressIndex == -1) {
            $('li.active').removeClass('active').next().addClass('active');
        }
        // if (progressIndex == 0) {
        //     if (secNumber && btn.hasClass('prev-pressed')) {
        //         progressItemLen = progressItemArray[secNumber - 1];
        //         console.log('secno', progressItemLen)
        //     }
        // }
        
        progressIndex = progressIndex + 1;
        var technicalans101=localStorage.getItem("option")
	    if(progressIndex ===  itemLength && technicalans101 === "yes"){
	    	console.log("xcvbnm")
	    	 progressIndication(progressIndex, progressItemLen+1);
	    }
	    else{
	    	progressIndication(progressIndex, progressItemLen);
	    }
        
        nextItemTransitionPos = activeItemHeight * itemIndex; // To set the position of next element
        currentItemTransitionPos = nextItemTransitionPos * 0.7; // Leaving Transition position next
        transitionStyles(activeItem, activeItem.next(), -currentItemTransitionPos, -nextItemTransitionPos, transitionAxis);
    }
}

// Transition Styles

function transitionStyles(activeItem, effectingEle, cpos, npos, transitionAxis) {
    activeItem.removeClass('active').css({ transform: 'translate' + transitionAxis + '(' + cpos * 1.5 + 'px)' }); //Transition for the current element to exit viewport
    effectingEle.addClass('active').css({ transform: 'translate' + transitionAxis + '(' + npos + 'px)' }); //Transition for the next element to enter viewport
}

if(width<991){
    var feh=$('.f-e').outerHeight();
}