Ext.define('New.view.SMenuHomeView', {
	extend : 'Ext.form.Panel',
	alias : 'widget.SMenuHome_View',
	title : 'Home',
	layout : 'fit',
	anchor: '100% 100%',
	frame : false,
	border : false,
	bodyPadding : 0,
	items : [ {
		xtype : 'panel',
		bodyPadding : 15,
		items : [{
			xtype : 'button',
			text : 'Projects',
			width : 200,
			handler : function() {
				crt2();
			}
		},{
			xtype : 'textfield',
			fieldLabel : 'Eqipment Type',
			id : 'txtEqipmentType',
			name : 'txtEqipmentType',
			
		},{
			xtype : 'textfield',
			fieldLabel : 'Eqipment Name',
			id : 'txtEqipmentName',
			name : 'txtEqipmentName',
			
		}]		         
	} ], 

	initComponent : function() {
		this.callParent(arguments);
		Ext.getCmp('txtEqipmentType').setVisible(false);
		Ext.getCmp('txtEqipmentName').setVisible(false);
	}
});
