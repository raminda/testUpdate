Ext.define('New.view.BodyView', {
	extend : 'Ext.form.Panel',
	alias : 'widget.Body_View',
	border : false,
	frame : true,
	anchor: '100% 100%',
	layout : {
		align: 'stretch', 
		type : 'fit',
		padding : 5
	},
	 defaults: {
		 titlebar: true,
		 autoScroll:true,
		 fitToFrame:true
	},
	height:900,
	items :[{
		region: 'center',
		text : 'Add Equipment to EquipmentBulk',
		id : 'EquipmentBulkDD',
		name : 'EquipmentBulkDD',
		iconCls : 'Icon',
		textAlign : 'left',
		xtype:'DDBody'
	},{
		region: 'center',
		text : 'Home',
		id : 'imageView',
		name : 'imageView',
		textAlign : 'left',
		xtype:'image'
	},{
		region: 'center',
		text : 'Home',
		id : 'GridView',
		name : 'GridView',
		textAlign : 'left',
		xtype:'GridView'
	},{
		region: 'center',
		text : 'Home',
		id : 'CanversView',
		name : 'CanversView',
		textAlign : 'left',
		xtype:'Canvers_View'
	},{
		region: 'center',
		text : 'Project Details',
		id : 'ProjectDetails',
		name : 'ProjectDetails',
		textAlign : 'left',
		xtype:'ProjectDetails'
	},{
		region: 'center',
		text : 'Home',
		id : 'ReportView',
		name : 'ReportView',
		textAlign : 'left',
	}],
	initComponent : function() {
		this.callParent(arguments);
		Ext.getCmp('EquipmentBulkDD').setVisible(true);
		Ext.getCmp('imageView').setVisible(true);
		Ext.getCmp('GridView').setVisible(false);
		Ext.getCmp('CanversView').setVisible(false);
		Ext.getCmp('ProjectDetails').setVisible(false);		
	}
});

Ext.onReady(function(){
	/****
	    * Setup Drop Targets
	    ***/
		
		var formPanelDropTargetEl =  Ext.getCmp('formPanel').body.dom;
	    Ext.create('Ext.dd.DropTarget', formPanelDropTargetEl, {
	        ddGroup: 'GridExample',
	        notifyEnter: function(ddSource, e, data) {
	        	
	            //Add some flare to invite drop.
	        	Ext.getCmp('formPanel').body.stopAnimation();
	        	Ext.getCmp('formPanel').body.highlight();
	        },
	        notifyDrop  : function(ddSource, e, data){
	        	
	            // Reference the record (single selection) for readability
	        	
	            var selectedRecord = ddSource.dragData.records[0];

	            // Load the record into the form
	            Ext.getCmp('formPanel').getForm().loadRecord(selectedRecord);

	            // Delete record from the source store.  not really required.
	            ddSource.view.store.remove(selectedRecord);

	            Ext.getCmp('btnbulkOK').enable(true);
	            Ext.getCmp('btnbulkClear').enable(true);
	            return true;
	        }
	    });
	    Ext.getCmp('imageView').setVisible(true);
	    
	    Ext.getCmp('EquipmentBulkDD').setVisible(false);
	    
});