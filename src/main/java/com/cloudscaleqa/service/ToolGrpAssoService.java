package com.cloudscaleqa.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cloudscaleqa.model.CustomToolGroup;
import com.cloudscaleqa.model.Tool;
import com.cloudscaleqa.model.Toolgroup;
import com.cloudscaleqa.model.Toolgrouptoolassoc;
import com.cloudscaleqa.repository.ToolGrpAssoRepo;

@Service
public class ToolGrpAssoService {

	@Autowired
	ToolGrpAssoRepo toolGroupAsscoRepo;

	public List<CustomToolGroup> getAllList() {
		List<Toolgrouptoolassoc> toolgrouptoolassocList = new ArrayList<Toolgrouptoolassoc>();
		toolgrouptoolassocList = toolGroupAsscoRepo.findAll();
		List<CustomToolGroup> customToolGroupList = new ArrayList<CustomToolGroup>();
		// CustomUser cutomUserObj=new CustomUser();
		List<String> idList = new ArrayList<String>();
		if (!toolgrouptoolassocList.isEmpty()) {

			for (Toolgrouptoolassoc toolgrpasssoc : toolgrouptoolassocList) {

				if (!idList.contains(toolgrpasssoc.getToolgroup().getValue())) {
					customToolGroupList.add(getCutomToolGroup(toolgrouptoolassocList, toolgrpasssoc.getToolgroup()));
					idList.add(toolgrpasssoc.getToolgroup().getValue());
				}
				// customToolGroupList.add(e)

			}
			// cutomUserObj.setToolGroupList(customToolGroupList);
		}

		return customToolGroupList;
	}

	public CustomToolGroup getCutomToolGroup(List<Toolgrouptoolassoc> toolgrouptoolassocList, Toolgroup toolGroup) {
		CustomToolGroup obj = new CustomToolGroup();
		List<Tool> toolList = new ArrayList<Tool>();
		for (Toolgrouptoolassoc toolgrpasssoc : toolgrouptoolassocList) {
			if (toolgrpasssoc.getToolgroup().getValue().equals(toolGroup.getValue())) {

				toolList.add(toolgrpasssoc.getTool());
			}
			//System.out.println(toolgrpasssoc.getTool().getName());
		}
		obj.setToolGroup(toolGroup);
		obj.setTools(toolList);
		return obj;
	}

	public String getName(Integer i, Integer j, Map<String, Object> model) {

		//System.out.println("i,j+" + i + "" + j + "" + model);
		String s = i + "" + j + "bucket";

		Toolgroup t = (Toolgroup) model.get(s);
//System.out.println("the name is +++++++++++"+s+"ttt"+t);
if(null==t) {
	return null;
}
		return t.getName();
	}

	public List<Tool> getTools(Integer i, Integer j, Map<String, Object> model) {
		String s = i + "" + j + "tools";
		List<Tool> tools = (List<Tool>) model.get(s);
		//System.out.println("the name is +++++++++++"+s+"ddd"+tools);
		if(null==tools) {
			return null;
		}
		return tools;
	}
	
	public String getImgsrc(Integer i, Integer j, Map<String, Object> model) {

		//System.out.println("i,j+" + i + "" + j + "" + model);
		String s = i + "" + j + "bucket";

		Toolgroup t = (Toolgroup) model.get(s);
//System.out.println("the name is +++++++++++"+s+"ttt"+t);
if(null==t) {
	return null;
}
		return t.getImgSrc();
	}
}
