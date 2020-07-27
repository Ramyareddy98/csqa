package com.cloudscaleqa.model;

public class Report {
private String reportName;
private  String reportTitle;
private String image;

public Report() {
	
}


public Report(String reportName, String reportTitle, String image) {
	super();
	this.reportName = reportName;
	this.reportTitle = reportTitle;
	this.image = image;
}
public String getReportName() {
	return reportName;
}
public void setReportName(String reportName) {
	this.reportName = reportName;
}
public String getReportTitle() {
	return reportTitle;
}
public void setReportTitle(String reportTitle) {
	this.reportTitle = reportTitle;
}
public String getImage() {
	return image;
}
public void setImage(String image) {
	this.image = image;
}


}
