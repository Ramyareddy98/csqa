var roiResultSize = 0;
var netCostResultSize = 0;

//window.onload = function(){
google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);
roiResultSize = localStorage.getItem("roiresultSize");	
netCostResultSize = localStorage.getItem("netCostresultSize");	

console.log("roiResultSize :"+roiResultSize);	
console.log("netCostresultSize :"+netCostResultSize);			
drawChart();
//}

var chart_div;
var chart;
var linechart;
var imageURI;
var reportChart;
var reportImageURI;


  
function drawChart() {
	
	var data = new google.visualization.DataTable();
	 data.addColumn('string', 'Quarter');
	 data.addColumn('number', 'NetSavings');
	 data.addColumn('number', 'Cumulative');	 
	 
	for(var res=0; res<roiResultSize; res++){
		var q = localStorage.getItem("q"+res);
		var netSaving = localStorage.getItem("netSavings"+res);	
		var cumulative = localStorage.getItem("cumulative"+res);
		data.addRow([q,  Number(netSaving), Number(cumulative)]);
	}

	var options = {
	  title: 'ROI Calculator',
	  width: 700,
		height: 350,
		bar: {groupWidth: "50%"},
		legend: { position: "right" },
		hAxis: {
		  title: 'Quarters'
		},
		vAxis: {
		  title: 'NetSavings and Cumulative'
		},
		chartArea: {width: '50%'}
	};
	
	var view = new google.visualization.DataView(data);
		view.setColumns([0, 1, {
		calc: "stringify",
		sourceColumn: 1,
		type: "string",
		role: "annotation"
	}, 2, {
		calc: "stringify",
		sourceColumn: 2,
		type: "string",
		role: "annotation"
	}]);
	

	chart = new google.visualization.ColumnChart(document.getElementById('Cchart_div'));
	
	 google.visualization.events.addListener(chart, 'ready', function() {
          imageURI = chart.getImageURI();
      });

	chart.draw(data, options);
	
	 
	var reportOptions = {
			  title: 'ROI Calculator',
			  width: 1000,
				height: 350,
				bar: {groupWidth: "50%"},
				legend: { position: "right" },
				hAxis: {
				  title: 'Quarters'
				},
				vAxis: {
				  title: 'NetSavings and Cumulative'
				},
				chartArea: {width: '50%'}
			};
	 reportChart = new google.visualization.ColumnChart(document.getElementById('Cchart_div_report'));
	
	 google.visualization.events.addListener(reportChart, 'ready', function() {
		 reportImageURI = reportChart.getImageURI();
     });

	 reportChart.draw(data, reportOptions);
	
	var linedata = new google.visualization.DataTable();
	 linedata.addColumn('string', 'Quarter');
	 linedata.addColumn('number', 'Net Cost Per Auto Test');	
	 linedata.addColumn('number', 'Net Cost Per Manual Test');	
	 
	 for(var net=0; net<netCostResultSize; net++){
		var qrtr = localStorage.getItem("qNet"+net);
		var netAutoCost = localStorage.getItem("autoTestNetCost"+net);	
		var netManualCost = localStorage.getItem("manualTestNetCost"+net);			
		linedata.addRow([qrtr, Number(netAutoCost),Number(netManualCost)]);
	}

        var optionsL = {
			width: 1000,
		height: 350,
          title: 'Net Cost Per Auto-Manual TestCase',
          curveType: 'function',
          legend: { position: 'right' },
		  hAxis: {
		  title: 'Quarters'
		},
		vAxis: {
		  title: 'Net Cost per TestCase'
		},
		chartArea: {width: '40%'}
        };

       linechart = new google.visualization.LineChart(document.getElementById('Lchart_div'));

        linechart.draw(linedata, optionsL);
	
}

 function printPDF1() {
      var d = document.getElementById('reportPdf1');
      if (d) {
          d.parentNode.removeChild(d);
      }
      var newdiv = document.createElement("div");
      newdiv.id = "reportPdf1";
     console.log("image uri is" + chart.getImageURI());
      newdiv.innerHTML = ' <img id="imageId"  alt="Mountainw View">  ';
      document.getElementsByTagName('body')[0].appendChild(newdiv);
      document.getElementById("imageId").src = chart.getImageURI();
	  
      html2canvas($("#reportPdf1"), {
          onrendered: function(canvas) {
              var doc = new jsPDF();
              var imgData = canvas.toDataURL("image/png");
              doc.addImage(imgData, 'PNG', 1, 1);
              var pdfName = 'ROIcalculation.pdf';
              doc.save(pdfName);
          }
      });
      document.getElementById('reportPdf').hidden = true;
 }
 
 
 function printPDF2() {
      var d = document.getElementById('reportPdf2');
      if (d) {
          d.parentNode.removeChild(d);
      }
      var newdiv = document.createElement("div");
      newdiv.id = "reportPdf2";
     console.log("image uri is" + chart.getImageURI());
      newdiv.innerHTML = ' <img id="imageId2"  alt="Mountainw View">  ';
      document.getElementsByTagName('body')[0].appendChild(newdiv);
      document.getElementById("imageId2").src = linechart.getImageURI();
	  
      html2canvas($("#reportPdf2"), {
          onrendered: function(canvas) {
              var doc = new jsPDF();
              var imgData = canvas.toDataURL("image/png");
              doc.addImage(imgData, 'PNG', 1, 1);
              var pdfName = 'NetCostPerTestCase.pdf';
              doc.save(pdfName);
          }
      });
      document.getElementById('reportPdf2').hidden = true;
 }
 
 function printPDF() {
//       var d = document.getElementById('reportPdf');
//      if (d) {
//          d.parentNode.removeChild(d);
//      }
//	 document.body.className = "print";
//      var newdiv = document.createElement("div");
//      newdiv.id = "reportPdf";
//	  newdiv.innerHTML = '<page size="A4"> <section id="reports-head" class="reports-head"> <div class="container"> <div class="row"> <img id="CSQAlogo" alt=""> </div><div class="row"> <div class="reports-title"> <h2 id="roiPdf_title"></h2> <span id="dateSpamId" class="date"></span> </div></div></div></section> </page> <page size="A4"> <section class="results-portfolio"> <div class="container"> <div class="row" style="margin-top:-150px !important"> <div class="col-md-12 col-xs-12 col-sm-6"> <div class="left-text"> <h3 id="roiReport_title"></h3> <p id="startPara"></p></div></div></div><div class="row"> <img id="reportImg1" alt=""> <img id="reportImg2" alt=""> <div class="col-md-12 col-xs-12 col-sm-6"> <div class="left-text"> <p id="secondPara"></p></div></div></div></div></section> </page> <page size="A4"> <section class="reports-footer"> <div class="container"> <div class="row"> <div class="col-md-6"> <h3 id="lastHead1"></h3> <p id="lastPara1"></p></div><div class="col-md-6"> <h3 id="lastHead2"></h3> <p id="lastPara2"></p></div></div><div class="row"> <div class="col-md-12"> <p id="lastPara3"></p></div></div><div class="footer-text"> <img id="footerLogoImg" alt=""> <p><a href="www.cloudscaleqa.com">www.cloudscaleqa.com</a> <br/> <a href="tel:1234567890">1234567890</a> <br/> <a href="mailto:murali@cloudscaleqa.com">murali@cloudscaleqa.com</a> </p></div></div></section> </page>';
//	  document.getElementsByTagName('body')[0].appendChild(newdiv);
//	  document.getElementById("roiPdf_title").innerHTML = localStorage.getItem("roiPdf_title");
//	  document.getElementById("roiReport_title").innerHTML = localStorage.getItem("roiReport_title");
//      document.getElementById("reportImg1").src = chart.getImageURI();
//	  document.getElementById("dateSpamId").innerHTML = formatAMPM();
//	  document.getElementById("reportImg2").src = linechart.getImageURI();
//	  document.getElementById("CSQAlogo").src = 'data:image/png;base64,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';
//		//document.getElementById("CSQAlogo").src = "assets/images/logo.png";
//	  document.getElementById("secondPara").innerHTML = localStorage.getItem("roi_secondText");
//	  document.getElementById("startPara").innerHTML = localStorage.getItem("roi_startText");	
//	  document.getElementById("lastPara1").innerHTML = localStorage.getItem("roi_last1Text");
//	  document.getElementById("lastPara2").innerHTML = localStorage.getItem("roi_last2Text");
//	  document.getElementById("lastPara3").innerHTML = localStorage.getItem("roi_last3Text");
//	  
//	  document.getElementById("lastHead1").innerHTML = localStorage.getItem("roi_last1Head");
//	  document.getElementById("lastHead2").innerHTML = localStorage.getItem("roi_last2Head");
//	  
//	  document.getElementById("footerLogoImg").src = 'data:image/png;base64,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';
//	  
//     html2canvas($("#reportPdf"), {
//          onrendered: function(canvas) {
//			  console.log("Canvas dimensions :"+canvas.height+" "+canvas.width);
//			  var imgWidth = 356; 				
//				var imgHeight = canvas.height * imgWidth / canvas.width;
//				var pageHeight = 297;  
//				console.log("imgHeight :"+imgHeight);
//				var heightLeft = imgHeight;
//				var doc = new jsPDF('p', 'mm','a4');
//				var position = 0;
//				var imgData = canvas.toDataURL("image/png");
//				doc.addImage(imgData, 'PNG', -73, position, imgWidth, imgHeight);
//				heightLeft -= pageHeight;
//				//doc.context2d.pageWrapYEnabled = true;
//				//doc.canvas.height = doc.internal.pageSize.height;
//
//				while (heightLeft >= 0) {
//				  position = heightLeft - imgHeight;
//				  doc.addPage();
//				  doc.addImage(imgData, 'PNG', -73, position, imgWidth, imgHeight);
//				  heightLeft -= pageHeight;
//				}
//
//              doc.save('RoiCalculation.pdf');
//          }
//      });
//      document.getElementById('reportPdf').hidden = true;
// 
      var form = document.createElement('form');
  	form.setAttribute("target", "_blank");
  	document.body.appendChild(form);
  	form.method = 'post';
  	form.action = "https://" + location.hostname+"/roireport";
  	var input1 = document.createElement('input');
  	input1.type = 'hidden';
  	input1.name = "image";
  	input1.value = reportChart.getImageURI();
  	form.appendChild(input1);
  	var input1 = document.createElement('input');
	input1.type = 'hidden';
	input1.name = "reportName";
	input1.value = linechart.getImageURI();
	form.appendChild(input1);
	form.submit();
 }
 
 function formatAMPM() {
      var d = new Date(),
          minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
          hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
          ampm = d.getHours() >= 12 ? 'pm' : 'am',
		  t = d.getDate() == 1 ? 'st':(d.getDate() == 2? 'nd' :(d.getDate() == 3? 'rd' : 'th')),
          months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      return 'On '+ d.getDate() + t +' '+ months[d.getMonth()]  + ' ' + d.getFullYear() + ', ' + hours + ':' + minutes + ampm;
  }
  
  
	
	