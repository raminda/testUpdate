Ext.define('New.view.GridPackageView', {
	extend : 'Ext.form.Panel',
	alias : 'widget.PackageGrid',
	title : 'Package Grid View',
	height :750,
	frame : true,
	border : false,
	bodyPadding : 0,
	items : [{
		xtype : 'gridpanel',
		scroll : true,
		border : false,
		columnLines : true,
		id : 'gridPackageView',
		name : 'gridPackageView',
		store : 'PackageStoreGrid',
		overflowX : 'auto',

		viewConfig: {
            forceFit: true
		},
		fieldStyle: {
		     'fontFamily'   : 'courier new',
		     'fontSize'     : '20px',
		},
		columns :[/* {
			header : 'Package ID',
			dataIndex : 'ID',
	
		},*/{
			flex : 1,
			header : 'Package Name',
			dataIndex : 'PackageName',
	
		}, {
			header : 'Price',
			dataIndex : 'BasePrice',
	
		},{
			flex : 1,
			header : 'Summary',
			dataIndex : 'Summery',
	
		},{
			flex : 1,
			header : 'Comments',
			dataIndex : 'Comment',
	
		},{
			flex : 1,
			header : 'End Of Life date',
			dataIndex : 'EOLDate',
			
		},{
			flex : 1,
			header : 'Date created',
			dataIndex : 'Calendar_created',
	
		},{
			flex : 1,
			header : 'Date modified',
			dataIndex : 'Calendar_modified',
	
		}],
		tbar : [{
			text : 'Add New Package',
			iconCls : 'add',
			handler : function() {
				var win=null;
				win= Ext.create('Ext.window.Window', {
					title : 'Add New Package',
					width : 450,
					height : 500,
					minWidth : 300,
					minHeight :400,
					layout : 'fit',
					plain : true,
					items : [{
						xtype : 'AddPackage',
					}],
					buttons : [{
						xtype : 'button',
						text : 'Save',
						width : 150,
						handler : function() {
							
							var Summary=Ext.getCmp('txtPkgSummery').getValue();
							var Comment = Ext.getCmp('txtPkgComment').getValue();
							var BasePrice = Ext.getCmp('txtpkgBasePrice').getValue();
							var edate= Ext.getCmp('txtPkgEOD').getValue();
							
							var Itemname = Ext.getCmp('cmbItemss').getValue();
							var ndate=new Date();
							if(EOLdate<ndate){
								Ext.Msg.alert('Date Not match', 'Invalide date For EOD!');
							}
							else{
								var date = new Date(edate),
						        mnth = ("0" + (date.getMonth()+1)).slice(-2),
						        day  = ("0" + date.getDate()).slice(-2);
								var EOLdate=[ date.getFullYear(), mnth, day ].join("-");
								
								var row=null;
								var store=null;
								
								 var form = Ext.getCmp('AddPackage').getForm();
						         if(form.isValid()){
						        	 
									store = Ext.getStore('PackageStore');
									store.proxy.extraParams.purpose = 'New';
									store.proxy.extraParams.ID="[{PackageID:'"+Itemname+"',ItemID:'"+Itemname+"',Quantity:'1'}]";
									JsonObject= {PackageName:Itemname,Summery:Summary,Comment:Comment,BasePrice:BasePrice,EOLDate:EOLdate};
									row= Ext.create('New.model.PackagesModel', JsonObject);
									store.insert(0, row);
																
									
									Ext.getCmp('txtPkgSummery').reset();
									Ext.getCmp('txtPkgComment').reset();
									Ext.getCmp('txtpkgBasePrice').reset();
									Ext.getCmp('txtPkgEOD').reset();
									
									Ext.Msg.alert('Sucsess', 'Successfully added');
									
									var grid = Ext.getCmp('gridPackageView');
									var store = grid.getStore('PackageStoreGrid');
									store.proxy.extraParams.purpose='Grid';
									store.load();
									win.close();
						         }
						         else{
						        	 Ext.Msg.alert('Error', 'Plese Fill all the feied brfor saving !');
						         }
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
			}, {
				text : 'Remove Packages',
				iconCls : 'remove',
				handler : function(){
					var grid = Ext.getCmp('gridPackageView');
					var sm = grid.getSelectionModel();
					var val = sm.getSelection();
					var store = grid.getStore('PackageStoreGrid');
					if(val[0]!=null){
						Ext.MessageBox.confirm('Confirm', 'Are you sure you want to do that?',  function(btn) {
					      if(btn === 'yes'){
								var store = Ext.getStore('PackageStore');
								store.proxy.extraParams.purpose = 'delete';
								store.proxy.extraParams.value = val[0].get('ID');
								store.load();
								
								Ext.Msg.alert('Sucsess', 'Successfully Deleted');
								
								var grid = Ext.getCmp('gridPackageView');
								var store = grid.getStore('PackageStoreGrid');
								store.proxy.extraParams.purpose='Grid';
								store.load();
							}
						});
						var grid = Ext.getCmp('gridPackageView');
						var store = grid.getStore('PackageStoreGrid');
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
					var grid = Ext.getCmp('gridPackageView');
					var store = grid.getStore('PackageStoreGrid');
					store.proxy.extraParams.purpose='Grid';
					store.load();
			}
		} ],
		listeners : {
			itemdblclick: function(me, record, item, index, e, eOpts ){
				var win=null;
				var grid = Ext.getCmp('gridPackageView');
				var sm = grid.getSelectionModel();
				var val = sm.getSelection();
				var Titel = val[0].get('PackageName');
				win= Ext.create('Ext.window.Window', {
					title : Titel,
					width : 450,
					height : 500,
					minWidth : 300,
					minHeight : 400,
					layout : 'fit',
					plain : true,
					items : [ {
						xtype : 'UpdatePackage'
					} ],

					buttons : [{
						text : 'Update',
						width : 150,
						handler : function() {
							
							var ID = Ext.getCmp('txtUpPackageID').getValue();
							var Summery=Ext.getCmp('txtUpPkgSummery').getValue();
							var Comment = Ext.getCmp('txtUpPkgComment').getValue();
							var BasePrice = Ext.getCmp('txtUppkgBasePrice').getValue();
							var edate= Ext.getCmp('txtUpPkgEOD').getValue();
							
							var ndate=new Date();
								if(EOLdate<ndate){
									Ext.Msg.alert('Date Not match', 'Invalide date For EOD!');
								}
								else{
									var date = new Date(edate),
							        mnth = ("0" + (date.getMonth()+1)).slice(-2),
							        day  = ("0" + date.getDate()).slice(-2);
									var EOLdate=[ date.getFullYear(), mnth, day ].join("-");
									
									var row=null;
									var store=null;
									
									var form = Ext.getCmp('UpPackage').getForm();
							         if(form.isValid()){
										store = Ext.getStore('PackageStore');
										store.proxy.extraParams.purpose = 'Update';
										JsonObject= {ID:ID,Summery: Summery,Comment:Comment,BasePrice:BasePrice,EOLDate:EOLdate};
										row= Ext.create('New.model.PackagesModel', JsonObject);
										store.insert(0, row);
										
										Ext.Msg.alert('Sucsess', 'Successfully Updated');
										
										var grid = Ext.getCmp('gridPackageView');
										var store = grid.getStore('PackageStoreGrid');
										store.proxy.extraParams.purpose='Grid';
										store.load();
										win.close();
							         }
							         else{
							        	 Ext.Msg.alert('Error', 'Plese Fill all the feied brfor saving !');
							         }
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
	}
],

	initComponent : function() {
		this.callParent(arguments);
	}
});