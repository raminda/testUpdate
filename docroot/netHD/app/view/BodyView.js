Ext.define('New.view.BodyView', {
	extend : 'Ext.form.Panel',
	alias : 'widget.Body_View',
	border : false,
	frame : true,
	layout : {
		align: 'center', 
		type : 'fit',
		padding : 5
	},
	height:'100%',
	items :[{
		flex : 1,
		text : 'Home',
		id : 'imageView',
		name : 'imageView',
		textAlign : 'left',
		xtype:'image'
	},{
		flex : 1,
		text : 'Home',
		id : 'GridView',
		name : 'GridView',
		textAlign : 'left',
		xtype:'GridView'
	},{
		flex : 1,
		text : 'Home',
		id : 'CanversView',
		name : 'CanversView',
		textAlign : 'left',
		xtype:'Canvers_View'
	},{
		flex : 1,
		text : 'Home',
		id : 'DDBodyView',
		name : 'DDBodyView',
		textAlign : 'left',
		//xtype:'DDBody'
	},{
		flex : 1,
		text : 'Home',
		id : 'ReportView',
		name : 'ReportView',
		textAlign : 'left',
		//xtype:'Report'
	}],
	initComponent : function() {
		this.callParent(arguments);
		Ext.getCmp('imageView').setVisible(true);
		Ext.getCmp('GridView').setVisible(false);
		Ext.getCmp('CanversView').setVisible(false);
		Ext.getCmp('DDBodyView').setVisible(false);
		Ext.getCmp('ReportView').setVisible(false);
			
	}
});

Ext.onReady(function(){	
});