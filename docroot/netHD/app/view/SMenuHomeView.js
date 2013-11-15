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
		}]		         
	} ],

	initComponent : function() {
		this.callParent(arguments);
	}
});
