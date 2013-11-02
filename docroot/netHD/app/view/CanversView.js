/**
 * 
 */
Ext.define('New.view.CanversView', {
	extend : 'Ext.form.Panel',
	alias : 'widget.Canvers_View',
	border : false,
	frame : false,
	anchor: '100% 100%',
	height:800,
	items :[{
    	flex : 1,
		html: "<div  id='paintarea' style='width:1000px;height:1000px;' ></div>",
		xtype: 'panel'
        	
	}],
});

//html: "<div align='right'><canvas id='canvas'>THIS BROWSER NETHDSIZING PLESE USE CHORME OR FIREFOX</canvas></div>",
/*
 * var panel_el = Ext.get('Dcanvas'),
            pos_x    = e.getPageX() - panel_el.getX(), 
            pos_y    = e.getPageY() - panel_el.getY()
 */
/*"<div style='height:100px'><br><div style='float: left ;width: 24%'></div><div id='Canvas'  onclick='var e = window.event;event.clientX=event.clientX-200;var posX = event.clientX;var posY = event.clientY;alert(\"Status:\"+ posX +\"****\"+ posY);' align='left' style='float: right height:800px;width:75%; overflow:auto; float: right;'><canvas id='canvas' height='700px'>THIS BROWSER NETHDSIZING PLESE USE CHORME OR FIREFOX</canvas></div>",
<html xmlns='http://www.w3.org/1999/xhtml' xml:lang='de'><head><link type='text/css' rel='stylesheet" href='bin/demo.css' /><meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'><SCRIPT src='bin/wz_jsgraphics.js'></SCRIPT><SCRIPT src='bin/mootools.js'></SCRIPT><SCRIPT src='bin/moocanvas.js'></SCRIPT><SCRIPT src='bin/draw2d.js'></SCRIPT>
	
</head>

"<div  id='paintarea' style='width:1000px;height:1000px;' ></div><script>var workflow = new draw2d.Workflow('paintarea');var node1= new draw2d.Oval();node1.setDimension(100,40);node1.setBackgroundColor(new draw2d.Color(255,0,0));workflow.addFigure(node1,130,180);"
*/