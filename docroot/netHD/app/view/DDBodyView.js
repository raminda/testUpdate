Ext.define('New.view.DDBodyView' , {
	extend :'Ext.panel.Panel',
	alias  : 'widget.DDBody',
    anchor: '100% 100%',
    border : false,
	frame : false,
	height:900,
	layout:'border',
    defaults: {
	    collapsible: true,
	},
	fieldStyle: {
	     'fontFamily'   : 'courier new',
	     'fontSize'     : '12px',
	},
    items: [{
    	region: 'north',
		text : 'Body',
		iconCls : 'Icon',
		height: 450,
		minSize: 100,
	    maxSize: 700,
		margins: '5 0 0 0',
		textAlign : 'left',
		xtype : 'EquipmentBulkDD',
		//equipment bulk Form
		
    },{
    	region: 'center',
    	text : 'Save',
    	iconCls : 'Icon',
		textAlign : 'left',
		xtype : 'EquipmentsBulkGrid',
		//equipment bulk Grid
		tbar : [{
			//top bar buttons
			text : 'Add New Equiment',
			iconCls : 'add',
			id : 'addEquipment_inBulkDD',
			name : 'addEquipment_inBulkDD',
			handler : function() {
				var win =null;
				//create new Window for add new equipment
				win= Ext.create('Ext.window.Window', {
					title : 'Add New Equiment',
					width : 450,
					height : 530,
					minWidth : 300,
					minHeight : 200,
					layout : 'fit',
					plain : true,
					items : [{
						xtype : 'AddEquiment',
					}],
					buttons : [{
						text : 'Save',
						width : 150,
						handler : function() {
							
							var Name = Ext.getCmp('txtEquipmentName').getValue();
							var ItemType = Ext.getCmp('cmbEqItemType').getValue();
							var Price = Ext.getCmp('txtEqPrice').getValue();
							var Summary=Ext.getCmp('txtEqSummery').getValue();
							var support=Ext.getCmp('cmbEqSupport').getValue();
							var Comments = Ext.getCmp('txtEqFullDescription').getValue();
							var ITICDescription = Ext.getCmp('txtEqITICDescription').getValue();
							var TecDescription = Ext.getCmp('txtEqTecDescription').getValue();
							var edate= Ext.getCmp('txtEqEOD').getValue();						

							//var ndate=new Date();
							var Support=support.toString();
							if(Support=="This is a base Item"){
								Support='Base';
							}
							 var form = Ext.getCmp('AddEquiment').getForm();
					         if(form.isValid()){
										
							    var date = new Date(edate),
						        mnth = ("0" + (date.getMonth()+1)).slice(-2),
						        day  = ("0" + date.getDate()).slice(-2);
							    var EOL=[ date.getFullYear(), mnth, day ].join("-");

									
								var store = Ext.getStore('EquipmentStore');
								store.proxy.extraParams.purpose = 'New';
								store.proxy.extraParams.ID=Support;
								var JsonObject= {ID:0,ItemName:Name,itemtypes:ItemType,Summary: Summary,ITIC_Descrip:ITICDescription,Tec_Descrip:TecDescription,Comments:Comments,Price:Price,EOLDate:EOL};
								var row= Ext.create('New.model.EquipmentModel', JsonObject);
								store.insert(0, row);
								
								
								Ext.getCmp('txtEquipmentName').reset();
								Ext.getCmp('cmbEqItemType').reset();
								Ext.getCmp('txtEqPrice').reset();
								Ext.getCmp('txtEqSummery').reset();
								Ext.getCmp('cmbEqSupport').reset();
								Ext.getCmp('txtEqFullDescription').reset();
								Ext.getCmp('txtEqITICDescription').reset();
								Ext.getCmp('txtEqTecDescription').reset();
								Ext.getCmp('txtEqEOD').reset();
								
								Ext.Msg.alert('Sucsess', 'Successfully added');
							
								win.close();
								//	Ext.Msg.alert('Message', edate);
							}
					         else{
					        	 Ext.Msg.alert('Error', 'Plese Fill all the felids brfor saving !');
							}
								
						}
					},{
						text : 'Reset',
						width : 150,
						handler : function() {
							Ext.getCmp('txtEquipmentName').reset();
							Ext.getCmp('cmbEqItemType').reset();
							Ext.getCmp('txtEqPrice').reset();
							Ext.getCmp('txtEqSummery').reset();
							Ext.getCmp('cmbEqSupport').reset();
							Ext.getCmp('txtEqFullDescription').reset();
							Ext.getCmp('txtEqITICDescription').reset();
							Ext.getCmp('txtEqTecDescription').reset();
							Ext.getCmp('txtEqEOD').reset();
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
				text : 'Add New Package',
				iconCls : 'add',
				id : 'addPackage_inBulkDD',
				name : 'addPackage_inBulkDD',
				handler : function() {
					var win=null;
					win= Ext.create('Ext.window.Window', {
						title : 'Add New Package',
						width : 450,
						height : 480,
						minWidth : 300,
						minHeight : 200,
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
				text : 'Remove Item in Bulk',
				iconCls : 'remove',
				handler : function(){
					
					var grid = Ext.getCmp('gridEquipmentsBulkView');
					var sm = grid.getSelectionModel();
					var val = sm.getSelection();
					var store = Ext.getStore('EquipmentsBulkStoreGrid');
					
					if(val[0]!=null){
						
						store.remove(val);
						if (store.getCount() > 0) {
						sm.select(0);
						}
						Ext.MessageBox.confirm('Confirm', 'Are you sure, you want to do this?',  function(btn) {
						if(btn === 'yes'){
							var grid = Ext.getCmp('gridEquipmentsBulkView');
							var store = Ext.getStore('EquipmentsBulkStoreGrid');
							store.proxy.extraParams.purpose = 'delete';
							store.proxy.extraParams.value = val[0].get('ID');
							store.load();
							
							setInterval( Ext.Msg.alert('Sucsess', 'Successfully Deleted'),3000);
							
							var grid = Ext.getCmp('gridEquipmentsBulkView');
							var store=grid.getStore('gridEquipmentsBulkView');
							store.proxy.extraParams.purpose = 'Combo';
							store.proxy.extraParams.ID="2";
							store.proxy.extraParams.value=Ext.getCmp('cmbDDPackage').getValue();
							store.load();
						}
						else{
							var grid = Ext.getCmp('gridEquipmentsBulkView');
							var store=grid.getStore('gridEquipmentsBulkView');
							store.proxy.extraParams.purpose = 'Combo';
							store.proxy.extraParams.ID="2";
							store.proxy.extraParams.value=Ext.getCmp('cmbDDPackage').getValue();
							store.load();
				       	}
						});
					
					}
					else{
						Ext.Msg.alert('Error ', "Plese Select one Row befor Pressing Delete");
					}
						

				}
			},{
				text : 'Refresh',
				iconCls : 'refresh',
				handler : function(){
					var grid = Ext.getCmp('gridEquipmentsBulkView');
					var store=grid.getStore('EquipmentsBulkStoreGrid');
					store.proxy.extraParams.purpose = 'Combo';
					store.proxy.extraParams.ID="2";
					store.proxy.extraParams.value=Ext.getCmp('cmbDDPackage').getValue();
					store.load();
			}
		} ],
    	}], 
       initComponent : function() {
			this.callParent(arguments);
       }
    });

Ext.onReady(function(){
	Ext.Ajax.request({
		url : validate_url,
		method : 'POST',
		headers : {
			'Content-Type' : 'application/json'
		},
		params : {
			'type' : 'unique',
			'context' : 'task&group',
			'purpose' : 'add',
		},
		jsonData : {},
		success : function(response) {
			//if success
			if(!response.responseText.match(/*.0.*/)){
				Ext.getCmp('addEquipment_inBulkDD').disable(true);	
				Ext.getCmp('addPackage_inBulkDD').disable(true);	
				//Ext.Msg.alert('Message', response.responseText);
			}
		},
		failure : function(response) {											
		}
	});
	
});