Ext.define('New.view.FormUpdateCompany', {
	extend : 'Ext.form.Panel',
	alias : 'widget.UpdateCompany',
	layout : 'column',
	frame : false,
	border : false,
	buttonAlign : 'center',
	width : '100%',
	bodyPadding : 0,
	id : 'UpCompany',
	name : 'UpCompany',
	items : [ {
		xtype : 'panel',
		width : '100%',
		bodyPadding : 15,
		border : false,
		items : [{
			xtype : 'textfield',
			id : 'txtUpCompanyName',
			fieldLabel : 'Company Name',
			width : 400,
			height : 60,
			emptyText : 'Company Name Here'
		},{
			xtype : 'textfield',
			id : 'txtTUpCompanyName',
			fieldLabel : 'Company Name',
			width : 400,
			height : 60,
			emptyText : 'Company Name Here'
		}]
	
	}],

	buttons: [],

	initComponent : function() {
		this.callParent(arguments);
		
		var grid = Ext.getCmp('gridCompanyView');
		var sm = grid.getSelectionModel();
		var val = sm.getSelection();

		var name = val[0].get('Company');
		
		Ext.getCmp('txtUpCompanyName').setValue(name);
		Ext.getCmp('txtTUpCompanyName').setValue(name);
		Ext.getCmp('txtTUpCompanyName').setVisible(false);
	}
});
