package com.millenniumit.mx.Portal;


import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.millenniumit.mx.data.nethdsizing.domain.Packages;
import com.millenniumit.mx.data.nethdsizing.domain.Project;
import com.millenniumit.mx.data.nethdsizing.domain.ProjectItems;
import com.millenniumit.mx.data.nethdsizing.domain.VersionMap;
import com.millenniumit.mx.data.nethdsizing.service.PackagesService;
import com.millenniumit.mx.data.nethdsizing.service.ProjectItemsService;
import com.millenniumit.mx.data.nethdsizing.service.VersionMapService;
/**
 * 
 * @author Raminda
 *
 */
public class DigramAnalize {
	private Logger logger = Logger.getLogger(DigramAnalize.class);
	private PackagesService packageService;
	private ProjectItemsService projectItemsService;
	private VersionMapService versionMapService;
	private int ID=0;
	private JSONArray sitesArray ;
	private JSONArray summaryArray;
	private VersionMap obj ;
	/**
	 * 
	 * @param projectItemsService
	 * @param packageService
	 * @param projectService
	 */
	public DigramAnalize(ProjectItemsService projectItemsService,VersionMapService versionMapService,PackagesService packageService) {
		this.projectItemsService = projectItemsService;
		this.versionMapService = versionMapService;	
		this.packageService=packageService;
	}
	/**
	 * 
	 * @param projects
	 * @param Option
	 * @param Version
	 * @param jsonobj
	 * @param site
	 * @param summary
	 * @return
	 * @throws Exception 
	 */
	public int Analize(Project projects,String Option, String Version,JSONObject jsonobj,String sites,String summary){
		
		try {
			this.sitesArray = new JSONArray(sites);
		} catch (JSONException e) {
			logger.info("Error : " + e.getMessage());
		}
		try {
			this.summaryArray = new JSONArray(summary);
		} catch (JSONException e) {
			logger.info("Error : " + e.getMessage());
		}
		
		logger.info("Site no : "+sitesArray.length());
		for(int i=0;i<sitesArray.length()-1;i++){
			logger.info("Site id "+i);
			String Site = null;
			try {
				Site = sitesArray.getJSONObject(i).get("Site").toString();
			} catch (JSONException e) {
				logger.info("Error : " + e.getMessage());
			}
			String SiteID = null;
			try {
				SiteID = sitesArray.getJSONObject(i).get("SiteID").toString();
			} catch (JSONException e) {
				logger.info("Error : " + e.getMessage());
			}
			this.obj =versionMapService.getAll(projects,Option,Version,Site);
			if(obj==null){
				logger.info("saving not Duplicate ");
				obj=new VersionMap();
				obj.setVersion(Version);
				obj.setSiteID(Site);
				obj.setProjectID(projects);
				obj.setOptionID(Option);
				try{
					ID=versionMapService.save(obj);
				}
				catch (Exception e) {
					logger.info("Error : " + e.getMessage());
				}	
				logger.info("ID : " +ID);
			}
			Hanler(Site,SiteID);
			logger.info("end site");
		}
		return ID;
	}
	/**
	 * 
	 * @param Ptype
	 * @return
	 * @throws JSONException 
	 */
	private void Hanler(String Ptype ,String  ID){
		
		
		String pacString="";
		String pacStringID="";
		String pacStringAn="";
		int id=0;
		
		logger.info("Figuer lenth : "+summaryArray.length()+" call by "+Ptype);
		for(int j=0;j<summaryArray.length();j++){
			logger.info("Summary Array : "+j+" call by "+Ptype);
			try {
				if((summaryArray.getJSONObject(j).get("Ctype").toString().equals(Ptype )&& summaryArray.getJSONObject(j).get("Cid").toString().equals(ID))){
					pacString=	summaryArray.getJSONObject(j).get("Ptype").toString();
					pacStringID=summaryArray.getJSONObject(j).get("Pid").toString();
					pacStringAn=summaryArray.getJSONObject(j).get("Pannot").toString();
					String Type=Typehanler(pacString);
					logger.info("Ptype " +Type);
					id=crateProjectItems(pacStringAn,obj,Type,pacString);
					logger.info("OK");
					summaryArray.getJSONObject(j).remove("Ctype");
					summaryArray.getJSONObject(j).remove("Cid");
					summaryArray.getJSONObject(j).remove("Ptype");
					summaryArray.getJSONObject(j).remove("Pid");
					logger.info(id+" pass "+pacString);
					if(pacString.equals("firewall") || pacString.equals("cloud") || pacString.equals("Site") ){}
					else
					Hanler(pacString ,pacStringID);
				}
				else if((summaryArray.getJSONObject(j).get("Ptype").toString().equals(Ptype )&& summaryArray.getJSONObject(j).get("Pid").toString().equals(ID) )){
					pacString=	summaryArray.getJSONObject(j).get("Ctype").toString();
					pacStringID=summaryArray.getJSONObject(j).get("Cid").toString();
					pacStringAn=summaryArray.getJSONObject(j).get("Cannot").toString();
					String Type=Typehanler(pacString);
					logger.info("Ctype " +Type);
					id=crateProjectItems(pacStringAn,obj,Type,pacString);
					logger.info("OK");
					summaryArray.getJSONObject(j).remove("Ctype");
					summaryArray.getJSONObject(j).remove("Cid");
					summaryArray.getJSONObject(j).remove("Ptype");
					summaryArray.getJSONObject(j).remove("Pid");
					logger.info(id +" pass "+ pacString);
					if(pacString.equals("firewall") || pacString.equals("cloud") || pacString.equals("Site") ){}
					else
					Hanler(pacString ,pacStringID);
				}
				
				else{
					logger.info("Not save yet "+summaryArray.getJSONObject(j).get("Ctype").toString()+" "+summaryArray.getJSONObject(j).get("Cid").toString());
					logger.info("Not save yet "+summaryArray.getJSONObject(j).get("Ptype").toString()+" "+summaryArray.getJSONObject(j).get("Pid").toString());
				}
			} catch (JSONException e) {
				logger.info("Error : " + e.getMessage());
			}	
		}	
	}
	/**
	 * 
	 * @param pacString
	 * @param obj
	 * @param Type
	 * @return
	 */
	private int crateProjectItems(String pacString,VersionMap obj,String Type,String PacString){
		logger.info(pacString);
		int id=0;
		if(PacString.equals("Cloud")){
			
		} else if(PacString.equals("firewall")){
			
		} else if(PacString.equals("Site")){
			
		}else {
			Packages packages=packageService.getPackages(pacString);
			ProjectItems projectItems=projectItemsService.get(obj, packages);
			if( projectItems==null){
				projectItems=new ProjectItems();
				projectItems.setVersion(obj);
				projectItems.setPackageType(Type);
				projectItems.setQuantity(1);
				projectItems.setPackageID(packages);
			
				try{
					id=projectItemsService.save(projectItems);
				}
				catch (Exception e) {
					logger.info("error "+ e.getMessage());
					id=0;
				}
			}
			else{
				projectItems.setQuantity(projectItems.getQuantity()+1);
				logger.info(projectItems.getPackageID().getPackageName());
				try{
					projectItemsService.update(projectItems);
					id=1;
				}
				catch (Exception e) {
					logger.info("error "+ e.getMessage());
					id=0;
				}
			}
		}
		return id;
	}
	/**
	 * 
	 * @param PacName
	 * @return
	 */
	private String Typehanler(String PacName){
		String type="";
		if(PacName.equals("Server") || PacName.equals("PC")){
			type="Backend machines";
		}
		else if(PacName.equals("Array")|| PacName.equals("Tape Library") || PacName.equals("Port" )){
			type="Accessories";
		}
		else if(PacName.equals("Switch") || PacName.equals("Catalyst") || PacName.equals("firewall") || PacName.equals("Router") ){
			type="Accessories";
		}
		else{
			logger.info(PacName);
			type="Third party Eq";
		}
		/*  {"PackageType":"Backend machines"},
		  	{"PackageType":"Accessories"},
        	{"PackageType":"Network equipment"},
        	{"PackageType":"Third party software"},
        	****
        addLibraryIcon('firewall');
		addLibraryIcon('Array');
		addLibraryIcon('Catalyst');
		addLibraryIcon('Router');
		addLibraryIcon('PC');
		addLibraryIcon('Server');
		addLibraryIcon('Switch');
		addLibraryIcon('Tape Library');
		addLibraryIcon('cloud');
		addLibraryIcon('Site');
		addLibraryIcon('SAN');
        */
		return type;
	}
}
