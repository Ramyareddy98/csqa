package com.cloudscaleqa.model;

import java.util.ArrayList;
import java.util.List;

public class CustomToolGroup {
	private Toolgroup toolGroup;
	private List<Tool> tools = new ArrayList<Tool>(0);

	public CustomToolGroup() {
		
	}
	public CustomToolGroup(List<Tool> tools,Toolgroup toolGroup) {
		super();
		this.tools = tools;
		this.toolGroup=toolGroup;
	}

	public List<Tool> getTools() {
		return tools;
	}

	public void setTools(List<Tool> tools) {
		this.tools = tools;
	}
	public Toolgroup getToolGroup() {
		return toolGroup;
	}
	public void setToolGroup(Toolgroup toolGroup) {
		this.toolGroup = toolGroup;
	}
	
}
