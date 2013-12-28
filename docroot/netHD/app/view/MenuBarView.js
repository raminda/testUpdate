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
	fieldStyle: {
	     'fontFamily'   : 'courier new',
	     'fontSize'     : '12px',
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
				Ext.getCmp('EquipmentBulkDD').setVisible(false);
				Ext.getCmp('ReportView').setVisible(false);
				Ext.getCmp('SMenuHome_View').setVisible(false);
				Ext.getCmp('SMenuEHome_View').setVisible(false);
	    	}
		},{
			text : 'Projects',
			iconCls : 'jobsIcon',
			height : 30,
			flex : 1,
			textAlign : 'left',
			menu : [{
				text: 'Create Project Design',
				handler : function() {
					/*var grid = Ext.getCmp('formgridPanel');
		  			var store=grid.getStore('EquipmentStoreGrid');
		  			store.proxy.extraParams.purpose = 'null';
		  			store.load();
		  			
		  			var grid = Ext.getCmp('gridEquipmentsBulkView');
					var store=grid.getStore('EquipmentsBulkStoreGrid');
					store.proxy.extraParams.purpose = 'null';
					store.load();*/

					Ext.getCmp('ProjectDetails').setVisible(false);	
					Ext.getCmp('imageView').setVisible(false);
					Ext.getCmp('GridView').setVisible(false);
					Ext.getCmp('CanversView').setVisible(true);
					Ext.getCmp('ReportView').setVisible(false);
					Ext.getCmp('EquipmentBulkDD').setVisible(false);
					
					Ext.getCmp('txtItemName').setVisible(false);
					Ext.getCmp('txtPortType').setVisible(false);
					Ext.getCmp('txtEqipmentID').setVisible(false);
					Ext.getCmp('txtEqipmentName').setVisible(false);
					Ext.getCmp('btnVaildtete').setVisible(true);
					Ext.getCmp('btnDAddEquipment').setVisible(false);
					Ext.getCmp('btnAddConnecion').setVisible(false);
					
					Ext.getCmp('cmbDCompany').setVisible(false);
					Ext.getCmp('cmbDProject').setVisible(false);
					Ext.getCmp('cmbDOption').setVisible(false);
					Ext.getCmp('cmbDVersion').setVisible(false);
					Ext.getCmp('btnSaveDD').setVisible(false);
					
					Ext.getCmp('SMenuHome_View').setVisible(true);
					Ext.getCmp('SMenuEHome_View').setVisible(false);
					crt();
	    		}
			},{
				text : 'Edit Projrct Desgin',
				handler : function() {
					Ext.getCmp('imageView').setVisible(false);
					Ext.getCmp('GridView').setVisible(false);
					Ext.getCmp('CanversView').setVisible(true);
					Ext.getCmp('EquipmentBulkDD').setVisible(false);
					Ext.getCmp('ReportView').setVisible(false);
					Ext.getCmp('SMenuHome_View').setVisible(false);
					Ext.getCmp('SMenuHome_View').setVisible(false);
					Ext.getCmp('SMenuEHome_View').setVisible(true);
					
					Ext.getCmp('txtItemName').setVisible(false);
					Ext.getCmp('txtPortType').setVisible(false);
					Ext.getCmp('txtEqipmentID').setVisible(false);
					Ext.getCmp('txtEqipmentName').setVisible(false);
					Ext.getCmp('btnVaildtete').setVisible(true);
					Ext.getCmp('btnDAddEquipment').setVisible(false);
					Ext.getCmp('btnAddConnecion').setVisible(false);
					
					crtEdit();
		    	}
			},{
				text: 'Create Project',
				handler : function() {
					Ext.getCmp('EquipmentBulkDD').setVisible(false);
					Ext.getCmp('ProjectDetails').setVisible(true);	
					Ext.getCmp('imageView').setVisible(false);
					Ext.getCmp('GridView').setVisible(false);
					Ext.getCmp('CanversView').setVisible(false);
					Ext.getCmp('ReportView').setVisible(false);
					Ext.getCmp('EditeProjrct').setVisible(true);
					Ext.getCmp('SMenuHome_View').setVisible(false);
					
					Ext.getCmp('cmbPrjCompany').reset();
					var store = Ext.getStore('ProjectItemsStoreResult');
    				store.proxy.extraParams.purpose = '';
    				store.load();
					
		    	}
			},{
				text: 'Projects Managment',
				handler : function() {
					Ext.getCmp('ProjectDetails').setVisible(false);	
					var grid = Ext.getCmp('gridProjectView');
					var store = grid.getStore('ProjectsStoreGrid');
					store.proxy.extraParams.purpose='Grid';
					store.load();
					var form = Ext.getCmp('ProjectDetails').getForm();
		        	form.reset(true);
					//Ext.getCmp('VersionMapGrids').setVisible(false);
					Ext.getCmp('ProjectGrid').setVisible(true);
					Ext.getCmp('PackageGrid').setVisible(false);
					Ext.getCmp('ItemTypeGrid').setVisible(false);
					Ext.getCmp('EquipmentGrid').setVisible(false);
					Ext.getCmp('CompanyGrid').setVisible(false);
					Ext.getCmp('imageView').setVisible(false);
					Ext.getCmp('btnVaildtete').setVisible(false);
					Ext.getCmp('GridView').setVisible(true);
					Ext.getCmp('CanversView').setVisible(false);
					Ext.getCmp('EquipmentBulkDD').setVisible(false);
					Ext.getCmp('ReportView').setVisible(false);

					/*Ext.getCmp('txtItemName').setVisible(false);
					Ext.getCmp('txtPortType').setVisible(false);
					Ext.getCmp('txtEqipmentID').setVisible(false);
					Ext.getCmp('txtEqipmentName').setVisible(false);
					Ext.getCmp('btnVaildtete').setVisible(true);
					Ext.getCmp('btnDAddEquipment').setVisible(false);
					Ext.getCmp('btnAddConnecion').setVisible(false);
					Ext.getCmp('btnVaildtete').setVisible(false);*/
					Ext.getCmp('SMenuHome_View').setVisible(false);
		    	}
					
			},{
				text: 'Clients Managment',
				handler : function() {
					
					var grid = Ext.getCmp('gridCompanyView');
					var store = grid.getStore('CompanyStoreGrid');
					store.proxy.extraParams.purpose='Grid';
					store.load();
					Ext.getCmp('ProjectDetails').setVisible(false);	
					//Ext.getCmp('VersionMapGrids').setVisible(false);
					Ext.getCmp('ProjectGrid').setVisible(false);
					Ext.getCmp('PackageGrid').setVisible(false);
					Ext.getCmp('ItemTypeGrid').setVisible(false);
					Ext.getCmp('EquipmentGrid').setVisible(false);
					Ext.getCmp('CompanyGrid').setVisible(true);
					//Ext.getCmp('CompanyGrid').reset();
					Ext.getCmp('imageView').setVisible(false);
					Ext.getCmp('GridView').setVisible(true);
					Ext.getCmp('CanversView').setVisible(false);
					Ext.getCmp('EquipmentBulkDD').setVisible(false);
					Ext.getCmp('ReportView').setVisible(false);	

					/*Ext.getCmp('txtItemName').setVisible(false);
					Ext.getCmp('txtPortType').setVisible(false);
					Ext.getCmp('txtEqipmentID').setVisible(false);
					Ext.getCmp('txtEqipmentName').setVisible(false);
					Ext.getCmp('btnVaildtete').setVisible(false);
					Ext.getCmp('btnDAddEquipment').setVisible(false);
					Ext.getCmp('btnAddConnecion').setVisible(false);
					Ext.getCmp('btnVaildtete').setVisible(false);*/
					Ext.getCmp('SMenuHome_View').setVisible(false);
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
				//Ext.getCmp('EquipmentBulkDD').reset();
				Ext.getCmp('ProjectGrid').setVisible(false);
				Ext.getCmp('ProjectDetails').setVisible(false);	
				Ext.getCmp('imageView').setVisible(false);
				Ext.getCmp('GridView').setVisible(false);
				Ext.getCmp('CanversView').setVisible(false);
				Ext.getCmp('ProjectGrid').setVisible(false);
				
				var form = Ext.getCmp('formPanel').getForm();
	        	form.reset(true);
	        	Ext.getCmp('formgridPanel').disable(true);
	        	Ext.getCmp('cmbDDPackage').enable(true);
	        	
	        	Ext.getCmp('txtBsItemName').disable(true);
	        	Ext.getCmp('txtBsItemType').disable(true);
	        	Ext.getCmp('txtBsItemPrice').disable(true);
	        	Ext.getCmp('txtBsItemQuntity').disable(true);
	        	Ext.getCmp('cmbBsItemType').disable(true);
	        	
	        	Ext.getCmp('txtBsItemName').setReadOnly(true);
	        	Ext.getCmp('txtBsItemType').setReadOnly(true);
	        	Ext.getCmp('txtBsItemPrice').setReadOnly(true);
	        	
	        	Ext.getCmp('btnbulkOK').disable(true);
	        	Ext.getCmp('btnbulkClear').disable(true);
	        	Ext.getCmp('btnbulkReset').disable(true);
	        	 
	        	Ext.getCmp('gridProjectoutView').setVisible(false);
	        	Ext.getCmp('ProjectDetailspanel').setVisible(false);
	        	Ext.getCmp('RestProjrct').disable(false);
            	Ext.getCmp('EditeProjrct').disable(false);
            	Ext.getCmp('GenerateAll').disable(false);
            	
            	var grid = Ext.getCmp('formgridPanel');
				var store=grid.getStore('EquipmentStoreGrid');
				store.proxy.extraParams.purpose = '';
				store.load();
            	
				/*Ext.getCmp('txtItemName').setVisible(false);
				Ext.getCmp('txtPortType').setVisible(false);
				Ext.getCmp('txtEqipmentID').setVisible(false);
				Ext.getCmp('txtEqipmentName').setVisible(false);
				Ext.getCmp('btnVaildtete').setVisible(false);
				Ext.getCmp('btnDAddEquipment').setVisible(false);
				Ext.getCmp('btnAddConnecion').setVisible(false);*/
				Ext.getCmp('SMenuHome_View').setVisible(false);
    			}
			},{
			text: 'Configure Base Equipments',
				handler : function() {
				
				var grid = Ext.getCmp('gridPackageView');
				var store = grid.getStore('PackageStoreGrid');
				store.proxy.extraParams.purpose='Grid';
				store.load();
				Ext.getCmp('ProjectDetails').setVisible(false);	
				Ext.getCmp('PackageGrid').setVisible(true);
				//Ext.getCmp('PackageGrid').reset();
				Ext.getCmp('ItemTypeGrid').setVisible(false);
				Ext.getCmp('ProjectGrid').setVisible(false);
				Ext.getCmp('EquipmentGrid').setVisible(false);
				Ext.getCmp('EquipmentBulkDD').setVisible(false);
				//Ext.getCmp('VersionMapGrids').setVisible(false);
				Ext.getCmp('imageView').setVisible(false);
				Ext.getCmp('GridView').setVisible(true);
				Ext.getCmp('CanversView').setVisible(false);

				/*Ext.getCmp('txtItemName').setVisible(false);
				Ext.getCmp('txtPortType').setVisible(false);
				Ext.getCmp('txtEqipmentID').setVisible(false);
				Ext.getCmp('txtEqipmentName').setVisible(false);
				Ext.getCmp('btnVaildtete').setVisible(false);
				Ext.getCmp('btnDAddEquipment').setVisible(false);
				Ext.getCmp('btnAddConnecion').setVisible(false);*/
				Ext.getCmp('SMenuHome_View').setVisible(false);
	    		}
			},{
			text: 'Configure Equipment',
			handler : function() {
				Ext.getCmp('ProjectDetails').setVisible(false);	
				Ext.getCmp('EquipmentGrid').setVisible(true);
				Ext.getCmp('ItemTypeGrid').setVisible(false);
				Ext.getCmp('ProjectGrid').setVisible(false);
				Ext.getCmp('PackageGrid').setVisible(false);
				Ext.getCmp('CompanyGrid').setVisible(false);
				//Ext.getCmp('VersionMapGrids').setVisible(false);
				var grid = Ext.getCmp('gridEquipmentView');
				var store = grid.getStore('EquipmentStoreGrid');
				store.proxy.extraParams.purpose='Grid';
				store.load();
				
				Ext.getCmp('imageView').setVisible(false);
				Ext.getCmp('GridView').setVisible(true);
				Ext.getCmp('CanversView').setVisible(false);
				Ext.getCmp('EquipmentBulkDD').setVisible(false);
				
				/*Ext.getCmp('txtItemName').setVisible(false);
				Ext.getCmp('txtPortType').setVisible(false);
				Ext.getCmp('txtEqipmentID').setVisible(false);
				Ext.getCmp('txtEqipmentName').setVisible(false);
				Ext.getCmp('btnVaildtete').setVisible(false);
				Ext.getCmp('btnDAddEquipment').setVisible(false);
				Ext.getCmp('btnAddConnecion').setVisible(false);*/
				Ext.getCmp('SMenuHome_View').setVisible(false);
	    	}
				
			},{
			text: 'Configure Equipment Types',
			handler : function() {
				Ext.getCmp('ProjectDetails').setVisible(false);	
				Ext.getCmp('ItemTypeGrid').setVisible(true);
				Ext.getCmp('EquipmentGrid').setVisible(false);
				Ext.getCmp('PackageGrid').setVisible(false);
				Ext.getCmp('ProjectGrid').setVisible(false);
				//Ext.getCmp('VersionMapGrids').setVisible(false);
				Ext.getCmp('CompanyGrid').setVisible(false);
				var grid = Ext.getCmp('GridItemTypeView');
				var store = grid.getStore('ItemTypeStoreGrid');
				store.proxy.extraParams.purpose='Grid';
				store.load();
				
				
				Ext.getCmp('imageView').setVisible(false);
				Ext.getCmp('GridView').setVisible(true);
				Ext.getCmp('CanversView').setVisible(false);
				Ext.getCmp('EquipmentBulkDD').setVisible(false);
				
				/*Ext.getCmp('txtItemName').setVisible(false);
				Ext.getCmp('txtPortType').setVisible(false);
				Ext.getCmp('txtEqipmentID').setVisible(false);
				Ext.getCmp('txtEqipmentName').setVisible(false);
				Ext.getCmp('btnVaildtete').setVisible(false);
				Ext.getCmp('btnDAddEquipment').setVisible(false);
				Ext.getCmp('btnAddConnecion').setVisible(false);*/
				Ext.getCmp('SMenuHome_View').setVisible(false);
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
				Ext.getCmp('ProjectDetails').setVisible(true);
				Ext.getCmp('imageView').setVisible(false);
				Ext.getCmp('GridView').setVisible(false);
				Ext.getCmp('CanversView').setVisible(false);
				Ext.getCmp('EquipmentBulkDD').setVisible(false);
				Ext.getCmp('EditeProjrct').setVisible(false);
				//Ext.getCmp('ProjectDetails').reset();
				/*Ext.getCmp('txtItemName').setVisible(false);
				Ext.getCmp('txtPortType').setVisible(false);
				Ext.getCmp('txtEqipmentID').setVisible(false);
				Ext.getCmp('txtEqipmentName').setVisible(false);
				Ext.getCmp('btnVaildtete').setVisible(false);
				Ext.getCmp('btnDAddEquipment').setVisible(false);
				Ext.getCmp('btnAddConnecion').setVisible(false);*/
				Ext.getCmp('SMenuHome_View').setVisible(false);
    		}
		},/*{
			text: 'Log report',
			handler : function() {
				Ext.getCmp('ProjectDetails').setVisible(false);	
				Ext.getCmp('imageView').setVisible(false);
				Ext.getCmp('GridView').setVisible(false);
				Ext.getCmp('CanversView').setVisible(false);
				Ext.getCmp('EquipmentBulkDD').setVisible(false);

				Ext.getCmp('txtItemName').setVisible(false);
				Ext.getCmp('txtPortType').setVisible(false);
				Ext.getCmp('txtEqipmentID').setVisible(false);
				Ext.getCmp('txtEqipmentName').setVisible(false);
				Ext.getCmp('btnVaildtete').setVisible(false);
				Ext.getCmp('btnDAddEquipment').setVisible(false);
				Ext.getCmp('btnAddConnecion').setVisible(false);
				Ext.getCmp('SMenuHome_View').setVisible(false);Ext.getCmp('SMenuEHome_View').setVisible(false);
	    	}
		},*/{
			text: 'Equipment summary',
			handler : function() {
				Ext.getCmp('ProjectDetails').setVisible(false);	
				Ext.getCmp('imageView').setVisible(false);
				Ext.getCmp('GridView').setVisible(false);
				Ext.getCmp('CanversView').setVisible(false);
				Ext.getCmp('EquipmentBulkDD').setVisible(false);
				Ext.Msg.alert('Alert', 'under constrauction!');
				Ext.getCmp('SMenuHome_View').setVisible(false);
	    	}
				
		},{
			text: 'Package summary',
			handler : function() {
				Ext.getCmp('ProjectDetails').setVisible(false);	
				Ext.getCmp('imageView').setVisible(false);
				Ext.getCmp('GridView').setVisible(false);
				Ext.getCmp('CanversView').setVisible(false);
				Ext.getCmp('EquipmentBulkDD').setVisible(false);
				
				Ext.Msg.alert('Alert', 'under constrauction!');
		    	Ext.getCmp('SMenuHome_View').setVisible(false);
			}
		},{
			text: 'Project summary',
			handler : function() {
				Ext.getCmp('ProjectDetails').setVisible(false);	
				Ext.getCmp('imageView').setVisible(false);
				Ext.getCmp('GridView').setVisible(false);
				Ext.getCmp('CanversView').setVisible(false);
				Ext.getCmp('EquipmentBulkDD').setVisible(false);

				Ext.Msg.alert('Alert', 'under constrauction!');
				Ext.getCmp('SMenuHome_View').setVisible(false);
		    }
		}]
	}],
		
	initComponent : function() {
		this.callParent(arguments);
	}
});

