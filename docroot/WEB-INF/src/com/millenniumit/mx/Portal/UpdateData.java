package com.millenniumit.mx.Portal;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.StringTokenizer;

import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;

import org.apache.log4j.Logger;
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

public class UpdateData {
	private String dateFormat  = "yyyy-MM-dd";
	private Logger logger = Logger.getLogger(UpdateData.class);
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

	public UpdateData(VersionMapService versionMapService,CompanyService companyService,EquipmentsService equipmentService,EquipmentMapingService equipmentMapingService,EquipmentsBulkService equipmentsBulkService,ItemTypesService itemTypeService,PackagesService packageService,ProjectsService projectService,ProjectItemsService projectItemsService){
		
		
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
	
	public UpdateData(EquipmentsService equipmentService,EquipmentMapingService equipmentMapingService,ItemTypesService itemTypeService){		
			
		this.equipmentService =equipmentService; 
		this.equipmentMapingService=equipmentMapingService;
		this.itemTypeService=itemTypeService;
	}
	public UpdateData(EquipmentsBulkService equipmentsBulkService,PackagesService packageService){		
		
		this.equipmentsBulkService=equipmentsBulkService;
		this.packageService =packageService ;
	}
	public UpdateData(VersionMapService versionMapService){
		
		this.versionMapService=versionMapService;
	}
	public UpdateData(VersionMapService versionMapService,ProjectItemsService projectItemsService,ProjectsService projectService,CompanyService companyService){	
		this.companyService=companyService;
		this.projectItemsService = projectItemsService;
		this.projectService =projectService;
		this.versionMapService = versionMapService;	
	}
	public UpdateData(CompanyService companyService){
		
		this.companyService=companyService;
	}
	public UpdateData(ItemTypesService itemTypeService){
		
		this.itemTypeService = itemTypeService;	
	}
	public UpdateData(PackagesService packageService){
	
		this.packageService =packageService ;
	}
	public UpdateData(ProjectsService projectService,CompanyService companyService){
		
		this.projectService =projectService;
		this.companyService=companyService;
	}
	public UpdateData(ProjectItemsService projectItemsService){
	
		this.projectItemsService = projectItemsService;
	}
	public UpdateData(EquipmentMapingService equipmentMapingService){
		
		this.equipmentMapingService=equipmentMapingService;
	}


	public void UpdateDB(ResourceRequest request, ResourceResponse response,String ServiceType) throws JSONException, ParseException{
		
		Calendar calendar = Calendar.getInstance();
		JSONObject jsonobj=jsonCreator.JsonCreat(request, response,ServiceType);
		
		System.out.println("Json "+jsonobj +" ID  "+ request.getParameter("ID"));
		//*****equipment*******
		if (ServiceType.equals("Equipment")) {	
			
			if(request.getParameter("ID").equals("Base")){
				System.out.println("This section is for Parameter equipmentService Update Base");
				
				Equipments NewEquipment=equipmentService.getEquipments(request.getParameter("value"));
				NewEquipment.setItemName(jsonobj.getString("ItemName"));
				NewEquipment.setItemType(itemTypeService.get(jsonobj.getString("itemtypes")));
				NewEquipment.setSummary(jsonobj.getString("Summary"));
				NewEquipment.setTec_Descrip(jsonobj.getString("Comments"));
				NewEquipment.setITIC_Descrip(jsonobj.getString("ITIC_Descrip"));
				NewEquipment.setPrice(Integer.parseInt(jsonobj.getString("Price"),10));
				NewEquipment.setCalendar_modified(calendar.getTime());
				
				Date date = new SimpleDateFormat(dateFormat).parse(jsonobj.getString("EOLDate"));
				NewEquipment.setEOLDate(date);
				//NewEquipment.setCalendar_modified(calendar.getTime());
				try{
					equipmentService.update(NewEquipment);
				}catch (Exception e) {
					logger.info("Error : " + e.getMessage());	
				}
			}
			else{
				System.out.println("This section is for Parameter equipmentService Update and Delete ");
				
				Equipments NewEquipment=equipmentService.getEquipments(request.getParameter("value"));
				int id =NewEquipment.getID();
				System.out.println("ID : "+ NewEquipment.getID()+" name : "+ NewEquipment.getItemName());
				
				List <EquipmentMaping> list=equipmentMapingService.getEquipmentMapings(NewEquipment, 1);
				System.out.println("ize() : "+list.size());
				
				for(int i=0;i<list.size();i++){
					equipmentMapingService.delete(list.get(i));
				}
				
				equipmentService.delete(NewEquipment);
				
				NewEquipment=new Equipments();
				NewEquipment.setID(id);
				NewEquipment.setItemName(jsonobj.getString("ItemName"));
				NewEquipment.setItemType(itemTypeService.get(jsonobj.getString("itemtypes")));
				NewEquipment.setSummary(jsonobj.getString("Summary"));
				NewEquipment.setITIC_Descrip(jsonobj.getString("ITIC_Descrip"));
				NewEquipment.setTec_Descrip(jsonobj.getString("Comments"));
				NewEquipment.setPrice(Integer.parseInt(jsonobj.getString("Price"),10));
				NewEquipment.setCalendar_modified(calendar.getTime());
				
				/*Calendar cal = Calendar.getInstance();
			    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			    cal.setTime((Date)sdf.parse(jsonobj.getString("EOLDate")));*/// all done
				/**********************************/
				Date date = new SimpleDateFormat(dateFormat).parse(jsonobj.getString("EOLDate"));
				try{
					NewEquipment.setEOLDate(date);
				}
				catch (Exception e) {
					 logger.info("Error : " + e.getMessage());
				}
				try{
					equipmentService.save(NewEquipment);
				}catch (Exception e) {
					logger.info("Error : " + e.getMessage());	
				}
				/*************************************EOLDate************************************
				 *
				 * */
				int CID= 1;
			
				try {
					
					CID=equipmentService.getEquipments(jsonobj.getString("ItemName")).getID();
					
				} catch (Exception e) {
					logger.info("Error : " + e.getMessage());
					CID=1;
				}
				
				String Items = null;
				//
				try {
					if(request.getParameter("ID")!="Base"){
						Items = request.getParameter("ID");
					}
					else{
						CID= 1;
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
					//logger.info("hi : " + equipmentMaping.getChildID().getItemName() +"   "+equipmentMaping.getParentID().getItemName());
					//save data
					try {
						equipmentMapingService.save(equipmentMaping);	
					}catch (Exception e) {
						logger.info("Error : " + e.getMessage());
					}
					
					//
				}
				/**
				 * *************************************************************************************************************************************************/
			}
			
		}
		else if (ServiceType.equals("Company")) {
			
			logger.info("updating Duplicate Update :"+jsonobj.getString("Company"));
			Company company= companyService.get(request.getParameter("ID"));
			company.setCompanyName(jsonobj.getString("Company"));
			company.setCalendar_modified(calendar.getTime());
			try {
				companyService.update(company);		
			}catch (Exception e) {
				logger.info("Error : " + e.getMessage());	
			}
			
		}
		//*****equipment Map*******
		else if (ServiceType.equals("EquipmentMap")) {	
			
			System.out.println("This section is for Parameter EquipmentMapService Update");
			
		}
		//******equipmentBulk********
		else if (ServiceType.equals("EquipmentsBulk")) {
			EquipmentBulk equipmentsBulk=equipmentsBulkService.EquipmentsBulkget(packageService.getPackagess(Integer.parseInt(jsonobj.getString("PackageID"))), equipmentService.getEquipments(jsonobj.getString("ItemID")));
			equipmentsBulk.setQuantity(equipmentsBulk.getQuantity()+(Integer.parseInt(jsonobj.getString("Quantity"),10)));
			
			equipmentsBulkService.update(equipmentsBulk);
			Packages packages =packageService.getPackagess(Integer.parseInt(jsonobj.getString("PackageID")));
			System.out.println("This section is for Parameter equipmentBulkService Update");
			try{
				packageService.update(packages);
			}
			catch (Exception e) {
				logger.info("Error : " + e.getMessage());
			}
			
		}
		//************************Package**************
		else if (ServiceType.equals("Package")) {
			
			System.out.println("This section is for Parameter PackageService Update");
			Packages packages= packageService.getPackagess(Integer.parseInt(jsonobj.getString("ID")));
			
			packages.setCalendar_modified(calendar.getTime());
			packages.setPackageName(jsonobj.getString("PackageName"));
			packages.setSummary(jsonobj.getString("Summery"));
			packages.setComment(jsonobj.getString("Comment"));
			packages.setBasePrice(Integer.parseInt(jsonobj.getString("Price"),10));
			
			Date date = new SimpleDateFormat(dateFormat).parse(jsonobj.getString("EOLDate"));
			/**********************************/
			try{
				packages.setEOLDate(date);
			}
			catch (Exception e) {
				 logger.info("Error : " + e.getMessage());
			}
			try{
				packageService.update(packages);
			}
			catch (Exception e) {
				logger.info("Error : " + e.getMessage());
			}
		}
		//********ProjectItems**********
		else if (ServiceType.equals("ProjectItems")) {
			
			System.out.println("This section is for Parameter ProjectItemsService Update");
			ProjectItems projectItems=projectItemsService.getProjectItemss(Integer.parseInt(jsonobj.getString("ID"))) ;
			projectItems.setPackageType(jsonobj.getString("PackageType"));
			//projectItems.setPcakageUsege(jsonobj.getString("PcakageUsege"));
			projectItems.setQuantity(Integer.parseInt(jsonobj.getString("Quantity")));
			projectItems.setCalendar_modified(calendar.getTime());
			try{
				projectItemsService.update(projectItems);
			}
			catch (Exception e) {
				logger.info("Error : " + e.getMessage());
			}
			
		}
		//*********Project*********
		else if (ServiceType.equals("Projects")) {
			
			System.out.println("This section is for Parameter ProjectsService Update");
			Project projects =projectService.getProjects(Integer.parseInt(jsonobj.getString("ID")));
			projects.setCompany(companyService.get((jsonobj.getString("Company"))));
			projects.setProjectName(jsonobj.getString("ProjectName"));
			projects.setCalendar_modified(calendar.getTime());
			try{
				projectService.update(projects);
			}
			catch (Exception e) {
				logger.info("Error : " + e.getMessage());
			}
		}
		//********* versionMapService******
		else if (ServiceType.equals("VersionMap")) {
			
			System.out.println("This section is for Parameter ProjectsService Update");
			VersionMap versionMap =versionMapService.get(Integer.parseInt(jsonobj.getString("ID")));
			versionMap.setSiteID((jsonobj.getString("siteID")));
			versionMap.setOptionID(jsonobj.getString("optionID"));
			versionMap.setCalendar_modified(calendar.getTime());
			versionMap.setProjectID(projectService.getProjects(Integer.parseInt(jsonobj.getString("Projects"))));
			try{
				versionMapService.update(versionMap);
			}
			catch (Exception e) {
				logger.info("Error : " + e.getMessage());
			}
		}
		//**********ItemType***********
		else if (ServiceType.equals("ItemType")) {
			
			System.out.println("This section is for Parameter ItemTypeService Update");
			ItemTypes itemType=itemTypeService.get(request.getParameter("ID"));
			if(itemType!=null && (Integer.parseInt(jsonobj.getString("AccsessLevel"))==1||Integer.parseInt(jsonobj.getString("AccsessLevel"))==0) && jsonobj.getString("TypeName")!=null){
				itemType.setAccsessLevel(Integer.parseInt(jsonobj.getString("AccsessLevel")));
				itemType.setCalendar_modified(calendar.getTime());
				itemType.setTypeName(jsonobj.getString("TypeName"));
				try{
					itemTypeService.update(itemType);
				}
				catch (Exception e) {
					logger.info("Error : " + e.getMessage());
				}
			}
			else{
				System.out.println("Error ; In valide data"+itemType.getTypeName()+" d "+jsonobj.getString("AccsessLevel"));
			}
			
		}
		//**********Nothing***********
		else {
			System.out.println("This section is for Nothing but Combo");
			
		}
	}
}
