<%@taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet"%>
<portlet:defineObjects/>
<portlet:resourceURL var="ItemTypeStoreUrl" id="ItemTypeStoreUrl" escapeXml="false" />	
<%-- <portlet:resourceURL var="SiteTypeStoreUrl" id="SiteTypeStoreUrl" escapeXml="false" />
<portlet:resourceURL var="ProjectItemsStoreUrl" id="ProjectItemsStoreUrl" escapeXml="false" />
<portlet:resourceURL var="EquipmentsBulkStoreUrl" id="EquipmentsBulkStoreUrl" escapeXml="false" />
<portlet:resourceURL var="ProjectsStoreUrl" id="ProjectsStoreUrl" escapeXml="false" />
<portlet:resourceURL var="EquipmentStoreUrl" id="EquipmentStoreUrl" escapeXml="false" />
<portlet:resourceURL var="PackageStoreUrl" id="PackageStoreUrl" escapeXml="false" />	
<portlet:resourceURL var="UserStoreUrl" id="UserStoreUrl" escapeXml="false" />			
<portlet:resourceURL var="EquipmentsMapingStoreUrl" id="EquipmentsMapingStoreUrl" escapeXml="false" />	
<portlet:resourceURL var="ExcelUrl" id="ExcelUrl" escapeXml="false" />		
<portlet:resourceURL var="validate_url" id="validate_url" escapeXml="false" /> --%>	

<script>
	/******************************** app ********************************/
	
		var new_namespace 		= "<portlet:namespace/>";
 		var Menu_div			= "<portlet:namespace/>-ext-div";
 		/* var Body_div 			= "<portlet:namespace/>-Body-ext-div";
 		var Slide_div		 	= "<portlet:namespace/>-Slide-ext-div"; */
 		
 	/******************************************* urls *******************************************************/
 	
	 <%-- 	var validate_url	="<%= renderResponse.encodeURL(validate_url.toString())%>";
		var ExcelUrl	="<%= renderResponse.encodeURL(ExcelUrl.toString())%>";
		var EquipmentsMapingStoreUrl	="<%= renderResponse.encodeURL(EquipmentsMapingStoreUrl.toString())%>";
		var ProjectItemsStoreUrl	="<%= renderResponse.encodeURL(ProjectItemsStoreUrl.toString())%>";
		var EquipmentsBulkStoreUrl	="<%= renderResponse.encodeURL(EquipmentsBulkStoreUrl.toString())%>"; --%>
		var ItemTypeStoreUrl		= "<%=renderResponse.encodeURL(ItemTypeStoreUrl.toString())%>";
		<%-- var PackageStoreUrl			="<%= renderResponse.encodeURL(PackageStoreUrl.toString())%>";
		var ProjectsStoreUrl	 	="<%= renderResponse.encodeURL(ProjectsStoreUrl.toString())%>";
		var EquipmentStoreUrl		="<%= renderResponse.encodeURL(EquipmentStoreUrl.toString())%>";
		var UserStoreUrl 			="<%= renderResponse.encodeURL(UserStoreUrl.toString())%>";	
		var SiteTypeStoreUrl 			="<%= renderResponse.encodeURL(SiteTypeStoreUrl.toString())%>";	
		 --%>
	/********************************* paths**********************************/
	
		var ext_path = "/test-portlet/netHD/ext-4.0/src";
  		var app_path = "/test-portlet/netHD/app";
  		
</script>

	<!--  ********************************* Js s********************************** -->

<script src="/test-portlet/netHD/Addflow/addflow-min.js"></script>
<script src="/test-portlet/netHD/Addflow/network.js"></script>

	<!--  ********************************* Body **********************************  -->
<body>
	<div style="background-color: white;" >
	<!--  ********************************* Menu Bar **********************************  -->
		<div align="left">
			<div id="<portlet:namespace/>-ext-div" align="left"></div>
		</div><br>
		</div>
</body>
		<%-- <div>
	<!--  ********************************* Slide Bar **********************************  -->
			<div id="SlideBar" style="float: left; width: 23% ;height:410px;">
				<div id="<portlet:namespace/>-Slide-ext-div" align="center" style="float: left; width: 100%"></div>
			</div>
	<!--  ********************************* Main Body **********************************  -->
			<div id="MainBody"  style="float: left;height:410px;width: 75% ;">
			
				<div id="<portlet:namespace/>-Body-ext-div" align="center" style="float: left;width: 100%"></div>
			</div>
	<!--  ********************************* Canvas Body **********************************  -->
			<div id="Canvas" align=center style="border-style: solid; height:410px; overflow:auto; float: right; display: none;">
				<canvas id="canvas" width="90%" height="700px">THIS BROWSER NETHDSIZING PLESE USE CHORME OR FIREFOX</canvas>
			</div>
		</div> 
	</div>
</body>--%>
	
	
