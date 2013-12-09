package com.millenniumit.mx.Portal;

import java.util.List;

import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;


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
import common.Logger;

public class DeleteData {
	
	private Logger logger = Logger.getLogger(DeleteData.class);
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
	
	public DeleteData(CompanyService companyService,EquipmentsService equipmentService,EquipmentMapingService equipmentMapingService,EquipmentsBulkService equipmentsBulkService,ItemTypesService itemTypeService,PackagesService packageService,ProjectsService projectService,ProjectItemsService projectItemsService){
		
		
		this.equipmentService =equipmentService; 
		this.equipmentsBulkService=equipmentsBulkService;
		this.itemTypeService = itemTypeService;
		this.packageService =packageService ;
		this.projectService =projectService;
		this.projectItemsService = projectItemsService;
		this.equipmentMapingService=equipmentMapingService;
		this.companyService=companyService;
	}
	
	public DeleteData(EquipmentsService equipmentService,EquipmentMapingService equipmentMapingService){		
		
		this.equipmentMapingService=equipmentMapingService;	
		this.equipmentService =equipmentService; 
	}
	public DeleteData(EquipmentsBulkService equipmentsBulkService){		
		
		this.equipmentsBulkService=equipmentsBulkService;
	}
	public DeleteData(CompanyService companyService){		
		
		this.companyService=companyService;
	}
	public DeleteData(ItemTypesService itemTypeService){
		
		this.itemTypeService = itemTypeService;	
	}
	public DeleteData(PackagesService packageService,EquipmentsBulkService equipmentsBulkService){
	
		this.packageService =packageService ;
		this.equipmentsBulkService=equipmentsBulkService;
	}
	public DeleteData(ProjectsService projectService){
		
		this.projectService =projectService;
	}
	public DeleteData(ProjectItemsService projectItemsService){
	
		this.projectItemsService = projectItemsService;
	}
	public DeleteData(EquipmentMapingService equipmentMapingService){
		
		this.equipmentMapingService=equipmentMapingService;
	}

	
	public void DeleteDB(ResourceRequest request, ResourceResponse response,String ServiceType){
		
		System.out.println("value is "+request.getParameter("value"));
		//*****equipment*******
		 if (ServiceType.equals("Equipment")) {
			
			Equipments newEquipments=new Equipments();
			newEquipments=equipmentService.getEquipments(request.getParameter("value"));
			System.out.println("value is "+newEquipments.getItemName());
			List <EquipmentMaping> list=equipmentMapingService.getEquipmentMapings(newEquipments, 1);
			try{
				System.out.println("ize() : "+list.size());
				for(int i=0;i<list.size();i++){
					equipmentMapingService.delete(list.get(i));
				}
			}
			catch (Exception e) {
				System.out.println("Error in delete in "+ServiceType+" "+e.getMessage());
			}
			try{
				
			equipmentService.delete(newEquipments);
			}
			catch (Exception e) {
				System.out.println("Error in delete in "+ServiceType+" "+e.getMessage());
			}
		}
		//******equipmentBulk********
		else if (ServiceType.equals("EquipmentsBulk")) {
			
			EquipmentBulk newEquipmentBulk=new EquipmentBulk();
			newEquipmentBulk=equipmentsBulkService.getEquipmentsBulks(Integer.parseInt(request.getParameter("value")));
			try{
				equipmentsBulkService.delete(newEquipmentBulk);
			}
			catch (Exception e) {
				System.out.println("Error in delete in "+ServiceType+" "+e.getMessage());
			}
		}
		//*****equipment Map*******
		else if (ServiceType.equals("EquipmentMap")) {	
			
			
			EquipmentMaping equipmentMaping=new EquipmentMaping();
			equipmentMaping =equipmentMapingService.getEquipmentMapings(Integer.parseInt(request.getParameter("value")));
			try{
			equipmentMapingService.delete(equipmentMaping);
			}
			catch (Exception e) {
				System.out.println("Error in delete in "+ServiceType+" "+e.getMessage());
			}
			
		}
		//************************Package**************
		else if (ServiceType.equals("Package")) {
			
			Packages newPackage=new Packages();
			newPackage = packageService.getPackagess(Integer.parseInt(request.getParameter("value")));
			System.out.println(newPackage.getPackageName());
			List <EquipmentBulk> list=equipmentsBulkService.getPackageBulk(newPackage);
			try{
				System.out.println("ize() : "+list.size());
				for(int i=0;i<list.size();i++){
					equipmentsBulkService.delete(list.get(i));
				}
			}
			catch (Exception e) {
				System.out.println("Error in delete in "+ServiceType+" "+e.getMessage());
			}
			try{
			packageService.delete(newPackage);
			}
			catch (Exception e) {
				System.out.println("Error in delete in "+ServiceType+" "+e.getMessage());
			}
		}
		//********ProjectItems**********
		else if (ServiceType.equals("ProjectItems")) {
			
			ProjectItems newProjectItems=new ProjectItems();
			newProjectItems=projectItemsService.getProjectItemss(Integer.parseInt(request.getParameter("value")));
			try{
			projectItemsService.delete(newProjectItems);
			}
			catch (Exception e) {
				System.out.println("Error in delete in "+ServiceType+" "+e.getMessage());
			}
		}
		//*********Project*********
		else if (ServiceType.equals("Projects")) {
			
			Project newprojects=new Project();
			newprojects=projectService.getProjects(Integer.parseInt(request.getParameter("value")));
			try{
			projectService.delete(newprojects);	
			}
			catch (Exception e) {
				System.out.println("Error in delete in "+ServiceType+" "+e.getMessage());
			}
		}
		//**********ItemType***********
		else if (ServiceType.equals("ItemType")) {
			System.out.println(Integer.parseInt(request.getParameter("value")));
			ItemTypes newItemType=new ItemTypes();
			newItemType=itemTypeService.getItemTypess(Integer.parseInt(request.getParameter("value")));
			try{
			itemTypeService.delete(newItemType);
			}
			catch (Exception e) {
				System.out.println("Error in delete in "+ServiceType+" "+e.getMessage());
			}
		}
		else if (ServiceType.equals("Company")) {
					
			Company company=new Company();
			company=companyService.get(Integer.parseInt(request.getParameter("value")));
			try{
			companyService.delete(company);
			}
			catch (Exception e) {
				System.out.println("Error in delete in "+ServiceType+" "+e.getMessage());
			}	
		}
		else if (ServiceType.equals("VersionMap")) {
			
			VersionMap versionMap=new VersionMap();
			versionMap=versionMapService.get(Integer.parseInt(request.getParameter("value")));
			try{
			versionMapService.delete(versionMap);
			}
			catch (Exception e) {
				System.out.println("Error in delete in "+ServiceType+" "+e.getMessage());
			}
		}
		//**********Nothing***********
		else {
			System.out.println("This section is for Nothing for Delete");
		}
	}
}
