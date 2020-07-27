package com.cloudscaleqa.model;

import java.util.ArrayList;
import java.util.List;

public class QATechnical {
private List<String> technical_browsers=new ArrayList<String>();
private List<String> technical_desktop_apps=new ArrayList<String>();
private String technical_cloudSupport;
private List<String> technical_mobile_apps=new ArrayList<String>();
private List<String> technical_mobileOSVersion=new ArrayList<String>();
private List<String> technical_targetOS=new ArrayList<String>();
private List<String> technical_techstack_programmingLanguages=new ArrayList<String>();
private List<String> technical_techstack_frontEndTechs=new ArrayList<String>();
private List<String> technical_techstack_serverEndTechs=new ArrayList<String>();
private List<String> technical_techstack_APITech	=new ArrayList<String>();
private List<String> technical_perf_apps=new ArrayList<String>();

private List<String> technical_perf_types=new ArrayList<String>();
private String technical_CI_integration;
private String technical_CI_tool;
public QATechnical() {
}

public QATechnical(List<String> technical_browsers, List<String> technical_desktop_apps, String technical_cloudSupport,
		List<String> technical_mobile_apps, List<String> technical_mobileOSVersion, List<String> technical_targetOS,
		List<String> technical_techstack_programmingLanguages, List<String> technical_techstack_frontEndTechs,
		List<String> technical_techstack_serverEndTechs, List<String> technical_techstack_APITech,
		List<String> technical_perf_apps, List<String> technical_perf_types, String technical_CI_integration,
		String technical_CI_tool) {
	super();
	this.technical_browsers = technical_browsers;
	this.technical_desktop_apps = technical_desktop_apps;
	this.technical_cloudSupport = technical_cloudSupport;
	this.technical_mobile_apps = technical_mobile_apps;
	this.technical_mobileOSVersion = technical_mobileOSVersion;
	this.technical_targetOS = technical_targetOS;
	this.technical_techstack_programmingLanguages = technical_techstack_programmingLanguages;
	this.technical_techstack_frontEndTechs = technical_techstack_frontEndTechs;
	this.technical_techstack_serverEndTechs = technical_techstack_serverEndTechs;
	this.technical_techstack_APITech = technical_techstack_APITech;
	this.technical_perf_apps = technical_perf_apps;
	this.technical_perf_types = technical_perf_types;
	this.technical_CI_integration = technical_CI_integration;
	this.technical_CI_tool = technical_CI_tool;
}
public List<String> getTechnical_browsers() {
	return technical_browsers;
}
public void setTechnical_browsers(List<String> technical_browsers) {
	this.technical_browsers = technical_browsers;
}
public List<String> getTechnical_desktop_apps() {
	return technical_desktop_apps;
}
public void setTechnical_desktop_apps(List<String> technical_desktop_apps) {
	this.technical_desktop_apps = technical_desktop_apps;
}
public String getTechnical_cloudSupport() {
	return technical_cloudSupport;
}
public void setTechnical_cloudSupport(String technical_cloudSupport) {
	this.technical_cloudSupport = technical_cloudSupport;
}
public List<String> getTechnical_mobile_apps() {
	return technical_mobile_apps;
}
public void setTechnical_mobile_apps(List<String> technical_mobile_apps) {
	this.technical_mobile_apps = technical_mobile_apps;
}
public List<String> getTechnical_mobileOSVersion() {
	return technical_mobileOSVersion;
}
public void setTechnical_mobileOSVersion(List<String> technical_mobileOSVersion) {
	this.technical_mobileOSVersion = technical_mobileOSVersion;
}
public List<String> getTechnical_targetOS() {
	return technical_targetOS;
}
public void setTechnical_targetOS(List<String> technical_targetOS) {
	this.technical_targetOS = technical_targetOS;
}
public List<String> getTechnical_techstack_programmingLanguages() {
	return technical_techstack_programmingLanguages;
}
public void setTechnical_techstack_programmingLanguages(List<String> technical_techstack_programmingLanguages) {
	this.technical_techstack_programmingLanguages = technical_techstack_programmingLanguages;
}
public List<String> getTechnical_techstack_frontEndTechs() {
	return technical_techstack_frontEndTechs;
}
public void setTechnical_techstack_frontEndTechs(List<String> technical_techstack_frontEndTechs) {
	this.technical_techstack_frontEndTechs = technical_techstack_frontEndTechs;
}
public List<String> getTechnical_techstack_serverEndTechs() {
	return technical_techstack_serverEndTechs;
}
public void setTechnical_techstack_serverEndTechs(List<String> technical_techstack_serverEndTechs) {
	this.technical_techstack_serverEndTechs = technical_techstack_serverEndTechs;
}
public List<String> getTechnical_techstack_APITech() {
	return technical_techstack_APITech;
}
public void setTechnical_techstack_APITech(List<String> technical_techstack_APITech) {
	this.technical_techstack_APITech = technical_techstack_APITech;
}
public List<String> getTechnical_perf_apps() {
	return technical_perf_apps;
}
public void setTechnical_perf_apps(List<String> technical_perf_apps) {
	this.technical_perf_apps = technical_perf_apps;
}
public List<String> getTechnical_perf_types() {
	return technical_perf_types;
}
public void setTechnical_perf_types(List<String> technical_perf_types) {
	this.technical_perf_types = technical_perf_types;
}
public String getTechnical_CI_integration() {
	return technical_CI_integration;
}
public void setTechnical_CI_integration(String technical_CI_integration) {
	this.technical_CI_integration = technical_CI_integration;
}
public String getTechnical_CI_tool() {
	return technical_CI_tool;
}
public void setTechnical_CI_tool(String technical_CI_tool) {
	this.technical_CI_tool = technical_CI_tool;
}


}
