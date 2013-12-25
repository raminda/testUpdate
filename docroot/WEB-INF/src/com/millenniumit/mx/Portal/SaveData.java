package com.millenniumit.mx.Portal;


import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.StringTokenizer;

import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

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

public class SaveData {
	
	private String dateFormat  = "yyyy-MM-dd";
	private Logger logger = Logger.getLogger(SaveData.class);
	private JsonCreator jsonCreator=new JsonCreator();
	
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
	
	public SaveData(VersionMapService versionMapService,CompanyService companyService,EquipmentsService equipmentService,EquipmentMapingService equipmentMapingService,EquipmentsBulkService equipmentsBulkService,ItemTypesService itemTypeService,PackagesService packageService,ProjectsService projectService,ProjectItemsService projectItemsService){
		
		
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
	
	public SaveData(VersionMapService versionMapService){	
		
		this.versionMapService=versionMapService;
	}
	public SaveData(VersionMapService versionMapService,ProjectItemsService projectItemsService,ProjectsService projectService,CompanyService companyService,PackagesService packageService){	
		this.companyService=companyService;
		this.projectItemsService = projectItemsService;
		this.projectService =projectService;
		this.versionMapService = versionMapService;	
		this.packageService=packageService;
	}
	public SaveData(CompanyService companyService){	
		
		this.companyService=companyService;
	}
	public SaveData(EquipmentsService equipmentService,EquipmentMapingService equipmentMapingService,ItemTypesService itemTypeService){		
		
		this.equipmentService =equipmentService;
		this.equipmentMapingService =equipmentMapingService;
		this.itemTypeService = itemTypeService;	
	}
	public SaveData(EquipmentsBulkService equipmentsBulkService,PackagesService packageService,EquipmentsService equipmentService){		
		
		this.equipmentsBulkService=equipmentsBulkService;
		this.packageService =packageService ;
		this.equipmentService=equipmentService;
	}
	public SaveData(ItemTypesService itemTypeService){
		
		this.itemTypeService = itemTypeService;	
	}
	public SaveData(PackagesService packageService,EquipmentsBulkService equipmentsBulkService,EquipmentsService equipmentService){
	
		this.packageService =packageService ;
		this.equipmentsBulkService=equipmentsBulkService;
		this.equipmentService=equipmentService;
	}
	public SaveData(ProjectsService projectService,CompanyService companyService){
		this.companyService=companyService;
		this.projectService =projectService;
	}
	public SaveData(ProjectItemsService projectItemsService, ProjectsService projectService , PackagesService  packageService){
	
		this.projectItemsService = projectItemsService;
		this.packageService =packageService ;
		this.projectService =projectService;
	}
	public SaveData(EquipmentMapingService equipmentMapingService){
		
		this.equipmentMapingService=equipmentMapingService;
	}

	public void NewData(ResourceRequest request, ResourceResponse response,String ServiceType) throws NumberFormatException, JSONException, ParseException, IOException{
		JSONObject jsonobj=jsonCreator.JsonCreat(request, response,ServiceType);
		response.setCharacterEncoding("utf-8");
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		int ID = 0 ;
		System.out.println(jsonobj);
		
		//*****Equipment*******
		if (ServiceType.equals("Equipment")) {
			
			if(equipmentService.getEquipments(jsonobj.getString("ItemName"))==null){
				Equipments NewEquipment=new Equipments();
				try {
					//*****Saving To Object******
					NewEquipment.setItemName(jsonobj.getString("ItemName"));
					NewEquipment.setItemType(itemTypeService.get(jsonobj.getString("itemtypes")));
					NewEquipment.setSummary(jsonobj.getString("Summary"));
					NewEquipment.setTec_Descrip(jsonobj.getString("Comments"));
					NewEquipment.setITIC_Descrip(jsonobj.getString("ITIC_Descrip"));
					NewEquipment.setPrice(Integer.parseInt(jsonobj.getString("Price"),10));
					Date date = new SimpleDateFormat(dateFormat).parse(jsonobj.getString("EOLDate"));
					try{
						NewEquipment.setEOLDate(date);
					}
					catch (Exception e) {
						 logger.info("Error : " + e.getMessage());
					}
							/**********************************/
				} 
				catch (JSONException e) {logger.info("Error : " + e.getMessage());}
				
				//save data
				try {
					ID = equipmentService.save(NewEquipment);
					
					out.println("[{'data':'Succses'}]");
				}catch (Exception e) {
					logger.info("Error : " + e.getMessage());
					ID=  0;
					out.println("[{'data':'" + e.getMessage()+"'}]");
				}
			}
			else{
				logger.info("Error : " + "Duplicate data entry (Same Equipment name in database )");
			}
			
			/* Saving Equipment Mappings    */
			
			Integer CID=1;
			try {
				CID=equipmentService.getEquipments(jsonobj.getString("ItemName")).getID();
				
			} catch (Exception e) {
				CID=0;
				logger.info("Error : " + e.getMessage());
			}
			String Items = null;
			//
			try {
				if(request.getParameter("ID")!="base"){
					Items = request.getParameter("ID");
				}
				else{
					CID=1;
				}
			} catch (Exception e) {
				logger.info("Error : " + e.getMessage());
			}
			
			System.out.println(Items);
			System.out.println("This section is for Parameter EquipmentMapService Update");
			StringTokenizer st = new StringTokenizer(Items, ",");
			
			while(st.hasMoreTokens()) { 
				String key = st.nextToken(); 
				
				EquipmentMaping equipmentMaping=new EquipmentMaping();
				//*************************************************
				logger.info("hi : 1" + key+"1 " + CID+" ");
				equipmentMaping.setPEquipment(equipmentService.getEquipments(key));
				equipmentMaping.setCEquipment(equipmentService.getEquipments(CID));
				//save data
				try {
					ID=equipmentMapingService.save(equipmentMaping);	
					out.println("[{'data':'Succses'}]");
				}catch (Exception e) {
					logger.info("Error : " + e.getMessage());
					ID=  0;
					out.println("[{'data':'" + e.getMessage()+"'}]");
				}
				
				//
			}
		}
		
		//*****equipment Map*******
		else if (ServiceType.equals("EquipmentMap")) {	
		//base
			Integer CID=1;
			try {
				
				CID=equipmentService.getEquipments(jsonobj.getString("ItemName")).getID();
				
			} catch (Exception e) {
				logger.info("Error : " + e.getMessage());
			}
			
			String Items = null;
			//
			try {
				if(request.getParameter("ID")!="base"){
					Items = request.getParameter("ID");
				}
				else{
					CID=  1;
				}
			} catch (Exception e) {
				logger.info("Error : " + e.getMessage());
			}
			
			System.out.println(Items);
			System.out.println("This section is for Parameter EquipmentMapService Update");
			StringTokenizer st = new StringTokenizer(Items, ",");
			
			while(st.hasMoreTokens()) { 
				String key = st.nextToken(); 
				
				EquipmentMaping equipmentMaping=new EquipmentMaping();
				//*************************************************
				logger.info("hi : " + key+" " + CID+" ");
				equipmentMaping.setPEquipment(equipmentService.getEquipments(key));
				equipmentMaping.setCEquipment(equipmentService.getEquipments(CID));
				//save data
				try {
					ID=equipmentMapingService.save(equipmentMaping);	
					out.println("[{'data':'Succses'}]");
				}catch (Exception e) {
					logger.info("Error : " + e.getMessage());
					ID=  0;
					out.println("[{'data':'" + e.getMessage()+"'}]");
				}
			}
		}
		
		//******EquipmentBulk********
		else if (ServiceType.equals("EquipmentsBulk")) {
			if(equipmentsBulkService.EquipmentsBulkget(packageService.getPackages(jsonobj.getString("PackageID")),equipmentService.getEquipments(jsonobj.getString("ItemID"))) == null){
				EquipmentBulk equipmentsBulk=new EquipmentBulk();
				Packages packages=null;
				try{
					packages =packageService.getPackages(jsonobj.getString("PackageID"));
					equipmentsBulk.setPackageID(packages);
					Equipments equipments=equipmentService.getEquipments(jsonobj.getString("ItemID"));
					equipmentsBulk.setEquipmentsId(equipments);
					equipmentsBulk.setQuantity(Integer.parseInt(jsonobj.getString("Quantity"),10));
					//equipmentsBulk.setPrice(equipments.getPrice()*equipmentsBulk.getQuantity());
					
					
				}
				catch (JSONException e) {logger.info("Error : " + e.getMessage());}
				//save data
				try {
					ID =equipmentsBulkService.save( equipmentsBulk);
					List<EquipmentBulk> equipmentmaping=equipmentsBulkService.getPackageBulk(packages);
					//int prices=  0;
					for(int i=0;i<equipmentmaping.size();i++){
						//prices+=equipmentmaping.get(i).getPrice();
						
					}
					//packages.setPrice(prices);
					packageService.update(packages);
					out.println("[{'data':'Succses'}]");
				}catch (Exception e) {
					logger.info("Error : " + e.getMessage());
					ID=  0;
					out.println("[{'data':'" + e.getMessage()+"'}]");
				}
			}
			else{
				
				EquipmentBulk equipmentsBulk=equipmentsBulkService.EquipmentsBulkget(packageService.getPackages(jsonobj.getString("PackageID")), equipmentService.getEquipments(jsonobj.getString("ItemID")));
				equipmentsBulk.setQuantity(equipmentsBulk.getQuantity()+(Integer.parseInt(jsonobj.getString("Quantity"),10)));
				//equipmentsBulk.setPrice((Integer.parseInt(jsonobj.getString("Price"),10)*equipmentsBulk.getQuantity()));
				
				equipmentsBulkService.update(equipmentsBulk);
			}
		}
		//************************Package**************
		else if (ServiceType.equals("Package")) {
			
			String Bulk=request.getParameter("ID");
			if(packageService.getPackages(jsonobj.getString("PackageName"))==null){
				Packages NewPackage=new Packages();
				try {
					//*****Saving To Object******
					NewPackage.setPackageName(jsonobj.getString("PackageName"));
					NewPackage.setSummary(jsonobj.getString("Summery"));
					NewPackage.setBasePrice(Long.parseLong(jsonobj.getString("BasePrice")));
					NewPackage.setComment(jsonobj.getString("Comment"));
				} 
				catch (JSONException e) {
					logger.info("Error : " + e.getMessage());
					}
				Date date = new SimpleDateFormat(dateFormat).parse(jsonobj.getString("EOLDate"));
				/**********************************/
				try{
					NewPackage.setEOLDate(date);
				}
				catch (Exception e) {
					 logger.info("Error : " + e.getMessage());
				}
				//save data
				try {
					ID = packageService.save( NewPackage);		
					out.println("[{'data':'Succses'}]");
				}catch (Exception e) {
					logger.info("Error : " + e.getMessage());
					ID=  0;
					out.println("[{'data':'" + e.getMessage()+"'}]");
				}
			
		
				/****************************************************************************************************/
				/****************************************************************************************************/
				/****************************************************************************************************/
				/****************************************************************************************************/
				/****************************************************************************************************/
				/****************************************************************************************************/
				
				logger.info("Json string retrived : " + Bulk);
				
				JSONArray jsonArray = null;
				//Create Json Array
				try {
					 jsonArray = new JSONArray(Bulk);
				}catch (JSONException e) {
					logger.info("Error JSON Array : " + e.getMessage());
				}
				logger.info("JSON Array lenth: +"+jsonArray.length());
				try {
					if(jsonArray.length()>1)
						jsonobj = (JSONObject)jsonArray.get(0);
					else
						jsonobj = (JSONObject)jsonArray.get(jsonArray.length()-1);
				} catch (JSONException e) {
					logger.info("Error JSON Object: " + e.getMessage());
				}
				
				if(equipmentsBulkService.EquipmentsBulkget(packageService.getPackages(jsonobj.getString("PackageID")),equipmentService.getEquipments(jsonobj.getString("ItemID"))) == null){
					EquipmentBulk equipmentsBulk=new EquipmentBulk();
					Packages packages=null;
					try{
						packages =packageService.getPackages(jsonobj.getString("PackageID"));
						equipmentsBulk.setPackageID(packages);
						Equipments equipments=equipmentService.getEquipments(jsonobj.getString("ItemID"));
						equipmentsBulk.setEquipmentsId(equipments);
						equipmentsBulk.setQuantity(Integer.parseInt(jsonobj.getString("Quantity"),10));
						//equipmentsBulk.setPrice(equipments.getPrice()*equipmentsBulk.getQuantity());
						
						
					}
					catch (JSONException e) {logger.info("Error : " + e.getMessage());}
					//save data
					try {
						ID =equipmentsBulkService.save( equipmentsBulk);
						List<EquipmentBulk> equipmentmaping=equipmentsBulkService.getPackageBulk(packages);
						//Long prices=  (long) 0;
						for(int i=0;i<equipmentmaping.size();i++){
							//prices+=equipmentmaping.get(i).getPrice();
							
						}
						//packages.setPrice(prices);
						packageService.update(packages);
						out.println("[{'data':'Succses'}]");
					}catch (Exception e) {
						logger.info("Error : " + e.getMessage());
						ID=  0;
						out.println("[{'data':'" + e.getMessage()+"'}]");
					}
				}
				else{
					//Equipments equipments=equipmentService.getEquipments(jsonobj.getString("ItemID"));
					EquipmentBulk equipmentsBulk=equipmentsBulkService.EquipmentsBulkget(packageService.getPackagess(Integer.parseInt(jsonobj.getString("PackageID"))), equipmentService.getEquipments(jsonobj.getString("ItemID")));
					equipmentsBulk.setQuantity(equipmentsBulk.getQuantity()+(Integer.parseInt(jsonobj.getString("Quantity"),10)));
					//equipmentsBulk.setPrice(equipments.getPrice()*equipmentsBulk.getQuantity());
					try{
						equipmentsBulkService.update(equipmentsBulk);
						out.println("[{'data':'Succses'}]");
					}catch (Exception e) {
						logger.info("Error : " + e.getMessage());
						ID=  0;
						out.println("[{'data':'" + e.getMessage()+"'}]");
					}
				}
			
			}
			else{
				logger.info("Error : " + "Duplicate data entry (Same Package name in database )");
			}
		}
		//********ProjectItems**********
		else if (ServiceType.equals("ProjectItemsStore")) {
			DigramAnalize digramAnalize=new DigramAnalize(projectItemsService, versionMapService, packageService);
			logger.info("ProjectItemsStore ");
			if(request.getParameter("ID2").equals("DD")){
				logger.info("DD place ");
				String projectID=request.getParameter("Project");
				String Option=request.getParameter("Option");//   
				String Version=request.getParameter("Version");
				
				String summary= request.getParameter("ID1");
				String Sites=request.getParameter("ID3");
				
				Project projects= projectService.getProjects(projectID);
				String FilePath=projects.getCompany().getCompanyName()+"/"+projectID+"/"+Option+"/"+Version;
				FilePath=FilePath.replaceAll("\\s","");
				String Coverpathstring="C:/project/liferay-portal/tomcat-7.0.27/webapps/test-portlet/netHD/Excel/";
				Coverpathstring=Coverpathstring.replaceAll("\\s", "");
				String Drctry=Coverpathstring+"/"+FilePath;
				String fileName = projects.getCompany().getCompanyName()+ "_"+ projectID +"_"+Option+"_"+Version+".json";
				fileName=fileName.replaceAll("\\s","");
				new File(Drctry).mkdirs();
				try {
					FileWriter file = new FileWriter(Drctry+"/"+fileName);
					file.write(jsonobj.toString());
					file.flush();
					file.close();
			 
				} catch (IOException e) {
					logger.info(e.getMessage());
				}
				
				logger.info(request.getParameter("ID1"));//all summary
				logger.info(request.getParameter("ID3"));//site
				
				logger.info(jsonobj.toString());
				try {
					digramAnalize.Analize(projects,Option,Version,jsonobj,Sites,summary);
				} catch (Exception e) {
					logger.info(e.getMessage());
				}
				
			}
			else{	
				Project projects=projectService.getProjects(request.getParameter("ID1"));
				Packages packages=packageService.getPackagess(Integer.parseInt(jsonobj.getString("PackageName")));
				VersionMap obj =versionMapService.getAll(projects,request.getParameter("ID"),request.getParameter("ID2"),request.getParameter("ID3"));
				if(obj==null){
					logger.info("saving not Duplicate ");
					obj=new VersionMap();
					obj.setVersion(request.getParameter("ID2"));
					obj.setSiteID(request.getParameter("ID3"));
					obj.setProjectID(projects);
					obj.setOptionID(request.getParameter("ID"));
					try{
						ID=versionMapService.save(obj);
					}
					catch (Exception e) {
						logger.info("Error : " + e.getMessage());
					}	
					logger.info("ID : " +ID);
				}
				ProjectItems projectItems=projectItemsService.get(obj, packages);
				if( projectItems==null){
					projectItems=new ProjectItems();
					projectItems.setVersion(obj);
					projectItems.setPackageType(jsonobj.getString("PackageType"));
					projectItems.setQuantity(Integer.parseInt(jsonobj.getString("Quantity")));
					projectItems.setPackageID(packages);
					projectItems.setPcakageUsege(jsonobj.getString("Quantity"));
					
					try{
						ID=projectItemsService.save(projectItems);
						out.println("[{'data':'Succses'}]");
					}catch (Exception e) {
						logger.info("Error : " + e.getMessage());
						ID=  0;
						out.println("[{'data':'" + e.getMessage()+"'}]");
					}
				}
				else{
					projectItems.setQuantity(projectItems.getQuantity()+Integer.parseInt(jsonobj.getString("Quantity")));
					logger.info(projectItems.getPackageID().getPackageName());
					try{
						projectItemsService.update(projectItems);
						out.println("[{'data':'Project Items Updated'}]");
					}catch (Exception e) {
						logger.info("Error : " + e.getMessage());
						ID=  0;
						out.println("[{'data':'" + e.getMessage()+"'}]");
					}
				}
			}
		}
		//*********Project*********
		
		else if (ServiceType.equals("Projects")) {
			if(projectService.getProjects(jsonobj.getString("ProjectName")) == null){
				Project projects =new Project();
				logger.info("saving Duplicate Update :"+jsonobj.getString("Company"));
				projects.setCompany(companyService.get((jsonobj.getString("Company"))));
				projects.setProjectName(jsonobj.getString("ProjectName"));
				
				try {
					ID =projectService.save(projects);		
					out.println("[{'data':'Succses'}]");
				}catch (Exception e) {
					logger.info("Error : " + e.getMessage());
					ID=  0;
					out.println("[{'data':'" + e.getMessage()+"'}]");
				}
			}
			else{
				logger.info("Error : " + "Duplicate data entry (Same Project name in database )");
			}
		}
		else if (ServiceType.equals("Company")) {
			if(companyService.get(jsonobj.getString("Company")) == null){
				Company company =new Company();
				logger.info("saving Duplicate Update :"+jsonobj.getString("Company"));
				company.setCompanyName(jsonobj.getString("Company"));
				
				try {
					ID =companyService.save(company);		
					out.println("[{'data':'Succses'}]");
				}catch (Exception e) {
					logger.info("Error : " + e.getMessage());
					ID=  0;
					out.println("[{'data':'" + e.getMessage()+"'}]");
				}
			}
			else{
				logger.info("Error : " + "Duplicate data entry (Same Company name in database )");
			}
		}
		//**********ItemType***********
		else if (ServiceType.equals("ItemType")) {
			ItemTypes NewitemType=new ItemTypes();
			try {
				
				//*****Saving To Object******
				NewitemType.setTypeName(jsonobj.getString("TypeName"));
				NewitemType.setAccsessLevel(Integer.parseInt((jsonobj.getString("AccsessLevel"))));
			} 
			catch (JSONException e) {logger.info("Error : " + e.getMessage());}
			//save data
			try {
				ID =itemTypeService.save(NewitemType);	
				out.println("[{'data':'Succses'}]");
			}catch (Exception e) {
				logger.info("Error : " + e.getMessage());
				ID=  0;
				out.println("[{'data':'" + e.getMessage()+"'}]");
			}
		}
		//**********Nothing***********
		else {
			/****/
			System.out.println("This section is for Nothing to Save");
		}
		logger.info("new ID - " + ID);
	}
}
