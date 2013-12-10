Ext.define('New.view.MenuBarView', {
	extend : 'Ext.toolbar.Toolbar',
	alias  : 'widget.Menu_View',
	border : false,
	frame : true,
	layout : {
		collapsible: true,
		align: 'center',
		padding : 5
	},
	width   : 1000,
	height :70,
	items : [{
		text : 'Home',
		iconCls : 'homeIcon',
		xtype :'button',
		height : 30,
		flex : 1,
		textAlign : 'left',
		handler : function() {
			Ext.getCmp('imageView').setVisible(true);
			Ext.getCmp('GridView').setVisible(false);
			Ext.getCmp('CanversView').setVisible(false);
			Ext.getCmp('DDBodyView').setVisible(false);
			Ext.getCmp('ReportView').setVisible(false);
    	}
		},{
		text : 'Projects',
		iconCls : 'jobsIcon',
		height : 30,
		flex : 1,
		textAlign : 'left',
		menu : [{
				text: 'Create Project (Drawer)',
				handler : function() {
					var grid = Ext.getCmp('formgridPanel');
		  			var store=grid.getStore('EquipmentStoreGrid');
		  			store.proxy.extraParams.purpose = 'null';
		  			store.load();
		  			
		  			var grid = Ext.getCmp('gridEquipmentsBulkView');
					var store=grid.getStore('EquipmentsBulkStoreGrid');
					store.proxy.extraParams.purpose = 'null';
					store.load();
					
					Ext.getCmp('imageView').setVisible(false);
					Ext.getCmp('GridView').setVisible(false);
					Ext.getCmp('CanversView').setVisible(true);
					Ext.getCmp('ReportView').setVisible(false);
					Ext.getCmp('EquipmentBulkDD').setVisible(false);
					crt();
	    		}
			},{
				text: 'Create Project (Comno box)',
				handler : function() {
					Ext.getCmp('EquipmentBulkDD').setVisible(false);
					Ext.getCmp('imageView').setVisible(true);
					Ext.getCmp('GridView').setVisible(false);
					Ext.getCmp('CanversView').setVisible(false);
					Ext.getCmp('ReportView').setVisible(false);
		    	}
			},{
				text: 'Projects Items',
				handler : function() {
					
					var grid = Ext.getCmp('VersionMapResultGrid');
					var store = grid.getStore('VersionMapStoreGrid');
					store.proxy.extraParams.purpose='Grid';
					store.load();
					Ext.getCmp('VersionMapGrids').setVisible(true);
					Ext.getCmp('ProjectGrid').setVisible(false);
					Ext.getCmp('PackageGrid').setVisible(false);
					Ext.getCmp('ItemTypeGrid').setVisible(false);
					Ext.getCmp('EquipmentGrid').setVisible(false);
					Ext.getCmp('CompanyGrid').setVisible(false);
					Ext.getCmp('imageView').setVisible(false);
					Ext.getCmp('GridView').setVisible(true);
					Ext.getCmp('CanversView').setVisible(false);
					Ext.getCmp('EquipmentBulkDD').setVisible(false);
					Ext.getCmp('ReportView').setVisible(false);
		    	}
					
			},{
				text: 'Projects',
				handler : function() {
					
					var grid = Ext.getCmp('gridProjectView');
					var store = grid.getStore('ProjectsStoreGrid');
					store.proxy.extraParams.purpose='Grid';
					store.load();
					
					Ext.getCmp('VersionMapGrids').setVisible(false);
					Ext.getCmp('ProjectGrid').setVisible(true);
					Ext.getCmp('PackageGrid').setVisible(false);
					Ext.getCmp('ItemTypeGrid').setVisible(false);
					Ext.getCmp('EquipmentGrid').setVisible(false);
					Ext.getCmp('CompanyGrid').setVisible(false);
					Ext.getCmp('imageView').setVisible(false);
					Ext.getCmp('GridView').setVisible(true);
					Ext.getCmp('CanversView').setVisible(false);
					Ext.getCmp('EquipmentBulkDD').setVisible(false);
					Ext.getCmp('ReportView').setVisible(false);
		    	}
					
			},{
				text: 'Clients',
				handler : function() {
					
					var grid = Ext.getCmp('gridCompanyView');
					var store = grid.getStore('CompanyStoreGrid');
					store.proxy.extraParams.purpose='Grid';
					store.load();
					Ext.getCmp('VersionMapGrids').setVisible(false);
					Ext.getCmp('ProjectGrid').setVisible(false);
					Ext.getCmp('PackageGrid').setVisible(false);
					Ext.getCmp('ItemTypeGrid').setVisible(false);
					Ext.getCmp('EquipmentGrid').setVisible(false);
					Ext.getCmp('CompanyGrid').setVisible(true);
					Ext.getCmp('imageView').setVisible(false);
					Ext.getCmp('GridView').setVisible(true);
					Ext.getCmp('CanversView').setVisible(false);
					Ext.getCmp('EquipmentBulkDD').setVisible(false);
					Ext.getCmp('ReportView').setVisible(false);	
			    }
			}]
		},{
		text : 'Stores',
		iconCls : 'jobsIcon',
		height : 30,
		flex : 1,
		id : 'StoresType',
		name : 'StoresType',
		textAlign : 'left',
		menu : [{
			text: 'Configure Packages',
			handler : function() {
				
				Ext.getCmp('EquipmentBulkDD').setVisible(true);
				Ext.getCmp('ProjectGrid').setVisible(false);
				
				Ext.getCmp('imageView').setVisible(false);
				Ext.getCmp('GridView').setVisible(false);
				Ext.getCmp('CanversView').setVisible(false);
				Ext.getCmp('ProjectGrid').setVisible(false);
				Ext.getCmp('ReportView').setVisible(false);	
    			}
			},{
			text: 'Configure Base Equipments',
				handler : function() {
				
				var grid = Ext.getCmp('gridPackageView');
				var store = grid.getStore('PackageStoreGrid');
				store.proxy.extraParams.purpose='Grid';
				store.load();
				
				Ext.getCmp('PackageGrid').setVisible(true);
				Ext.getCmp('ItemTypeGrid').setVisible(false);
				Ext.getCmp('ProjectGrid').setVisible(false);
				Ext.getCmp('EquipmentGrid').setVisible(false);
				Ext.getCmp('EquipmentBulkDD').setVisible(false);
				Ext.getCmp('VersionMapGrids').setVisible(false);
				Ext.getCmp('imageView').setVisible(false);
				Ext.getCmp('GridView').setVisible(true);
				Ext.getCmp('CanversView').setVisible(false);
				Ext.getCmp('ReportView').setVisible(false);	
	    		}
			},{
			text: 'Configure Equipment',
			handler : function() {
				
				Ext.getCmp('EquipmentGrid').setVisible(true);
				Ext.getCmp('ItemTypeGrid').setVisible(false);
				Ext.getCmp('PackageGrid').setVisible(false);
				Ext.getCmp('ProjectGrid').setVisible(false);
				Ext.getCmp('VersionMapGrids').setVisible(false);
				var grid = Ext.getCmp('gridEquipmentView');
				var store = grid.getStore('EquipmentStoreGrid');
				store.proxy.extraParams.purpose='Grid';
				store.load();
				
				Ext.getCmp('imageView').setVisible(false);
				Ext.getCmp('GridView').setVisible(true);
				Ext.getCmp('CanversView').setVisible(false);
				Ext.getCmp('EquipmentBulkDD').setVisible(false);
				Ext.getCmp('ReportView').setVisible(false);	
	    		}
				
			},{
			text: 'Equipment Types',
			handler : function() {
				
				Ext.getCmp('ItemTypeGrid').setVisible(true);
				Ext.getCmp('EquipmentGrid').setVisible(false);
				Ext.getCmp('PackageGrid').setVisible(false);
				Ext.getCmp('ProjectGrid').setVisible(false);
				Ext.getCmp('VersionMapGrids').setVisible(false);
				var grid = Ext.getCmp('GridItemTypeView');
				var store = grid.getStore('ItemTypeStoreGrid');
				store.proxy.extraParams.purpose='Grid';
				store.load();
				
				
				Ext.getCmp('imageView').setVisible(false);
				Ext.getCmp('GridView').setVisible(true);
				Ext.getCmp('CanversView').setVisible(false);
				Ext.getCmp('EquipmentBulkDD').setVisible(false);
				Ext.getCmp('ReportView').setVisible(false);	
		    }
		},{
			text: 'Add New Rools',
			handler : function() {
				Ext.getCmp('imageView').setVisible(false);
				Ext.getCmp('GridView').setVisible(true);
				Ext.getCmp('CanversView').setVisible(false);
				Ext.getCmp('EquipmentBulkDD').setVisible(false);
				Ext.getCmp('ReportView').setVisible(false);	
		    }
		}]
	},{
		text : 'Reports',
		iconCls : 'jobsIcon',
		height : 30,
		flex : 1,
		textAlign : 'left',
		menu : [{
			text: 'Generate Hardware Sizing report',
			handler : function() {
				Ext.getCmp('imageView').setVisible(false);
				Ext.getCmp('GridView').setVisible(false);
				Ext.getCmp('CanversView').setVisible(false);
				Ext.getCmp('EquipmentBulkDD').setVisible(false);
				Ext.getCmp('ReportView').setVisible(true);	
    		}
		},{
			text: 'Log report',
			handler : function() {
				Ext.getCmp('imageView').setVisible(false);
				Ext.getCmp('GridView').setVisible(false);
				Ext.getCmp('CanversView').setVisible(false);
				Ext.getCmp('EquipmentBulkDD').setVisible(false);
				Ext.getCmp('ReportView').setVisible(true);	
	    	}
		},{
			text: 'Equipment Summery',
			handler : function() {
				Ext.getCmp('imageView').setVisible(false);
				Ext.getCmp('GridView').setVisible(false);
				Ext.getCmp('CanversView').setVisible(false);
				Ext.getCmp('EquipmentBulkDD').setVisible(false);
				Ext.getCmp('ReportView').setVisible(true);	
	    	}
				
		},{
			text: 'Package Summery',
			handler : function() {
				Ext.getCmp('imageView').setVisible(false);
				Ext.getCmp('GridView').setVisible(false);
				Ext.getCmp('CanversView').setVisible(false);
				Ext.getCmp('EquipmentBulkDD').setVisible(false);
				Ext.getCmp('ReportView').setVisible(true);	
		    }
		},{
			text: 'Project Summery',
			handler : function() {
				Ext.getCmp('imageView').setVisible(false);
				Ext.getCmp('GridView').setVisible(false);
				Ext.getCmp('CanversView').setVisible(false);
				Ext.getCmp('EquipmentBulkDD').setVisible(false);
				Ext.getCmp('ReportView').setVisible(true);	
		    }
		}]
	}],
		
	initComponent : function() {
		this.callParent(arguments);
	}
});

