Ext.define('New.view.SlideMenuView', {
	extend : 'Ext.form.Panel',
	alias : 'widget.Slide_View',
	border : false,
	frame : true,
	layout : {
		type : 'fit',
		padding : 5
	},
	height:'100%',
	items :[{
		id:'SMenuHome_View',
		text : 'Home',
		iconCls : 'homeIcon',
		xtype :'SMenuHome_View',
		height : 30,
		flex : 1,
		textAlign : 'left',
	},{
		id:'SMenuEHome_View',
		text : 'Home',
		iconCls : 'homeIcon',
		xtype :'SMenuEHome_View',
		height : 30,
		flex : 1,
		textAlign : 'left',
	}],
	initComponent : function() {	
		this.callParent(arguments);
			
	}
});