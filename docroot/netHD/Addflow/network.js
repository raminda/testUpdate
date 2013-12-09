/**
 * @author DECAN
 */
var workflow;
function crt(){ 
	workflow = new Workflow("paintarea"); 
	//workflow.se
	//workflow
	/*my2("Start");
	var startObj = new NetObject();
	workflow.addFigure(startObj, 200,300);
	my2("End");
	var startObj2 = new NetObject();
	workflow.addFigure(startObj2, 400,300);*/
	
	aFig=new DiagramFigure();
	aFig.setDimension(50, 50);
    aFig.setPic("generic_gateway.png");
    aFig.subtype = "generic_gateway";
		
    aFig3=new DiagramFigure();
	aFig3.setDimension(60, 60);
    aFig3.setPic("pc.png");
    aFig3.subtype = "pc";
    
    aFig4=new DiagramFigure();
	aFig4.setDimension(60, 60);
    aFig4.setPic("pc.png");
    aFig4.subtype = "pc";
    
	aFig2=new DiagramFigure();
	aFig2.setDimension(50, 50);
    aFig2.setPic("workstation.png");
    aFig2.subtype = "workstation";
   
    workflow.addFigure(aFig,350,140);
    workflow.addFigure(aFig2,450,140);
    workflow.addFigure(aFig3,450,340); 
    workflow.addFigure(aFig4,550,440);
    
    JSN(workflow);
}

function crt2(){ 
	var txt = JSON.encode(new JSONSerializer().toJSON(workflow.getDocument()));
	 txt = txt.replace(/,"/g, ', "');
	 alert(txt);
}

function JSN(Workflow){
	this.workflow=Workflow;
}
function addOnloadHandler(elementObject, functionObject)
{
  if(typeof(appLog) != 'undefined') {
    
  }
  if(document.addEventListener) {
    elementObject.addEventListener('load', function(e) { functionObject(elementObject); }, false);
  } else {
    if(document.attachEvent) {
      elementObject.onreadystatechange = function(e) {
         var state = elementObject.readyState;
        
         if (state != "loaded" && state != "complete") {
           return;
         }
         functionObject(elementObject);
         };
    } else {
      alert("Could not bind the onLoad handler to an element!");
    }
  }
}

function removeElement(e) {
  var aNodeToRemove = e;// : document.getElementById(e);
  if (aNodeToRemove.parentNode) {
    aNodeToRemove.parentNode.removeChild(aNodeToRemove);
  }
}

function bootstrapGetLoadScriptNode(aURI)
{
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


function loadJavaScript(aURI, aCallback)
{
  var element = bootstrapGetLoadScriptNode(aURI);
  addOnloadHandler(element, function(el) {
     aCallback(element);
  } );
  document.getElementsByTagName('head')[0].appendChild(element);
}


function createNewDiv(aID)
{
  var txt = document.createElement('P');
  var div = document.createElement('span');
  div.setAttribute('id', aID);
  txt.setAttribute('id', aID + "_txt");
  div.appendChild(txt);
  return div;
}

function loadJSONtext(aText) 
{
  new JSONSerializer().fromJSON(Ext.util.JSON.decode(aText));
}

function loadJSON(aFile) 
{
  loadJavaScript(aFile, function(el) {
    new JSONSerializer().fromJSON(json_diagram);
  });
}

function addDragIcon(aName, aWhere) 
{
  loadJavaScript("/test-portlet/netHD/draw2d/icons/" + aName + ".js", function() { 
     if (document.getElementById("cont_" + aName)) {
       return;
     }
     var div = document.getElementById(aWhere);
     var cdiv = createNewDiv("cont_" + aName);
     var html = '';
     html = html + aName + "<img src='/test-portlet/netHD/draw2d/icons/" + aName + ".png' id='drag_" + aName + "' style='cursor:move'/><br><br>\n";
     cdiv.innerHTML = html;
     div.appendChild(cdiv);
     var dragsource=new Ext.dd.DragSource('drag_' + aName, {ddGroup:'TreeDD',dragData:{name: aName}});
     } );
}

function addDragIconPic(aName, aWhere, aPic) 
{
     if (document.getElementById("cont_" + aName)) {
       return;
     }
     var div = document.getElementById(aWhere);
     var cdiv = createNewDiv("cont_" + aName);
     var html = '';
     html = html + "<center>";
     html = html + "<h1>" + aName + "</h1>\n";
     html = html + "<img src='/test-portlet/netHD/draw2d/icons/" + aPic + "' id='drag_" + aName + "' style='cursor:move'/>\n";
     html = html + "<hr size=1 noshade>\n";
     html = html + "</center>";

     cdiv.innerHTML = html;
     div.appendChild(cdiv);
     var dragsource=new Ext.dd.DragSource('drag_' + aName, {ddGroup:'TreeDD',dragData:{name: 'DiagramFigure', type: aName, pic: aPic }});

}

function addDragIcon2(aName, aWhere)
{
  var aPic = "/test-portlet/netHD/draw2d/icons/" + aName + ".png";
  addDragIconPic(aName, aWhere, aPic);
}

function addLibraryIcon(aName)
{
  addDragIcon2(aName, "icons_div");
}

function addLibraryIconText(aName) 
{
  var txt = document.createElement('P');
  txt.innerHTML = '<a href="javascript:addLibraryIcon(\'' + aName + '\');">' + aName + '</a>';
  //document.getElementById("library_div").appendChild(txt);

}

function createNewIconDiv(aID)
{
  var txt = document.createElement('P');
  var div = document.createElement('span');
  div.setAttribute('id', aID);
  txt.setAttribute('id', aID + "_txt");
  div.appendChild(txt);
  document.getElementById("icons_div").appendChild(div);
  return div;
}

function doSaveJSON()
{
  var txt = Ext.util.JSON.encode(new JSONSerializer().toJSON(workflow.getDocument()));
  txt = txt.replace(/,"/g, ', "');
  return txt;
 // document.getElementById('json_text').value = "json_diagram = " + txt + "\n\n\n\n";
}

function doLoadJSONFromURL()
{
 // loadJSON(document.getElementById('json_load_url').value);
}

function doLoadJSON()
{
  //loadJSONtext(document.getElementById('json_text').value);
}

function getQueryVariable(variable) {
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
function debug(msg)
{
  //var console = document.getElementById("debug");
  //console.innerHTML=console.innerHTML+"<br>"+msg;
}