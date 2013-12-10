Ext.define('New.view.FormAddCompanyView', {
	extend : 'Ext.form.Panel',
	alias : 'widget.AddCompany',
	layout : 'column',
	frame : false,
	border : false,
	buttonAlign : 'center',
	width : '100%',
	bodyPadding : 0,
	id : 'AddCompany',
	name : 'AddCompany',
	items : [ {
		xtype : 'panel',
		width : '100%',
		bodyPadding : 15,
		border : false,
		items : [{
			xtype : 'textfield',
			id : 'txtCompanyName',
			fieldLabel : 'Company Name',
			width : 400,
			height : 60,
			emptyText : 'Company Name Here'
		}]
	
	}],

	buttons: [],

	initComponent : function() {
		this.callParent(arguments);
	}
});
