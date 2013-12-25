/**
 * 
 */
Ext.define('New.view.CanversView', {
	extend : 'Ext.form.Panel',
	alias : 'widget.Canvers_View',
	border : false,
	frame : false,
	anchor: '100% 100%',
	height:830,
	overflowX : 'auto',
	layout:'border',
	items :[{
		html: "<div id='icons_div'></div>",
		xtype: 'panel',
		border : true,
		region: 'east',
		title: "Elements",
        initialSize: 200,
        minSize: 175,
        width : 200,
        maxSize: 400,
        border : true,
		titlebar: true,
        autoScroll:true,
        fitToFrame:true,
        collapsible: true,
        animate: true,
        split:true,
	    
	},{
		region: 'center',
		html: "<div id='center1' class='x-layout-active-content' style='width:1200px;height:825px;' ><div  id='paintarea' style='width:1200px;height:810px;'></div></div>",
		xtype: 'panel',
		border : true,
		titlebar: true,
        autoScroll:true,
        fitToFrame:true
	}],
	
	initComponent : function() {
		this.callParent(arguments);
		
	}
});