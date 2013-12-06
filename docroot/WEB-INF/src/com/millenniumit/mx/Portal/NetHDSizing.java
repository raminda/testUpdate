package com.millenniumit.mx.Portal;


import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.exception.SystemException;
import com.liferay.portal.kernel.util.WebKeys;
import com.liferay.portal.model.User;
import com.liferay.portal.util.PortalUtil;
import com.liferay.util.bridges.mvc.MVCPortlet;
import java.io.IOException;
import java.text.ParseException;

import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import org.apache.log4j.Logger;
import org.json.JSONException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.millenniumit.mx.data.nethdsizing.service.CompanyService;
import com.millenniumit.mx.data.nethdsizing.service.EquipmentMapingService;
import com.millenniumit.mx.data.nethdsizing.service.EquipmentsBulkService;
import com.millenniumit.mx.data.nethdsizing.service.EquipmentsService;
import com.millenniumit.mx.data.nethdsizing.service.ItemTypesService;
import com.millenniumit.mx.data.nethdsizing.service.PackagesService;
import com.millenniumit.mx.data.nethdsizing.service.ProjectItemsService;
import com.millenniumit.mx.data.nethdsizing.service.ProjectsService;
import com.millenniumit.mx.data.nethdsizing.service.VersionMapService;

/**
 * Portlet implementation class NewPortlet
 */
@SuppressWarnings("unused")
public class NetHDSizing extends MVCPortlet {
	
	
	
	private Logger logger = Logger.getLogger(NetHDSizing.class);
	
	//Services Objects in Service class 
	EquipmentsService equipmentService;
	EquipmentsBulkService equipmentsBulkService;
	EquipmentMapingService equipmentMapingService;
	ItemTypesService itemTypeService;
	PackagesService packageService;
	ProjectsService projectService;
	ProjectItemsService projectItemsService;
	VersionMapService versionMapService;
	CompanyService companyService;
	
	@Override
	public void doView(RenderRequest renderRequest,RenderResponse renderResponse) throws IOException, PortletException {
		System.out.println("This section is do view");
		ApplicationContext springCtx = new ClassPathXmlApplicationContext("applicationContext.xml");

		//Service Objects  initializing Using Application.xml

		try {
			equipmentService = (EquipmentsService) springCtx.getBean("EquipmentsService");
			equipmentsBulkService = (EquipmentsBulkService) springCtx.getBean("EquipmentsBulkService");
			equipmentMapingService=(EquipmentMapingService)springCtx.getBean("EquipmentMapingService");
			itemTypeService = (ItemTypesService) springCtx.getBean("ItemTypesService");
			packageService = (PackagesService) springCtx.getBean("PackagesService");
			projectService = (ProjectsService) springCtx.getBean("ProjectsService");
			projectItemsService = (ProjectItemsService) springCtx.getBean("ProjectItemsService");
			versionMapService = (VersionMapService) springCtx.getBean("VersionMapService");
			companyService=(CompanyService) springCtx.getBean("CompanyService");
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		super.doView(renderRequest, renderResponse);
	}
	
	@Override
	public void serveResource(ResourceRequest request, ResourceResponse response)throws IOException, PortletException {
		//UpdateData updateData=null;
		ComboData comboData=null;
		GridData gridData=null;
		SaveData saveData=null;
		DeleteData deleteData=null;
		ExcelCreator excelCreator=null;
		UpdateData updateData=null;
		
		System.out.println("This section is for Navigate Request");
		response.setContentType("application/json");
		String resourceID = request.getResourceID();
		String ItemName = null;
		
		if (resourceID.equals("ItemTypeStoreUrl")) {
			ItemName="ItemType";
			System.out.println("This section is for Navigate "+ ItemName+" init");
			gridData=new GridData(itemTypeService);
			comboData=new ComboData(itemTypeService);
			saveData =new SaveData(itemTypeService);
			updateData=new UpdateData(itemTypeService);
			deleteData=new DeleteData(itemTypeService);
		}
		
		else if (resourceID.equals("EquipmentStoreUrl")) {
			ItemName="Equipment";
			System.out.println("This section is for Navigate "+ ItemName+" init");
			gridData=new GridData(equipmentService);
			comboData=new ComboData(equipmentService, equipmentMapingService, itemTypeService);
			saveData=new SaveData(equipmentService, equipmentMapingService, itemTypeService);
			updateData=new UpdateData(equipmentService, equipmentMapingService, itemTypeService);
			deleteData=new DeleteData(equipmentService,equipmentMapingService);
		}
		else if (resourceID.equals("PackageStoreUrl")) {
			ItemName="Package";
			System.out.println("This section is for Navigate "+ ItemName+" init");
			gridData=new GridData(packageService);
			comboData=new ComboData(packageService);
			saveData=new SaveData(packageService, equipmentsBulkService, equipmentService);
			updateData=new UpdateData(packageService);
			deleteData=new DeleteData(packageService,equipmentsBulkService);
		}
		else{
			
		}
		
		/*
		 * for navigating Requirement 
		 */ 
		System.out.println("This section is for Navigate  Requirement");
		
		if(request.getParameter("purpose").equals("Grid")){
			System.out.println("This section is for Navigate "+ ItemName+" for Grid");
			gridData.gridLoad(request,  response, ItemName);
		}
		else if(request.getParameter("purpose").equals("Combo")){
			System.out.println("This section is for Navigate "+ ItemName+" for Combo");
			comboData.Combo(request,  response, ItemName);
		}
		else if(request.getParameter("purpose").equals("New")){
			System.out.println("This section is for Navigate "+ ItemName+" for New");
			try {
				saveData.NewData(request,  response, ItemName);
			} catch (NumberFormatException e) {
				System.out.println(e.getMessage());
			} catch (JSONException e) {
				System.out.println(e.getMessage());
			} catch (ParseException e) {
				System.out.println(e.getMessage());
			}
		}
		else if(request.getParameter("purpose").equals("delete")){
			System.out.println("This section is for Navigate "+ ItemName+" for delete");
			deleteData.DeleteDB(request,  response, ItemName);
		}
		else if(request.getParameter("purpose").equals("Update")){
			System.out.println("This section is for Navigate "+ ItemName+" for Update");
			try {
				updateData.UpdateDB(request,response,ItemName);
			} catch (JSONException e) {
				System.out.println(e.getMessage());
			} catch (ParseException e) {
				System.out.println(e.getMessage());
			}
		}
		else{
			try {
				userfinder(request, response);
			} catch (PortalException e) {
				System.out.println(e.getMessage());
			} catch (SystemException e) {
				System.out.println(e.getMessage());
			}
		}
		
		/*if (resourceID.equals("EquipmentStoreUrl")) {
			ItemName="Equipment";
			updateData=new UpdateData(equipmentService,equipmentMapingService,itemTypeService);
			comboData=new ComboData(equipmentService,equipmentMapingService,itemTypeService);
			gridData=new GridData(equipmentService);
			saveData=new SaveData(equipmentService,equipmentMapingService,itemTypeService);
			deleteData=new DeleteData(equipmentService);
		}
		//********EquipmentBulk**********
		else if (resourceID.equals("EquipmentsBulkStoreUrl")) {
			ItemName="EquipmentsBulk";
			updateData=new UpdateData(equipmentsBulkService,packageService);
			comboData=new ComboData(equipmentsBulkService,packageService);
			gridData=new GridData(equipmentsBulkService);
			saveData=new SaveData(equipmentsBulkService,packageService,equipmentService);
			deleteData=new DeleteData(equipmentsBulkService);
		}
		
		//********EquipmentMaping********
		else if (resourceID.equals("EquipmentsMapingStoreUrl")) {
			ItemName="EquipmentMap";
			
			updateData=new UpdateData(equipmentMapingService);
			comboData=new ComboData(equipmentMapingService);
			gridData=new GridData(equipmentMapingService);
			saveData=new SaveData(equipmentMapingService);
			deleteData=new DeleteData(equipmentMapingService);
		}
		//************Package**************
		else if (resourceID.equals("PackageStoreUrl")) {	
			ItemName="Package";
			updateData=new UpdateData(packageService);
			comboData=new ComboData(packageService);
			gridData=new GridData(packageService);
			saveData=new SaveData(packageService,equipmentsBulkService,equipmentService);
			deleteData=new DeleteData(packageService);
		}
		//********ProjectItems**********
		else if (resourceID.equals("ProjectItemsStoreUrl")) {		
			ItemName="ProjectItems";
			updateData=new UpdateData(projectItemsService);
			comboData=new ComboData(projectItemsService,projectService);
			gridData=new GridData(projectItemsService);
			saveData=new SaveData(projectItemsService,projectService,packageService);
			deleteData=new DeleteData(projectItemsService);
		}
		//*********Project*********
		else if (resourceID.equals("ProjectsStoreUrl")) {	
			ItemName="Projects";
			updateData=new UpdateData(projectService);
			comboData=new ComboData(projectService);
			gridData=new GridData(projectService);
			saveData=new SaveData(projectService);
			deleteData=new DeleteData(projectService);
		}
		//**********ItemType***********
		else if (resourceID.equals("ItemTypeStoreUrl")) {	
			ItemName="ItemType";
			updateData=new UpdateData(itemTypeService);
			comboData=new ComboData(itemTypeService);
			gridData=new GridData(itemTypeService);
			saveData=new SaveData(itemTypeService);
			deleteData=new DeleteData(itemTypeService);
		}
		
		else if (resourceID.equals("ExcelUrl")) {
			ItemName="excel";
			try {
				excelCreator=new ExcelCreator(equipmentService, equipmentsBulkService, itemTypeService, packageService, projectService, projectItemsService);	
			} catch (Exception e) {
				logger.info("Error  : " + e.getMessage());
			} 		
		}
		else if(resourceID.equals("validate_url")){
			ItemName="validate";
			ValidateData validateData=new ValidateData();
			try {
				validateData.vaidate(request, response);
			} catch (PortalException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (SystemException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		*//********************************************************************************************************************************************
																Navigator Part
		*********************************************************************************************************************************************//*
		
		if (request.getParameter("purpose").equals("New")) {
			System.out.println("This section is for Navigate "+ ItemName+" for New");
			
			try {
				saveData.NewData(request, response,ItemName);
			} catch (NumberFormatException e) {
				logger.info("Error : " + e.getMessage());
			} catch (JSONException e) {
				logger.info("Error : " + e.getMessage());
			} catch (ParseException e) {
				logger.info("Error : " + e.getMessage());
			}
		}
		else if(request.getParameter("purpose").equals("delete")){
			System.out.println("This section is for Navigate "+ ItemName+" for Delete");
			deleteData.DeleteDB(request, response,ItemName);
		}
		else if(request.getParameter("purpose").equals("Grid")){
			System.out.println("This section is for Navigate "+ ItemName+" for Grid");
			gridData.gridLoad(request,  response, ItemName);
		}
		else if(request.getParameter("purpose").equals("Combo")){
			System.out.println("This section is for Navigate "+ ItemName+" for Combo");
			comboData.Combo(request,  response, ItemName);
		}
		else if(request.getParameter("purpose").equals("Update")){
			System.out.println("This section is for Navigate "+ ItemName+" for Update");
			
			try {
				
				updateData.UpdateDB(request,  response, ItemName);
			} catch (JSONException e) {
				logger.info("Error : " + e.getMessage());
			} catch (ParseException e) {
				logger.info("Error : " + e.getMessage());
			}
			
		}
		else if(request.getParameter("purpose").equals("ExcelCreate")){
			try {
				
				String Company=request.getParameter("ID1");
				String Option=request.getParameter("ID2");
				String Vertion=request.getParameter("ID3");
				
				excelCreator.myxcel(request,  response,Company, Option, Vertion);
			} catch (WriteException e) {
				logger.info("Error : " + e.getMessage());
			} catch (BiffException e) {
				logger.info("Error : " + e.getMessage());
			}
			
		}
		else if(request.getParameter("purpose").equals("Copy")){
				System.out.println("This section is for Navigate "+ ItemName+" for Copy");
			
			try {
				copyData=new CopyData(projectItemsService, projectService);
				copyData.CopyDataRows(request,  response, ItemName);
			} catch (JSONException e) {
				logger.info("Error : " + e.getMessage());
			} catch (ParseException e) {
				logger.info("Error : " + e.getMessage());
			}
		}
		else{
			PrintWriter out = response.getWriter();
			out.println("");
		}*/
		gridData=null;
	}
	public void userfinder(ResourceRequest request, ResourceResponse response) throws PortalException, SystemException{
		User currentUser = PortalUtil.getUser(request);
		User user = (User) request.getAttribute(WebKeys.USER);
		String userId = request.getRemoteUser();
		logger.info("User C user n : " + currentUser.getRoles().get(0).getName());
		logger.info("User C user s : " + currentUser.getRoles().get(1).getName());
		logger.info("User C user t : " + currentUser.getRoles().get(2).getName());
		logger.info("User C user sz : " + currentUser.getRoles().size());
		//logger.info("User Web user : " + user.getRoles().get(0).getName());
		//logger.info("User S user : " + userId);
	}
}
