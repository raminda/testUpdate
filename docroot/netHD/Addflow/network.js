/**
 * @author DECAN
 */
var workflow;
function crt(){ 
	workflow = new Workflow("paintarea"); 
	/*my2("Start");
	var startObj = new NetObject();
	workflow.addFigure(startObj, 200,300);
	my2("End");
	var startObj2 = new NetObject();
	workflow.addFigure(startObj2, 400,300);*/
	
	aFig=new DiagramFigure();
	aFig.setDimension(50, 50);
    aFig.setPic("/test-portlet/netHD/draw2d/icons/generic_gateway.png");
    aFig.subtype = "generic_gateway";
		
    aFig3=new DiagramFigure();
	aFig3.setDimension(60, 60);
    aFig3.setPic("/test-portlet/netHD/draw2d/icons/pc.png");
    aFig3.subtype = "pc";
    
	aFig2=new DiagramFigure();
	aFig2.setDimension(50, 50);
    aFig2.setPic("/test-portlet/netHD/draw2d/icons/workstation.png");
    aFig2.subtype = "workstation";
   
    workflow.addFigure(aFig,350,140);
    workflow.addFigure(aFig2,450,140);
    workflow.addFigure(aFig3,450,340);
    
    JSN(workflow);
}

function crt2(){ 
	var txt = JSON.encode(new JSONSerializer().toJSON(workflow.getDocument()));
	 txt = txt.replace(/,"/g, ', "');
	//txt.toJSONString(txt);
	//txt2=new JSONSerializer().toJSON(txt)
	 alert(txt);
}

function JSN(Workflow){
	this.workflow=Workflow;
}