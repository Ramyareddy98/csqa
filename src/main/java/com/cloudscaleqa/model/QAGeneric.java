package com.cloudscaleqa.model;

import java.util.ArrayList;
import java.util.List;

public class QAGeneric {

	private String generic_context;
	private String generic_autowner;
	private List<String> generic_auttype=new ArrayList<String>();
	public QAGeneric() {
		
	}
	public QAGeneric(String generic_context, String generic_autowner, List<String> generic_auttype) {
		super();
		this.generic_context = generic_context;
		this.generic_autowner = generic_autowner;
		this.generic_auttype = generic_auttype;
	}
	public String getGeneric_context() {
		return generic_context;
	}
	public void setGeneric_context(String generic_context) {
		this.generic_context = generic_context;
	}
	public String getGeneric_autowner() {
		return generic_autowner;
	}
	public void setGeneric_autowner(String generic_autowner) {
		this.generic_autowner = generic_autowner;
	}
	public List<String> getGeneric_auttype() {
		return generic_auttype;
	}
	public void setGeneric_auttype(List<String> generic_auttype) {
		this.generic_auttype = generic_auttype;
	}

	
}
