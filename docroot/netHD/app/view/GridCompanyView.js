Ext.define('New.view.GridCompanyView', {
	extend : 'Ext.form.Panel',
	alias : 'widget.CompanyGrid',
	title : 'Project Grid View',
	height :750,
	frame : true,
	border : false,
	bodyPadding : 0,
	items : [ {
			xtype : 'gridpanel',
			scroll : true,
			border : false,
			columnLines : true,
			id : 'gridCompanyView',
			name : 'gridCompanyView',
			store : 'CompanyStoreGrid',
			overflowX : 'auto',

			viewConfig: {
	            forceFit: true
			},
			
			columns :[/*{
				header : 'Project ID',
				dataIndex : 'ID',
			},*/{
				flex : 1,
				header : 'Company Name',
				dataIndex : 'Company',
		
			},{
				flex : 1,
				header : 'date created',
				dataIndex : 'Calendar_created',
		
			},{
				flex : 1,
				header : 'date modified',
				dataIndex : 'Calendar_modified',
	
		}],
		tbar : [{
			text : 'Add New Company',
			iconCls : 'Add new Company',
			handler : function() {
				var win =null;
				win= Ext.create('Ext.window.Window', {
					title : 'Add New Company',
					width : 450,
					height : 250,
					minWidth : 300,
					minHeight : 200,
					layout : 'fit',
					plain : true,
					items : [{
						xtype : 'AddCompany',
					}],
					buttons : [{
						xtype : 'button',
						text : 'Save',
						id : 'btnSaveCompany',
						name : 'btnSaveCompany',
						width : 150,
						handler : function() {
							
							//saving Company data 
							var CompanyName = Ext.getCmp('txtCompanyName').getValue();

							var row=null;
							var store=null;
							
							var form = Ext.getCmp('AddCompany').getForm();
							if(form.isValid()){
								store = Ext.getStore('CompanyStore');
								store.proxy.extraParams.purpose = 'New';
								JsonObject= {Company:CompanyName};
								row= Ext.create('New.model.CompanyModel', JsonObject);
								store.insert(0, row);
									
								win.close();
							}
							else{
								Ext.Msg.alert('Message', 'Plese Enter ProjectName And CompanyName Borth Befor Save!');
							}
						}
					},{
						text : 'Close',
						width : 150,
						handler : function() {
							win.close();
						}
					}],
				});
				win.show();
			}
		},{
			text : 'Remove Company',
			iconCls : 'Remove',
			handler : function(){
				
				var grid = Ext.getCmp('gridCompanyView');
				var sm = grid.getSelectionModel();
				var val = sm.getSelection();
				var store = grid.getStore('CompanyStoreGrid');
				
				if(val[0]!=null){
					if (store.getCount() > 0) {
						sm.select(0);
					}
					store.proxy.extraParams.purpose = 'delete';
					store.proxy.extraParams.value = val[0].get('Company');
					store.load();
					
					var grid = Ext.getCmp('gridCompanyView');
					var store = grid.getStore('CompanyStoreGrid');
					store.proxy.extraParams.purpose='Grid';
					store.load();
					
					
					
				}
				else{
					Ext.Msg.alert('Error ', "Plese Select one Row befor Press Delete");
				}
	
			}
		},{
			text : 'Refresh',
			iconCls : 'refresh',
			handler : function(){
				
				var grid = Ext.getCmp('gridCompanyView');
				var store = grid.getStore('CompanyStoreGrid');
				store.proxy.extraParams.purpose='Grid';
				store.load();
			}
		}],
		listeners : {
			itemdblclick: function(me, record, item, index, e, eOpts ){
				
				var win=null;
				win= Ext.create('Ext.window.Window', {
					title : 'Update Company details',
					width : 450,
					height : 250,
					minWidth : 300,
					minHeight : 200,
					layout : 'fit',
					plain : true,
					items : [ {
						xtype : 'UpdateCompany',
					} ],

					buttons : [{
						xtype : 'button',
						text : 'Update',
						id : 'btnUpdateCompany',
						name : 'btnUpdateCompany',
						width : 150,
						handler : function() {
						
							var Company = Ext.getCmp('txtUpCompanyName').getValue();
	
							var row=null;
							var store=null;
							var form = Ext.getCmp('UpCompany').getForm();
							if(form.isValid()){
								store = Ext.getStore('CompanyStore');
								store.proxy.extraParams.purpose = 'Update';
								store.proxy.extraParams.ID=Ext.getCmp('txtTUpCompanyName').getValue();
								JsonObject= {Company:Company};
								row= Ext.create('New.model.CompanyModel', JsonObject);
								store.insert(0, row);

								var grid = Ext.getCmp('gridCompanyView');
								var store = grid.getStore('CompanyStoreGrid');
								store.proxy.extraParams.purpose='Grid';
								store.load();
								
								win.close();
							}
							else{
								Ext.Msg.alert('Message', 'Plese Enter ProjectName And CompanyName Borth Befor Save!');
							}
						}
					},{
						text : 'Close',
						width : 150,
						handler : function() {
							win.close();
						}
					}]
				});

				win.show();
			}
		}
	}],
	initComponent : function() {
		this.callParent(arguments);
	}
});