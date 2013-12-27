Ext.define('New.view.GridView', {
		extend : 'Ext.form.Panel',
		alias  : 'widget.GridView',
		border : false,
		frame : false,
	    defaults: {
		    collapsible: false,
		    height: 800,
			minSize: 100,
		    maxSize: 900,
		    viewConfig:{
		 		forceFit:true,
		 	},
		    split: true,
		    animate: true,
		},
		fieldStyle: {
		     'fontFamily'   : 'courier new',
		     'fontSize'     : '12px',
		},
	 	layout: 'fit',
		bodyPadding : 15,
		items : [{
				flex : 1,
				id : 'ItemTypeGrid',
				name : 'ItemTypeGrid',
				title : 'Configure Equipment Types',
				xtype : 'ItemTypeGrid',
			},{
				flex : 1,
				id : 'EquipmentGrid',
				name : 'EquipmentGrid',
				title : 'My Equipment Grid View',
				xtype : 'EquipmentGrid',
			},{
				flex : 1,
				id : 'PackageGrid',
				name : 'PackageGrid',
				title : 'My Package Grid view',
				xtype : 'PackageGrid'
			},{
				flex : 1,
				id : 'CompanyGrid',
				name : 'CompanyGrid',
				title : 'My Company Grid view',
				xtype : 'CompanyGrid'
			},{
				flex : 1,
				id : 'VersionMapGrids',
				name : 'VersionMapGrids',
				title : 'Project Deteils view',
				//xtype : 'VersionMapGrids'
			},{
				flex : 1,
				id : 'ProjectGrid',
				name : 'ProjectGrid',
				title : 'Project Grid view',
				xtype : 'ProjectGrid',
		}],
		
		initComponent : function() {
			this.callParent(arguments);

			Ext.getCmp('ItemTypeGrid').setVisible(false);
			Ext.getCmp('EquipmentGrid').setVisible(false);
			Ext.getCmp('ProjectGrid').setVisible(false);
			Ext.getCmp('PackageGrid').setVisible(false);
			Ext.getCmp('CompanyGrid').setVisible(false);
			Ext.getCmp('VersionMapGrids').setVisible(false);
			
		}
});
