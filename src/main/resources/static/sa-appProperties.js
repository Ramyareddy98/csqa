	var saPdf_title ='Suitability Analysis';
	var saReport_title='Suitability Analysis Report';
	var sa_startText = 'Test automation and CI/CD pipeline implementations always often provide great benefit to product engineering. But these benefits do not come cheap. CIOs and CTOs constrained by budgets and time to market have to choose the right candidates from their portfolio of products to get the maximum benefit. CloudscaleQA has designed this questionnaire and evaluation methodology to help CIOs and CTOs understand in a relative sense what could be the right candidates for these implementations.';
	var sa_secondText = 'Based on the answers to questionnaire the above graph depicts the relative cost benefit scenarios for your application portifolio. Applications with low benefit could be ignored for implementation relative to applications that are showing high benefit. We suggest that a detailed analysis be undertaken for applications that show high potential benefit. The detailed analysis should be able to project real costs and benefits in Dollar terms and provide a clear ROI picture.';
	var sa_last1Text = 'Based on the vast years of experience of the leadership at CloudscaleQA, we have defined factors that contribute to the cost and benefit of test automation tooling. The factors and their influence on cost and benefit have been carefully calibrated after detailed analysis. Based on detailed mathematical calculations using the answer we arrive at summary cost and benefit number for each application area. These numbers are projected on a graph to show relative position of each application.';

	var sa_last2Text = 'This methodology projections are relative, hence at least two applications/products should be used to get any meaningful results. The scoring is done based on generic industry data and expectation of costs are based on usage of offshore low cost location. The DIY tool will provide a generic direction and detailed analysis is required for more accurate projections.';

	var sa_last3Text = 'Our senior consultants can help get a more cutomized suitability analysis report for you based on study of lot more factors. Please reach out to us so that one of our senior consultants can talk to you.';
	var sa_last1Head ='Methodology';
	var sa_last2Head = 'Assumptions';
	
	var sa_q1Para ='Applications in this quadrant have both high cost and benefit from automation. Where benefits are more important for the organization irrespective of costs, automation should be taken up. In case costs are very critical, a detailed analysis should be undertaken to find ways to minmise the costs';
	var sa_q2Para ='Applications in this quadrant have low cost and high benefit from automation. CIOs and CTOs should immediately start planning and budgetting excercises for these applications. ROI analysis should be done for approval.';
	var sa_q3Para ='Applications in this quadrant have both low cost and benefit from automation. Considering low benefit there is no compelling reason for automation. Since cost is low as well, if the rest of the suit of application have been automated, one can select these as well for uniformity';
	var sa_q4Para ='Applications in this quadrant have high cost and low benefit from automation. These applications should never be considered for automation';
	var noQfound = 'No applications found in this Quadrant';
	
	var sa_q1Head ='High Cost and Benefit';
	var sa_q2Head ='Low Cost High Benefit';
	var sa_q3Head ='Low Cost and Benefit';
	var sa_q4Head ='High Cost Low Benefit';
	
	localStorage.setItem("saPdf_title",saPdf_title);
	localStorage.setItem("saReport_title",saReport_title);
	
	localStorage.setItem("sa_startText",sa_startText);	
	localStorage.setItem("sa_secondText",sa_secondText);
	localStorage.setItem("sa_last1Text",sa_last1Text);
	localStorage.setItem("sa_last2Text",sa_last2Text);
	localStorage.setItem("sa_last3Text",sa_last3Text);
	localStorage.setItem("sa_last1Head",sa_last1Head);
	localStorage.setItem("sa_last2Head",sa_last2Head);
	
	localStorage.setItem("sa_q1Para",sa_q1Para);	
	localStorage.setItem("sa_q2Para",sa_q2Para);
	localStorage.setItem("sa_q3Para",sa_q3Para);
	localStorage.setItem("sa_q4Para",sa_q4Para);
	localStorage.setItem("noQfound",noQfound);	
	
	localStorage.setItem("sa_q1Head",sa_q1Head);
	localStorage.setItem("sa_q2Head",sa_q2Head);
	localStorage.setItem("sa_q3Head",sa_q3Head);
	localStorage.setItem("sa_q4Head",sa_q4Head);
