package com.millenniumit.mx.Portal;

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

public class DeleteData {
	
	//private Logger logger = Logger.getLogger(IticSystemPortlet.class);
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
	
	/*public DeleteData(AcUserService acUserService,EquipmentsService equipmentService,EquipmentMapingService equipmentMapingService,EquipmentsBulkService equipmentsBulkService,ItemTypeService itemTypeService,PackagesService packageService,ProjectsService projectService,ProjectItemsService projectItemsService){
		
		
		this.equipmentService =equipmentService; 
		this.equipmentsBulkService=equipmentsBulkService;
		this.itemTypeService = itemTypeService;
		this.packageService =packageService ;
		this.projectService =projectService;
		this.projectItemsService = projectItemsService;
		this.equipmentMapingService=equipmentMapingService;
		this.acUserService=acUserService;
	}*/
	
	public DeleteData(EquipmentsService equipmentService){		
			
		this.equipmentService =equipmentService; 
	}
	public DeleteData(EquipmentsBulkService equipmentsBulkService){		
		
		this.equipmentsBulkService=equipmentsBulkService;
	}
	public DeleteData(ItemTypesService itemTypeService){
		
		this.itemTypeService = itemTypeService;	
	}
	public DeleteData(PackagesService packageService){
	
		this.packageService =packageService ;
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
		
		
		//*****equipment*******
		 if (ServiceType.equals("Equipment")) {
			
			Equipments newEquipments=new Equipments();
			newEquipments=equipmentService.getEquipments(Integer.parseInt(request.getParameter("value")));
			equipmentService.delete(newEquipments);
		}
		//******equipmentBulk********
		else if (ServiceType.equals("EquipmentsBulk")) {
			
			EquipmentBulk newEquipmentBulk=new EquipmentBulk();
			newEquipmentBulk=equipmentsBulkService.getEquipmentsBulks(Integer.parseInt(request.getParameter("value")));
			equipmentsBulkService.delete(newEquipmentBulk);
		}
		//*****equipment Map*******
		else if (ServiceType.equals("EquipmentMap")) {	
			
			
			EquipmentMaping equipmentMaping=new EquipmentMaping();
			equipmentMaping =equipmentMapingService.getEquipmentMapings(Integer.parseInt(request.getParameter("value")));
			equipmentMapingService.delete(equipmentMaping);
			
		}
		//************************Package**************
		else if (ServiceType.equals("Package")) {
			
			Packages newPackage=new Packages();
			newPackage = packageService.getPackagess(Integer.parseInt(request.getParameter("value")));
			packageService.delete(newPackage);
			
		}
		//********ProjectItems**********
		else if (ServiceType.equals("ProjectItems")) {
			
			ProjectItems newProjectItems=new ProjectItems();
			newProjectItems=projectItemsService.getProjectItemss(Integer.parseInt(request.getParameter("value")));
			projectItemsService.delete(newProjectItems);
			
		}
		//*********Project*********
		else if (ServiceType.equals("Projects")) {
			
			Project newprojects=new Project();
			newprojects=projectService.getProjects(Integer.parseInt(request.getParameter("value")));
			projectService.delete(newprojects);	
			
		}
		//**********ItemType***********
		else if (ServiceType.equals("ItemType")) {
			
			ItemTypes newItemType=new ItemTypes();
			newItemType=itemTypeService.getItemTypess(Integer.parseInt(request.getParameter("value")));
			itemTypeService.delete(newItemType);
			
		}
		else if (ServiceType.equals("Company")) {
					
			Company company=new Company();
			company=companyService.get(Integer.parseInt(request.getParameter("value")));
					companyService.delete(company);
					
				}
		else if (ServiceType.equals("VersionMap")) {
			
			VersionMap versionMap=new VersionMap();
			versionMap=versionMapService.get(Integer.parseInt(request.getParameter("value")));
			versionMapService.delete(versionMap);
			
		}
		//**********Nothing***********
		else {
			
			System.out.println("This section is for Nothing for Delete");
		}
	}
}
