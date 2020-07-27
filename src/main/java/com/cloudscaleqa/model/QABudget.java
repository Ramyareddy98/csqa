package com.cloudscaleqa.model;

public class QABudget {
	private String budget_cots_open;
	private String budget_range;

	public QABudget() {
		
	}
	public QABudget(String budget_cots_open, String budget_range) {
		super();
		this.budget_cots_open = budget_cots_open;
		this.budget_range = budget_range;
	}

	public String getBudget_cots_open() {
		return budget_cots_open;
	}

	public void setBudget_cots_open(String budget_cots_open) {
		this.budget_cots_open = budget_cots_open;
	}

	public String getBudget_range() {
		return budget_range;
	}

	public void setBudget_range(String budget_range) {
		this.budget_range = budget_range;
	}

}
