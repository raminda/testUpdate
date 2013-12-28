/**
 * @author Raminda
 */
var workflow;
var Parth='/test-portlet/netHD/';
function crt(){ 
	document.getElementById('paintarea').innerHTML="";
	workflow = new Workflow("paintarea");
	JSN(workflow);
	try{
		var Doc=gJSN().figures;
		for(var j=0;j<Doc.getSize();j++){
			var _3b4b=Doc.get(j);
				_3b4b.dispose;
				console.log(j);
		}
	}
	catch (e) {
		console.log(e.toString());
	}
	
		//Ext.getCmp('btnVaildtete').setVisible(true);
		Ext.getCmp('cmbDCompany').reset();
		Ext.getCmp('cmbDCompany').setVisible(false);
		Ext.getCmp('cmbDProject').setVisible(false);
		Ext.getCmp('cmbDOption').setVisible(false);
		Ext.getCmp('cmbDVersion').setVisible(false);
		Ext.getCmp('btnSaveDD').setVisible(false);
		Ext.getCmp('btnAddConnecion').setVisible(false);
		Ext.getCmp('btnVaildtete').setVisible(true);
		Ext.getCmp('txtPortType').setVisible(false);
		Ext.getCmp('txtItemName').setVisible(false);
}
function crtEdit(){ 
	
	document.getElementById('paintarea').innerHTML="";
	workflow = new Workflow("paintarea");
	JSN(workflow);
	try{
		var Doc=gJSN().figures;
		for(var j=0;j<Doc.getSize();j++){
			var _3b4b=Doc.get(j);
				_3b4b.dispose;
				console.log(j);
		}
	}
	catch (e) {
		console.log(e.toString());
	}
	
	Ext.getCmp('btnEVaildtete').setVisible(true);
}
function crt2(){ 
	try{
		var txt = JSON.encode(new JSONSerializer().toJSON(workflow.getDocument()));
		var JSONS = JSON.encode(new JSONSerializer().toJSON(workflow.getDocument()));
		txt = txt.replace(/,"/g, ', "');
		Validator(txt);
	}
	catch (e) {
		console.log(e.toString());
	}
}

function JSN(Workflow){
	try{
		this.workflow=Workflow;
	}
	catch (e) {
		console.log(e.toString());
	}
}
function gJSN(){
	return workflow;
}

function addOnloadHandler(elementObject, functionObject){
  try{
	  if(typeof(appLog) != 'undefined') {
    // do nothing
	  }
	  if(document.addEventListener){
	    elementObject.addEventListener('load', function(e) { functionObject(elementObject); }, false);
	  } 
	  else {
	    if(document.attachEvent) {
	      elementObject.onreadystatechange = function(e) {
	         var state = elementObject.readyState;
	         if (state != "loaded" && state != "complete") {
	           return;
	         }
	         functionObject(elementObject);
	       };
	    } 
	    else {
	    	Ext.Msg.alert("Could not bind the onLoad handler to an element!");
	    }
	  }
	}
	catch (e) {
		console.log(e.toString());
	}
}

function removeElement(e) {
	try{
	  	var aNodeToRemove = e;// : document.getElementById(e);
		if (aNodeToRemove.parentNode) {
			aNodeToRemove.parentNode.removeChild(aNodeToRemove);
		}
  	}
	catch (e) {
		console.log(e.toString());
	}
}

function bootstrapGetLoadScriptNode(aURI){
	try{
		var element;
		var aID = "script_" + aURI;
		removeElement(aID);
		element = document.createElement("script");
		element.setAttribute('id',aID);
		
		aURI = aURI + "?_=" + (new Date()).getTime();
		
		element.setAttribute('src',aURI);
		element.setAttribute('type', "text/javascript");
		
		return element;
	}
	catch (e) {
		console.log(e.toString());
	}
}


function loadJavaScript(aURI, aCallback){
	try{
		var element = bootstrapGetLoadScriptNode(aURI);
		addOnloadHandler(element, function(el) {
			aCallback(element);
		} );
		document.getElementsByTagName('head')[0].appendChild(element);
	}
	catch (e) {
		console.log(e.toString());
	}
}


function createNewDiv(aID){
  try{
	var txt = document.createElement('P');
	var div = document.createElement('span');
	div.setAttribute('id', aID);
	txt.setAttribute('id', aID + "_txt");
	div.appendChild(txt);
	return div;
  }
  catch (e) {
	console.log(e.toString());
  }
}

function loadJSONtext(aText) {
  try{
	new JSONSerializer().fromJSON(Ext.util.JSON.decode(aText));
  }
	catch (e) {
		console.log(e.toString());
	}
}

function loadJSON(aFile) {
  try{
	loadJavaScript(aFile, function(el) {
		new JSONSerializer().fromJSON(json_diagram);
	});
  }
	catch (e) {
		console.log(e.toString());
	}
}

function addDragIcon(aName, aWhere) {
	try{
		loadJavaScript(Parth+"draw2d/icons/" + aName + ".js", function() { 
	     if (document.getElementById("cont_" + aName)) {
	       return;
	     }
	     var div = document.getElementById(aWhere);
	     var cdiv = createNewDiv("cont_" + aName);
	     var html = '';
	     html = html + aName + "<img src='"+Parth+"draw2d/icons/" + aName + ".png' id='drag_" + aName + "' style='cursor:move'/><br><br>\n";
	     cdiv.innerHTML = html;
	     div.appendChild(cdiv);
	     var dragsource=new Ext.dd.DragSource('drag_' + aName, {ddGroup:'TreeDD',dragData:{name: aName}});
		});
  	}
	catch (e) {
		console.log(e.toString());
	}
}

function addDragIconPic(aName, aWhere, aPic) {
	try{
		if (document.getElementById("cont_" + aName)) {
	       return;
	     }
	     var div = document.getElementById(aWhere);
	     var cdiv = createNewDiv("cont_" + aName);
	     var html = '';
	     html = html + "<center>";
	     html = html + "<h1>" + aName + "</h1>\n";
	     html = html + "<img src='"+Parth+"draw2d/icons/"+ aPic + "' id='drag_" + aName + "' style='cursor:move'/>\n";
	     html = html + "<hr size=1 noshade>\n";
	     html = html + "</center>";
	
	     cdiv.innerHTML = html;
	     div.appendChild(cdiv);
	     var dragsource=new Ext.dd.DragSource('drag_' + aName, {ddGroup:'TreeDD',dragData:{name: 'DiagramFigure', type: aName, pic: aPic }});
	}
	catch (e) {
		console.log(e.toString());
	}
}

function addDragIcon2(aName, aWhere){
  try{
	var aPic =aName + ".png";
	addDragIconPic(aName, aWhere, aPic);
  }
	catch (e) {
		console.log(e.toString());
	}
}

function addLibraryIcon(aName){
 try{
	addDragIcon2(aName, "icons_div");
 }
	catch (e) {
		console.log(e.toString());
	}
}

function addLibraryIconText(aName) {
  try{
	var txt = document.createElement('P');
  txt.innerHTML = '<a href="javascript:addLibraryIcon(\'' + aName + '\');">' + aName + '</a>';
  //document.getElementById("library_div").appendChild(txt);
  }
	catch (e) {
		console.log(e.toString());
	}
}

function createNewIconDiv(aID){
  try{
	var txt = document.createElement('P');
	  var div = document.createElement('span');
	  div.setAttribute('id', aID);
	  txt.setAttribute('id', aID + "_txt");
	  div.appendChild(txt);
	  document.getElementById("icons_div").appendChild(div);
	  return div;
  }
	catch (e) {
		console.log(e.toString());
	}
}

function doSaveJSON(){
 try{
	var txt = Ext.util.JSON.encode(new JSONSerializer().toJSON(workflow.getDocument()));
  txt = txt.replace(/,"/g, ', "');
  return txt;
 // document.getElementById('json_text').value = "json_diagram = " + txt + "\n\n\n\n";
 }
	catch (e) {
		console.log(e.toString());
	}
}

function doLoadJSONFromURL(){
  try{
	loadJSON(document.getElementById('json_load_url').value);
  }
	catch (e) {
		console.log(e.toString());
	}
}

function doLoadJSON(){
  try{
	loadJSONtext(document.getElementById('json_text').value);
  }
	catch (e) {
		console.log(e.toString());
	}
}

function getQueryVariable(variable) {
  try{
	var query = window.location.search.substring(1);
	  var vars = query.split("&");
	  for (var i=0;i<vars.length;i++) {
	    var pair = vars[i].split("=");
	    if (pair[0] == variable) {
	      return unescape(pair[1]);
	    }
	  } 
	  return "";
	  }
	catch (e) {
		console.log(e.toString());
	}
}
function debug(msg)
{
	console.log(msg);
}