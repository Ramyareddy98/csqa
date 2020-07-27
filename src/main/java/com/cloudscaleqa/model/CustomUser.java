package com.cloudscaleqa.model;

import java.util.ArrayList;
import java.util.List;

public class CustomUser {
	private User user;
	private List<CustomToolGroup> toolGroupList = new ArrayList<CustomToolGroup>(0);
	
	public CustomUser() {
		
	}
	public CustomUser(User user,
			String company, List<CustomToolGroup> toolGroupList) {
		super();
		this.user=user;
		this.toolGroupList = toolGroupList;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public List<CustomToolGroup> getToolGroupList() {
		return toolGroupList;
	}
	public void setToolGroupList(List<CustomToolGroup> toolGroupList) {
		this.toolGroupList = toolGroupList;
	}
	
	
	
	
}
