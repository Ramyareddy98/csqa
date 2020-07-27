package com.cloudscaleqa.model;

import java.util.ArrayList;
import java.util.List;

public class QAModel {
	
	private List<QAGeneric> generic=new ArrayList<QAGeneric>();
	private List<QATechnical> technical=new ArrayList<QATechnical>();
	private List<QABudget> budget=new ArrayList<QABudget>();

	public QAModel() {
		
	}
	public QAModel(List<QAGeneric> generic, List<QATechnical> technical, List<QABudget> budget) {
		super();
		this.generic = generic;
		this.technical = technical;
		this.budget = budget;
	}

	public List<QAGeneric> getGeneric() {
		return generic;
	}

	public void setGeneric(List<QAGeneric> generic) {
		this.generic = generic;
	}

	public List<QATechnical> getTechnical() {
		return technical;
	}

	public void setTechnical(List<QATechnical> technical) {
		this.technical = technical;
	}

	public List<QABudget> getBudget() {
		return budget;
	}

	public void setBudget(List<QABudget> budget) {
		this.budget = budget;
	}
	

}
