<%@taglib uri="http://java.sun.com/portlet" prefix="portlet"%>
<portlet:defineObjects/>
<portlet:resourceURL var="CompanyStoreUrl" id="CompanyStoreUrl" escapeXml="false" />	
<portlet:resourceURL var="ItemTypeStoreUrl" id="ItemTypeStoreUrl" escapeXml="false" />	
<portlet:resourceURL var="EquipmentStoreUrl" id="EquipmentStoreUrl" escapeXml="false" />
<portlet:resourceURL var="SiteTypeStoreUrl" id="SiteTypeStoreUrl" escapeXml="false" />
<portlet:resourceURL var="ProjectItemsStoreUrl" id="ProjectItemsStoreUrl" escapeXml="false" />
<portlet:resourceURL var="EquipmentsBulkStoreUrl" id="EquipmentsBulkStoreUrl" escapeXml="false" />
<portlet:resourceURL var="ProjectsStoreUrl" id="ProjectsStoreUrl" escapeXml="false" />
<portlet:resourceURL var="PackageStoreUrl" id="PackageStoreUrl" escapeXml="false" />	
<portlet:resourceURL var="UserStoreUrl" id="UserStoreUrl" escapeXml="false" />			
<portlet:resourceURL var="EquipmentsMapingStoreUrl" id="EquipmentsMapingStoreUrl" escapeXml="false" />	
<portlet:resourceURL var="ExcelUrl" id="ExcelUrl" escapeXml="false" />		
<portlet:resourceURL var="validate_url" id="validate_url" escapeXml="false" />
<portlet:resourceURL var="VersionMapStoreUrl" id="VersionMapStoreUrl" escapeXml="false" />

<script>
	/******************************** app ********************************/
	
		var new_namespace 		= "<portlet:namespace/>";
 		var Menu_div			= "<portlet:namespace/>-ext-div";
 		/* var Body_div 			= "<portlet:namespace/>-Body-ext-div";
 		var Slide_div		 	= "<portlet:namespace/>-Slide-ext-div"; */
 		
 	/******************************************* urls *******************************************************/
 	var VersionMapStoreUrl="<%= renderResponse.encodeURL(VersionMapStoreUrl.toString())%>";
	 	var CompanyStoreUrl	="<%= renderResponse.encodeURL(CompanyStoreUrl.toString())%>";
	 	var validate_url	="<%= renderResponse.encodeURL(validate_url.toString())%>";
		var ExcelUrl	="<%= renderResponse.encodeURL(ExcelUrl.toString())%>";
		var EquipmentsMapingStoreUrl	="<%= renderResponse.encodeURL(EquipmentsMapingStoreUrl.toString())%>";
		var ProjectItemsStoreUrl	="<%= renderResponse.encodeURL(ProjectItemsStoreUrl.toString())%>";
		var EquipmentsBulkStoreUrl	="<%= renderResponse.encodeURL(EquipmentsBulkStoreUrl.toString())%>";
		var ItemTypeStoreUrl		= "<%=renderResponse.encodeURL(ItemTypeStoreUrl.toString())%>";
		var EquipmentStoreUrl		="<%= renderResponse.encodeURL(EquipmentStoreUrl.toString())%>";
		var PackageStoreUrl			="<%= renderResponse.encodeURL(PackageStoreUrl.toString())%>";
		var ProjectsStoreUrl	 	="<%= renderResponse.encodeURL(ProjectsStoreUrl.toString())%>";
		var UserStoreUrl 			="<%= renderResponse.encodeURL(UserStoreUrl.toString())%>";	
		var SiteTypeStoreUrl 			="<%= renderResponse.encodeURL(SiteTypeStoreUrl.toString())%>";	

	/********************************* paths**********************************/
	
		var ext_path = "/test-portlet/netHD/ext-4.0/src";
  		var app_path = "/test-portlet/netHD/app";
</script>

	<!--  ********************************* Js s********************************** -->
	

	<link type="text/css" rel="stylesheet" href="/test-portlet/netHD/draw2d/demo.css" />
	<script src='/test-portlet/netHD/draw2d/wz_jsgraphics.js'></script>
	<script src='/test-portlet/netHD/draw2d/mootools.js'></script>
	<script src='/test-portlet/netHD/draw2d/moocanvas.js'></script>
	<script src='/test-portlet/netHD/draw2d/draw2d.js'></script>
	
	<script src='/test-portlet/netHD/draw2d/ContextmenuConnection.js'></script>
	<script src='/test-portlet/netHD/draw2d/DiagramFigure.js'></script>
	<script src='/test-portlet/netHD/draw2d/JSONSerializer.js'></script>
	<script src='/test-portlet/netHD/draw2d/MyInputPort.js'></script>
	<script src='/test-portlet/netHD/draw2d/MyOutputPort.js'></script>
	<script src='/test-portlet/netHD/draw2d/ResizeImage.js'></script>
	<script src='/test-portlet/netHD/draw2d/network.js'></script>
	<script src='/test-portlet/netHD/draw2d/Validator.js'></script>
	<script src='/test-portlet/netHD/draw2d/adapter/prototype/prototype.js'></script>
		
	<script >
		/* function for decording Object to JSON String */
		JSON=new(function(){
			var _1={}.hasOwnProperty?true:false;
			var _2=function(n){
				return n<10?"0"+n:n;};
			var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\"":"\\\"","\\":"\\\\"};
			var _5=function(s){
				if(/["\\\x00-\x1f]/.test(s)){
					return"\""+s.replace(/([\x00-\x1f\\"])/g,
						function(a,b){
							var c=m[b];
							if(c){return c;}
							c=b.charCodeAt();
							return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16);}
						)+"\"";
					}
				return"\""+s+"\"";};
				var _a=function(o){
					var a=["["],b,i,l=o.length,v;
					for(i=0;i<l;i+=1){
						v=o[i];
						switch(typeof v){
							case"undefined":case"function":case"unknown":break;
							default:
								if(b){a.push(",");}
								a.push(v===null?"null":JSON.encode(v));
								b=true;}
						}
					a.push("]");
					return a.join("");};
					var _11=function(o){
						return"\""+o.getFullYear()+"-"+_2(o.getMonth()+1)+"-"+_2(o.getDate())+"T"+_2(o.getHours())+":"+_2(o.getMinutes())+":"+_2(o.getSeconds())+"\"";};
				this.encode=function(o){
					if(typeof o=="undefined"||o===null){
						return"null";}
					else{
						if(o instanceof Array){
							return _a(o);}
						else{
							if(o instanceof Date){
								return _11(o);}
							else{
								if(typeof o=="string"){
								return _5(o);}
								else{
									if(typeof o=="number"){
										return isFinite(o)?String(o):"null";}
									else{
										if(typeof o=="boolean"){
											return String(o);}
										else{
											var a=["{"],b,i,v;
											for(i in o){
												if(!_1||o.hasOwnProperty(i)){
													v=o[i];
													switch(typeof v)
														{case"undefined":case"function":case"unknown":break;
														default:
															if(b){
																a.push(",");}	
															a.push(this.encode(i),":",v===null?"null":this.encode(v));
															b=true;}
													}
												}
											a.push("}");
											return a.join("");}}}}}}};
					this.decode=function(_18){
						return eval("("+_18+")");};
				})();
			encode=JSON.encode;
			decode=JSON.decode;

		</script>
	<!--  ********************************* Body **********************************  -->
<body style="margin:0px;padding:0px;">
	<div style="background-color: white;" >
	<!--  ********************************* Menu Bar **********************************  -->
		<div align="left">
			<div id="<portlet:namespace/>-ext-div" align="left"></div>
		</div><br>
	</div>
</body>
	
	
