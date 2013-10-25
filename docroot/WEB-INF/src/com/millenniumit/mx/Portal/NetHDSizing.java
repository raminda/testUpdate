package com.millenniumit.mx.Portal;

import com.liferay.util.bridges.mvc.MVCPortlet;
import java.io.IOException;

import javax.portlet.PortletContext;
import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import org.apache.log4j.Logger;
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
		//ApplicationContext springCtx = PortletApplicationContextUtils.getWebApplicationContext(getPortletContext());
		PortletContext pc = this.getPortletContext();
		//ApplicationContext springCtx = PortletApplicationContextUtils.getWebApplicationContext(pc);
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
		GridData gridData=null;
		System.out.println("This section is for Navigate ");
		response.setContentType("application/json");
		String resourceID = request.getResourceID();
		String ItemName = null;
		
		if (resourceID.equals("ItemTypeStoreUrl")) {
			ItemName="ItemType";
			System.out.println("This section is for Navigate "+ ItemName+" init");
			gridData=new GridData(itemTypeService);
		}
		if(request.getParameter("purpose").equals("Grid")){
			System.out.println("This section is for Navigate "+ ItemName+" for Grid");
			gridData.gridLoad(request,  response, ItemName);
		}
	}
}
