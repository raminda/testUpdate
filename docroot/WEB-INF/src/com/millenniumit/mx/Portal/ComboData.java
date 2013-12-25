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

@SuppressWarnings("unused")
public class ComboData {
	
	private String dateFormat  = "yyyy-MM-dd";
	private Logger logger = Logger.getLogger(ComboData.class);
	
	//Services Objects in Service class 
	
	private EquipmentsService equipmentService;

	private EquipmentsBulkService equipmentsBulkService;
	private ItemTypesService ItemTypesService;
	private PackagesService packageService;
	private ProjectsService projectService;
	private ProjectItemsService projectItemsService;
	private EquipmentMapingService equipmentMapingService;
	private CompanyService companyService;
	private VersionMapService versionMapService;
	
	public ComboData(VersionMapService versionMapService,CompanyService companyService,EquipmentsService equipmentService,EquipmentMapingService equipmentMapingService,EquipmentsBulkService equipmentsBulkService,ItemTypesService ItemTypesService,PackagesService packageService,ProjectsService projectService,ProjectItemsService projectItemsService){
		
		
		
		this.equipmentService =equipmentService; 
		this.equipmentsBulkService=equipmentsBulkService;
		this.ItemTypesService = ItemTypesService;
		this.packageService =packageService ;
		this.projectService =projectService;
		this.projectItemsService = projectItemsService;
		this.equipmentMapingService=equipmentMapingService;
		this.companyService=companyService;
		this.versionMapService=versionMapService;
	}
	
	public ComboData(EquipmentsService equipmentService,EquipmentMapingService equipmentMapingService ,ItemTypesService ItemTypesService){		
			
		this.equipmentService =equipmentService; 
		this.ItemTypesService = ItemTypesService;	
		this.equipmentMapingService=equipmentMapingService;
	}
	public ComboData(EquipmentsBulkService equipmentsBulkService,PackagesService packageService){		
		
		this.equipmentsBulkService=equipmentsBulkService;
		this.packageService =packageService ;
	}
	public ComboData(ProjectsService projectService,VersionMapService versionMapService){
		this.projectService=projectService;
		this.versionMapService = versionMapService;	
	}
	public ComboData(ItemTypesService ItemTypesService){
		
		this.ItemTypesService = ItemTypesService;	
	}
	public ComboData(PackagesService packageService){
	
		this.packageService =packageService ;
	}
	public ComboData(ProjectsService projectService,CompanyService companyService){
		this.companyService =companyService; 
		this.projectService =projectService;
	}
	public ComboData(ProjectItemsService projectItemsService,ProjectsService projectService){
		this.projectItemsService = projectItemsService;
		this.projectService =projectService;
	}
	public ComboData(EquipmentMapingService equipmentMapingService){	
		this.equipmentMapingService=equipmentMapingService;
	}
	
	public ComboData(CompanyService companyServicee){	
		this.companyService=companyServicee;
	}
	public ComboData(VersionMapService versionMapService,ProjectItemsService projectItemsService,ProjectsService projectService,CompanyService companyService,PackagesService packageService){	
		this.companyService=companyService;
		this.projectItemsService = projectItemsService;
		this.projectService =projectService;
		this.versionMapService = versionMapService;	
	}
	
	@SuppressWarnings("null")
	public void Combo(ResourceRequest request, ResourceResponse response,String ServiceType) throws IOException{
		PrintWriter out = response.getWriter();
		//new Gson Object for getting String line to Json 
		Gson gson = new Gson();
		
		//*****equipment*******
		 if (ServiceType.equals("Equipment")) {	
			String jsonOb2="[";
			
			if(Long.parseLong(request.getParameter("value"))==1){
				 System.out.println("This section is for Parameter Equipment cmbo value is "+ request.getParameter("ID"));
				 // + 
				int value= ItemTypesService.get(request.getParameter("ID")).getAccsessLevel();
				System.out.println(request.getParameter("ID")+" "+value);
				 boolean bool=true;
				if(value==1){
					List<Equipments> lst = equipmentService.getBase(0);
					//System.out.println(lst.get(0).getItemName());
						for(int i=0;i<lst.size();i++){
							//Equipments obj=lst.get(i);
							try{
								jsonOb2+="{ItemName: '" + lst.get(i).getItemName()+"'}";
							}catch (Exception e) {
								logger.info("Error : " + e.getMessage());
								jsonOb2+="'}";
								//bool=false;
							}
							System.out.println(jsonOb2);
							if(i<lst.size()-1 && bool){
								jsonOb2+=",";
							}
						}
						
						jsonOb2+="]";
				}
				else{
					value=3;
					jsonOb2+="{ItemName: 'This is a base Item'}]";
				}
			}
			else if(Long.parseLong(request.getParameter("value"))==2){
				 System.out.println("This section is for Parameter Equipment cmbo value is "+ request.getParameter("ID"));

				//
				 boolean bool=true;
				
					List<Equipments> lst = equipmentService.getBase(0);
						for(int i=0;i<lst.size();i++){
							//Equipments obj=lst.get(i);
							try{
								jsonOb2+="{ItemName: '" + lst.get(i).getItemName()+"'}";
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
				}
			else if(Long.parseLong(request.getParameter("value"))==3){
				 System.out.println("This section is for Parameter Equipment cmbo value is "+ request.getParameter("ID"));

				//
				 boolean bool=true;
				int value =Integer.parseInt(request.getParameter("ID"));
				
					/*List<Equipments> lst = equipmentService.getAll(ItemTypesService.getItemTypes(value));*/
				//List <Equipments>lst=null;
				List <EquipmentMaping>list=equipmentMapingService.getEquipmentMapings(equipmentService.getEquipments(request.getParameter("ID2")),ItemTypesService.getItemTypess(value));
				
						for(int i=0;i<list.size();i++){
							//Equipments obj=lst.get(i);
							EquipmentMaping objM=list.get(i);
							Equipments obj=objM.getCEquipment();
							try{
								jsonOb2+="{ ItemName: '" + obj.getItemName()+"',Summary:'"+obj.getSummary()+"',Price: '"+obj.getPrice()+"',ITIC_Descrip:'"+obj.getITIC_Descrip()+"',Tec_Descrip:'"+obj.getTec_Descrip()+"',EOLDate:'"+obj.getEOLDate()+"',date_logged:'"+obj.getCalendar_modified()+"',date_modified:'"+obj.getCalendar_logged()+"',date_created:'"+obj.getCalendar_created()+"',ID:'"+obj.getID()+"',itemtypes:'"+obj.getItemType().getTypeName()+"'}";
								}catch (Exception e) {
									logger.info("Error : " + e.getMessage());
								jsonOb2+="'}";
								bool=false;
							}
							if(i<list.size()-1 && bool){
								jsonOb2+=",";
							}
						}
						
						jsonOb2+="]";
				}
				else if(Long.parseLong(request.getParameter("value"))==4){
					 
					logger.info(request.getParameter("ID"));
					if(request.getParameter("ID").equals("Site")){
						jsonOb2+="{ItemName:'Primary'},{ItemName:'DR'},{ItemName:'Test'}";
					}
					else if(request.getParameter("ID").equals("cloud")){
						jsonOb2+="{ItemName:'Cloud'}";
					}
					else{
						 List <Equipments> list =equipmentService.getAll(ItemTypesService.get(request.getParameter("ID")));
						 boolean bool=true;
						 for(int i=0;i<list.size();i++){
							Equipments obj=list.get(i);
							try{
								jsonOb2+="{ ItemName: '" + obj.getItemName()+"'}";
								}catch (Exception e) {
									logger.info("Error : " + e.getMessage());
								jsonOb2+="'}";
								bool=false;
							}
							if(i<list.size()-1 && bool){
								jsonOb2+=",";
							}
						}
					}
						jsonOb2+="]";
				}
			jsonOb2=linebracker(jsonOb2);
			out.println(jsonOb2);
		}
		//*****equipment Map*******
		else if (ServiceType.equals("EquipmentMap")) {	
			
			System.out.println("This section is for Parameter EquipmentMapService Update");
			
				
			
			
		}
		//******equipmentBulk********
		else if (ServiceType.equals("EquipmentsBulk")) {
			
			System.out.println("This section is for Parameter equipmentBulkService Combo");
			String jsonOb2=null;
			if(Long.parseLong(request.getParameter("ID"))==1){
				List<EquipmentBulk>list=equipmentsBulkService.getPackageBulk(packageService.getPackages(request.getParameter("value")));
				int i=0;
				int j=0;
				
				while(j==0){
					try{
					EquipmentBulk obj=list.get(i++);
					if(obj.getEquipmentsId().getItemType().getAccsessLevel()==0){
						j=1;
						jsonOb2="{ItemName : '" + obj.getEquipmentsId().getItemName()+"'}";
						System.out.println(jsonOb2);
					}
					else{
						j=0;
						
					}
					}catch (Exception e) {
						logger.info("Error : " + e.getMessage());
						j=1;
					}
					
				}
				jsonOb2=linebracker(jsonOb2);
				out.println(jsonOb2);
			}
			else if(Long.parseLong(request.getParameter("ID"))==2){
				List<EquipmentBulk>lst=equipmentsBulkService.getPackageBulk(packageService.getPackages(request.getParameter("value")));
				Boolean bool=true;
				jsonOb2="[";
				for(int i=0;i<lst.size();i++){
					//Equipments obj=lst.get(i);
					EquipmentBulk obj=lst.get(i);
					try{
						jsonOb2+="{Price : '"+obj.getQuantity()*obj.getEquipmentsId().getPrice()+"',ItemID: '" + obj.getEquipmentsId().getItemName()+"',PackageID:'"+obj.getPackageID().getPackageName()+"',Quantity:'"+obj.getQuantity()+"',Calendar_logged:'"+obj.getCalendar_modified()+"',Calendar_modified:'"+obj.getCalendar_logged()+"',Calendar_created:'"+obj.getCalendar_created()+"',ID:'"+obj.getId()+"'}";
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
			
		}
		//************************Package**************
		else if (ServiceType.equals("VersionMap")) {
			
			System.out.println("This section is for Parameter VersionMap Combo");
			if(Long.parseLong(request.getParameter("value"))==1){
				List<String> a= versionMapService.getProjects(projectService.getProjects((request.getParameter("ID1"))));
				System.out.println(a.size());
				String jsonOb2="[";
				boolean bool=true;
				for(int i=0;i<a.size();i++){
					String obj=a.get(i);
					try{
						jsonOb2+="{ OptionID: '" +obj+"'}";
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
			//*****
			//do
			else if(Long.parseLong(request.getParameter("value"))==2){
				List<String> a= versionMapService.getVersion_Maps(projectService.getProjects((request.getParameter("ID1"))),request.getParameter("ID2"));
				System.out.println(a.size());
				String jsonOb2="[";
				boolean bool=true;
				for(int i=0;i<a.size();i++){
					String obj=a.get(i);
					try{
						jsonOb2+="{Version: '" +obj+"'}";
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
		else if (ServiceType.equals("Package")) {
			
			System.out.println("This section is for Parameter PackageService Combo");
			
		}
		//********ProjectItems**********
		else if (ServiceType.equals("ProjectItems")) {
			
			
				
			String a[] = new String[4];
			
			System.out.println("This section is for Parameter ProjectItemsService Combo");
			List<String> lst=null;
			
			if(Long.parseLong(request.getParameter("value"))==8 ||Long.parseLong(request.getParameter("value"))==5||Long.parseLong(request.getParameter("value"))==6||Long.parseLong(request.getParameter("value"))==7){
				 a[0]=request.getParameter("ID2");
				 a[1]=request.getParameter("ID3");
				 a[2]=request.getParameter("ID4");
				 List<ProjectItems> jsonOb1=null;
				 logger.info(request.getParameter("value")+" vcbcg "+ a[1] );
				 if(Long.parseLong(request.getParameter("value"))==5){
					 
				 } 
				 boolean bool=true;
					String jsonOb2="[";
					for(int i=0;i<jsonOb1.size();i++){
						ProjectItems obj=jsonOb1.get(i);
						try{
							jsonOb2+="{ ProjectID: '" + obj.getVersion().getProjectID().getProjectName()+"',OptionID:'"+obj.getVersion().getOptionID()+"',VersionID: '"+obj.getVersion().getVersion()+"',PackageID:'"+obj.getPackageID().getPackageName()+"',Quantity:'"+obj.getQuantity()+"',PackageType :'"+obj.getPackageType()+"',Price:'"+obj.getPackageID().getBasePrice()+"',date_logged:'"+obj.getCalendar_logged()+"',date_modified:'"+obj.getCalendar_modified()+"',date_created:'"+obj.getCalendar_created()+"', ID:'"+obj.getId()+"'}";
							}
						catch (Exception e) {
							logger.info("Error : " + e.getMessage());
							jsonOb2+="'}";
							bool=false;
						}
						if(i<jsonOb1.size()-1 && bool){
							jsonOb2+=",";
						}
					}
					
					jsonOb2+="]";
					System.out.println(jsonOb2);
					jsonOb2=linebracker(jsonOb2);
					out.println(jsonOb2);
			 }
			 else{
				 out.println("");
			 }
			 
		}
		//*********Project*********
		else if (ServiceType.equals("Projects")){
			
			System.out.println("This section is for Parameter ProjectsService Combo2");
			List<Project> lst=null;
			if(Long.parseLong(request.getParameter("value"))==1){
				List<Project> a= projectService.getCompany(companyService.get((request.getParameter("ID"))));
				System.out.println(a.size());
				String jsonOb2="[";
				boolean bool=true;
				for(int i=0;i<a.size();i++){
					Project obj=a.get(i);
					try{
						jsonOb2+="{ ProjectName: '" +obj.getProjectName()+"'}";
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
			else if(Long.parseLong(request.getParameter("value"))==2){
				List<Company> a= companyService.getAll();
				System.out.println(a.size());
				String jsonOb2="[";
				boolean bool=true;
				for(int i=0;i<a.size();i++){
					Company obj=a.get(i);
					try{
						jsonOb2+="{ Company: '" +obj.getCompanyName()+"'}";
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
			else{
				logger.info(request.getParameter("value"));
				lst = projectService.getProjects();
				out.println(gson.toJson(lst));
			}
			
			
		}
		//**********ItemType***********
		else if (ServiceType.equals("ItemType")) {
			
			System.out.println("This section is for Parameter ItemTypesService Combo "+request.getParameter("ID"));
			List<ItemTypes> lst= ItemTypesService.getItemTypesByAl(Integer.parseInt(request.getParameter("ID")));
			out.println(gson.toJson(lst));
		}
		else if (ServiceType.equals("SiteType")) {
			
			System.out.println("This section is for Parameter ItemTypesService Combo");
			
		}
		//**********Nothing***********
		else {
			System.out.println("This section is for Nothing but Combo");
			out.println("");
		}
	}
	
	private String linebracker(String jsonOb2){
		return jsonOb2;
	}
	
}
