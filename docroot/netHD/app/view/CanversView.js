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
	layout : {
		align: 'stretch', 
		type : 'hbox',
		padding : 5
	},
	items :[{
    	flex : 1,
		html: "<div id='icons_div'></div>",
		xtype: 'panel',
		border : true,
        	
		},{
    	flex : 10,
		html: "<div id='center1' class='x-layout-active-content'><div  id='paintarea' style='width:1000px;height:1000px;'></div></div>",
		xtype: 'panel',
		border : true  	
	}],
	
	initComponent : function() {
		this.callParent(arguments);
		
	}
});