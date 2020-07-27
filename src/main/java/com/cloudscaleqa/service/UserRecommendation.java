package com.cloudscaleqa.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cloudscaleqa.model.CustomToolGroup;
import com.cloudscaleqa.model.CustomUser;
import com.cloudscaleqa.model.Tool;
import com.cloudscaleqa.model.Toolgroup;
import com.cloudscaleqa.model.Userrecommendation;
import com.cloudscaleqa.repository.UserRecommendationRepo;

@Service
public class UserRecommendation {

	
	@Autowired
	UserRecommendationRepo userRecommnedationRepo;
	
	
	public CustomUser getRecommnededList(String email){
		List<Userrecommendation> userRecommendedList = new ArrayList<Userrecommendation>();
		 userRecommendedList=userRecommnedationRepo.findByUserEmail(email);
		 List<CustomToolGroup> customToolGroupList = new ArrayList<CustomToolGroup>();
		 CustomUser cutomUserObj=new CustomUser();
		 List<String> idList = new ArrayList<String>();
		 if(!userRecommendedList.isEmpty()) {
		
			 
			
			 for(Userrecommendation user: userRecommendedList) {
				 if(null==cutomUserObj.getUser()) {
				 cutomUserObj.setUser(user.getUser());
			       }
				 if(!idList.contains(user.getToolgroup().getValue())) {
				 customToolGroupList.add(getCutomToolGroup(userRecommendedList,user.getToolgroup()));
				 idList.add(user.getToolgroup().getValue());
				 }
				 //customToolGroupList.add(e)
				
			 }
			 cutomUserObj.setToolGroupList(customToolGroupList);
		 }
		 
		return cutomUserObj;
	}
	
	public CustomToolGroup getCutomToolGroup(List<Userrecommendation> userRecommendedList ,Toolgroup toolGroup) {
		CustomToolGroup obj= new CustomToolGroup();
		 List<Tool> toolList = new ArrayList<Tool>();
		 for(Userrecommendation user: userRecommendedList) {
			if(user.getToolgroup().getValue().equals(toolGroup.getValue())) {
				
				toolList.add(user.getTool());
			}
			 //System.out.println(user.getTool().getName());
		 }
		 obj.setToolGroup(toolGroup);
		 obj.setTools(toolList);
		 return obj;
	}
}
