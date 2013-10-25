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
		html: "<div style='height:100px'><br><div style='float: left ;width: 24%'></div><div id='Canvas'  onclick='var e = window.event;event.clientX=event.clientX-200;var posX = event.clientX;var posY = event.clientY;alert(\"Status:\"+ posX +\"****\"+ posY);' align='left' style='float: right height:800px;width:75%; overflow:auto; float: right;'><canvas id='canvas' height='700px'>THIS BROWSER NETHDSIZING PLESE USE CHORME OR FIREFOX</canvas></div>",
        xtype: 'panel'
        	
	}],
});

//html: "<div align='right'><canvas id='canvas'>THIS BROWSER NETHDSIZING PLESE USE CHORME OR FIREFOX</canvas></div>",
/*
 * var panel_el = Ext.get('Dcanvas'),
            pos_x    = e.getPageX() - panel_el.getX(), 
            pos_y    = e.getPageY() - panel_el.getY()
 */
