package com.millenniumit.mx.Portal;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;

import org.apache.log4j.Logger;

import com.google.gson.Gson;
import com.millenniumit.mx.data.nethdsizing.domain.Company;
import com.millenniumit.mx.data.nethdsizing.domain.EquipmentBulk;
import com.millenniumit.mx.data.nethdsizing.domain.EquipmentMaping;
import com.millenniumit.mx.data.nethdsizing.domain.Equipments;
import com.millenniumit.mx.data.nethdsizing.domain.ItemTypes;
import com.millenniumit.mx.data.nethdsizing.domain.Packages;
import com.millenniumit.mx.data.nethdsizing.domain.Project;
import com.millenniumit.mx.data.nethdsizing.domain.ProjectItems;
import com.millenniumit.mx.data.nethdsizing.domain.VersionMap;
import com.millenniumit.mx.data.nethdsizing.service.CompanyService;
import com.millenniumit.mx.data.nethdsizing.service.EquipmentMapingService;
import com.millenniumit.mx.data.nethdsizing.service.EquipmentsBulkService;
import com.millenniumit.mx.data.nethdsizing.service.EquipmentsService;
import com.millenniumit.mx.data.nethdsizing.service.ItemTypesService;
import com.millenniumit.mx.data.nethdsizing.service.PackagesService;
import com.millenniumit.mx.data.nethdsizing.service.ProjectItemsService;
import com.millenniumit.mx.data.nethdsizing.service.ProjectsService;
import com.millenniumit.mx.data.nethdsizing.service.VersionMapService;

public class GridData {
	//private String dateFormat  = "yyyy-MM-dd";
	private Logger logger = Logger.getLogger(GridData.class);
	
	//Services Objects in Service class 
	
	private EquipmentsService equipmentService;

	private EquipmentsBulkService equipmentsBulkService;
	private ItemTypesService itemTypeService;
	private PackagesService packageService;
	private ProjectsService projectService;
	private ProjectItemsService projectItemsService;
	private EquipmentMapingService equipmentMapingService;
	private CompanyService companyService;
	private VersionMapService versionMapService;
	
	public GridData(VersionMapService versionMapService,CompanyService companyService, EquipmentsService equipmentService,EquipmentMapingService equipmentMapingService,EquipmentsBulkService equipmentsBulkService,ItemTypesService itemTypeService,PackagesService packageService,ProjectsService projectService,ProjectItemsService projectItemsService){
		
		
		this.equipmentService =equipmentService; 
		this.equipmentsBulkService=equipmentsBulkService;
		this.itemTypeService = itemTypeService;
		this.packageService =packageService ;
		this.projectService =projectService;
		this.projectItemsService = projectItemsService;
		this.equipmentMapingService=equipmentMapingService;
		this.companyService=companyService;
		this.versionMapService=versionMapService;
	
	}
	public GridData(VersionMapService versionMapService){	
		
		this.versionMapService=versionMapService;
	}
	public GridData(EquipmentsService equipmentService){		
			
			this.equipmentService =equipmentService; 
	}
	public GridData(EquipmentsBulkService equipmentsBulkService){		
		
		this.equipmentsBulkService=equipmentsBulkService;
	}
	public GridData(ItemTypesService itemTypeService){
		
		this.itemTypeService = itemTypeService;	
	}
	public GridData(PackagesService packageService){
	
		this.packageService =packageService ;
	}
	public GridData(ProjectsService projectService){
		
		this.projectService =projectService;
	}
	public GridData(ProjectItemsService projectItemsService){
	
		this.projectItemsService = projectItemsService;
	}
	public GridData(EquipmentMapingService equipmentMapingService){
		
		this.equipmentMapingService=equipmentMapingService;
	}
	public GridData(CompanyService companyService){
		
		this.companyService=companyService;
	}


	
	public void gridLoad(ResourceRequest request, ResourceResponse response,String ServiceType) throws IOException{
		response.setCharacterEncoding("utf-8");
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		//new Gson Object for getting String line to Json 
		Gson gson = new Gson();
		
		//*****equipment*******
		if (ServiceType.equals("Equipment")) {	
			System.out.println("This section is for Parameter equipmentService Grid");
			List<Equipments> lst = equipmentService.getAll();
			boolean bool=true;
			String jsonOb2="[";
			for(int i=0;i<lst.size();i++){
				Equipments obj=lst.get(i);
				try{
					jsonOb2+="{ ItemName: '" + obj.getItemName()+"',Summary:'"+obj.getSummary()+"',Price: '"+obj.getPrice()+"',ITIC_Descrip:'"+obj.getITIC_Descrip()+"',Comments:'"+obj.getTec_Descrip()+"',EOLDate:'"+obj.getEOLDate()+"',itemtypes:'"+obj.getItemType().getTypeName()+"'}";
					//System.out.println(obj.getItemName()+" gdfg "+ obj.getItemType().getTypeName());
				}catch (Exception e) {
					logger.info("Error : " + e.getMessage());
					jsonOb2+="'}";
					
					bool=false;
				}
				if(i<lst.size()-1 && bool){
					jsonOb2+=",";
				}
			}
			///
			
			jsonOb2+="]";
			jsonOb2=linebracker(jsonOb2);
			System.out.println(jsonOb2);
			out.println(jsonOb2);
		}
		//******equipmentBulk********
		else if (ServiceType.equals("EquipmentsBulk")) {	
			System.out.println("This section is for Parameter equipmentBulkService Grid");
			List<EquipmentBulk> lst = equipmentsBulkService.getEquipmentsBulk();
			boolean bool=true;
			String jsonOb2="[";
			for(int i=0;i<lst.size();i++){
				EquipmentBulk obj=lst.get(i);
				try{
					jsonOb2+="{ ItemID : '" + obj.getEquipmentsId().getItemName()+"',PackageID:'"+obj.getPackageID().getPackageName()+"',Quantity: '"+obj.getQuantity()+"',date_logged:'"+obj.getCalendar_logged()+"',date_modified:'"+obj.getCalendar_modified()+"',date_created:'"+obj.getCalendar_created()+"', ID:'"+obj.getId()+"'}";
				}catch (Exception e) {
					logger.info("Error : " + e.getMessage());
					jsonOb2+="'}";
					bool=false;
				}
				if(i<lst.size()-1 && bool){
					jsonOb2+=",";
				}
			}
			
			jsonOb2+="]";
			jsonOb2=linebracker(jsonOb2);
			out.println(jsonOb2);	
		}
		//*****Version Map*******
		else if (ServiceType.equals("VersionMap")) {	
			
			System.out.println("This section is for Parameter VersionMap Grid");
			List<VersionMap> lst =versionMapService.getVersion_Maps();
			boolean bool=true;
			String jsonOb2="[";
			for(int i=0;i<lst.size();i++){
				VersionMap obj=lst.get(i);
				try{
					jsonOb2+="{ OptionID : '" + obj.getOptionID()+"',Version:'"+obj.getVersion()+"',Calendar_logged:'"+obj.getCalendar_logged()+"',Calendar_modified:'"+obj.getCalendar_modified()+"',Calendar_created:'"+obj.getCalendar_created()+"', ID:'"+obj.getID()+"',Project :'"+obj.getProjectID().getProjectName()+"',CompanyName: '"+obj.getProjectID().getCompany().getCompanyName()+"'}";
				}catch (Exception e) {
					logger.info("Error : " + e.getMessage());
					jsonOb2+="'}";
					bool=false;
				}
				if(i<lst.size()-1 && bool){
					jsonOb2+=",";
				}
			}
			
			jsonOb2+="]";
			jsonOb2=linebracker(jsonOb2);
			out.println(jsonOb2);
			
		}
		//*****equipment Map*******
		else if (ServiceType.equals("EquipmentMap")) {	
			
			System.out.println("This section is for Parameter EquipmentMapService Update");
			List<EquipmentMaping> lst =equipmentMapingService.getEquipmentMapings();
			boolean bool=true;
			String jsonOb2="[";
			for(int i=0;i<lst.size();i++){
				EquipmentMaping obj=lst.get(i);
				try{
					jsonOb2+="{ ParentID : '" + obj.getPEquipment().getItemName()+"',ChildID:'"+obj.getCEquipment().getItemName()+"',date_logged:'"+obj.getCalendar_logged()+"',date_modified:'"+obj.getCalendar_modified()+"',date_created:'"+obj.getCalendar_created()+"', ID:'"+obj.getID()+"'}";
				}catch (Exception e) {
					logger.info("Error : " + e.getMessage());
					jsonOb2+="'}";
					bool=false;
				}
				if(i<lst.size()-1 && bool){
					jsonOb2+=",";
				}
			}
			
			jsonOb2+="]";
			jsonOb2=linebracker(jsonOb2);
			out.println(jsonOb2);
			
		}
		//************************Package**************
		else if (ServiceType.equals("Package")) {
			
			System.out.println("This section is for Parameter PackageService Grid");
			List<Packages> lst = packageService.getPackages();
			out.println(gson.toJson(lst));
		}
		
		//********ProjectItems**********
		else if (ServiceType.equals("ProjectItems")) {
			
			System.out.println("This section is for Parameter ProjectItemsService Grid ");
			List<ProjectItems> lst = projectItemsService.getAll();
			boolean bool=true;
			String jsonOb2="[";
			for(int i=0;i<lst.size();i++){
				ProjectItems obj=lst.get(i);
				try{
					jsonOb2+="{ ProjectID: '" + obj.getVersion().getProjectID()+"',PackageType:'"+obj.getPackageType()+"',VersionID: '"+obj.getVersion().getVersion()+"',PackageID:'"+obj.getPackageID().getPackageName()+"',Quantity:'"+obj.getQuantity()+"',Price:'"+obj.getPackageID().getBasePrice()+"',date_logged:'"+obj.getCalendar_logged()+"',date_modified:'"+obj.getCalendar_modified()+"',date_created:'"+obj.getCalendar_created()+"', ID:'"+obj.getId()+"'PackageType :'"+obj.getPackageType()+"}";
				}catch (Exception e) {
					logger.info("Error : " + e.getMessage());
					jsonOb2+="'}";
					bool=false;
				}
				if(i<lst.size()-1 && bool){
					jsonOb2+=",";
				}
			}
			
			jsonOb2+="]";
			System.out.println(jsonOb2);
			jsonOb2=linebracker(jsonOb2);
			out.println(jsonOb2);
		}
		
		//*********Project*********
		else if (ServiceType.equals("Projects")) {
			
			System.out.println("This section is for Parameter ProjectsService Grid");
			
			if(Long.parseLong(request.getParameter("value"))==1){
				
			}
			else{
				List<Project> a= projectService.getProjects();
				System.out.println(a.size());
				String jsonOb2="[";
				boolean bool=true;
				for(int i=0;i<a.size();i++){
					Project obj=a.get(i);
					try{
						jsonOb2+="{ Company: '" +obj.getCompany().getCompanyName()+"',TotalAmount :'"+obj.getAmount()+"',ProjectName :'"+obj.getProjectName()+"',Calendar_created :'"+obj.getCalendar_created()+"',Calendar_modified :'"+obj.getCalendar_modified()+"'}";
					}catch (Exception e) {
						logger.info("Error : " + e.getMessage());
						jsonOb2+="'}";
						bool=false;
					}
					if(i<a.size()-1 && bool){
						jsonOb2+=",";
					}
				}
				jsonOb2+="]";
				System.out.println(jsonOb2);
				jsonOb2=linebracker(jsonOb2);
				out.println(jsonOb2);	
			}
			
			
		}
		else if (ServiceType.equals("Company")) {
			
			System.out.println("This section is for Parameter Company Grid");
			List<Company> a= companyService.getAll();
			System.out.println(a.size());
			String jsonOb2="[";
			boolean bool=true;
			for(int i=0;i<a.size();i++){
				Company obj=a.get(i);
				try{
					jsonOb2+="{ Company: '" +obj.getCompanyName()+"',Calendar_created :'"+obj.getCalendar_created()+"',Calendar_modified :'"+obj.getCalendar_modified()+"'}";
				}catch (Exception e) {
					logger.info("Error : " + e.getMessage());
					jsonOb2+="'}";
					bool=false;
				}
				if(i<a.size()-1 && bool){
					jsonOb2+=",";
				}
			}
			jsonOb2+="]";
			System.out.println(jsonOb2);
			jsonOb2=linebracker(jsonOb2);
			out.println(jsonOb2);
		}
		//**********ItemType***********
		else if (ServiceType.equals("ItemType")) {
			
			System.out.println("This section is for Parameter ItemTypeService Grid");
			List<ItemTypes> lst = itemTypeService.getItemTypes();
			//Equipment  Base Items
			String jsonOb2="[";
			String AccsessLevel="";
			boolean bool=true;
			for(int i=0;i<lst.size();i++){
				try{
					if(lst.get(i).getAccsessLevel()==0){
						AccsessLevel="Base Items";
					}
					else{
						AccsessLevel="Equipment";
					}
					jsonOb2+="{TypeName: '" +lst.get(i).getTypeName() +"',AccsessLevel: '" +AccsessLevel+"',ID :'"+lst.get(i).getID()+"',date_logged:'"+lst.get(i).getCalendar_logged()+"',date_modified:'"+lst.get(i).getCalendar_modified()+"',date_created:'"+lst.get(i).getCalendar_created()+"'}";
				}catch (Exception e) {
					logger.info("Error : " + e.getMessage());
					jsonOb2+="'}";
					bool=false;
				}
				if(i<lst.size()-1 && bool){
					jsonOb2+=",";
				}
			}
			jsonOb2+="]";
			System.out.println(jsonOb2);
			jsonOb2=linebracker(jsonOb2);
			out.println(jsonOb2);
			//out.println(gson.toJson(lst));	
		}
		else if (ServiceType.equals("ItemType")) {
			
			System.out.println("This section is for Parameter ItemTypeService Grid");
			List<ItemTypes> lst = itemTypeService.getItemTypes();
			//Equipment  Base Items
			String jsonOb2="[";
			String AccsessLevel="";
			boolean bool=true;
			for(int i=0;i<lst.size();i++){
				try{
					if(lst.get(i).getAccsessLevel()==0){
						AccsessLevel="Base Items";
					}
					else{
						AccsessLevel="Equipment";
					}
					jsonOb2+="{TypeName: '" +lst.get(i).getTypeName() +"',AccsessLevel: '" +AccsessLevel+"',ID :'"+lst.get(i).getID()+"',date_logged:'"+lst.get(i).getCalendar_logged()+"',date_modified:'"+lst.get(i).getCalendar_modified()+"',date_created:'"+lst.get(i).getCalendar_created()+"'}";
				}catch (Exception e) {
					logger.info("Error : " + e.getMessage());
					jsonOb2+="'}";
					bool=false;
				}
				if(i<lst.size()-1 && bool){
					jsonOb2+=",";
				}
			}
			jsonOb2+="]";
			System.out.println(jsonOb2);
			jsonOb2=linebracker(jsonOb2);
			out.println(jsonOb2);
			//out.println(gson.toJson(lst));	
		}
		//**********Nothing***********
		else {
			
			System.out.println("This section is for Nothing but Grid");
			out.println("");
		}
	}
	
	
	private String linebracker(String jsonOb2){
		/*jsonOb2=jsonOb2.replaceAll("\\n", "|");
		jsonOb2=jsonOb2.replaceAll("\r", "");
		jsonOb2=jsonOb2.replaceAll("\n", "|");*/
		return jsonOb2;
	}
	
	
}
