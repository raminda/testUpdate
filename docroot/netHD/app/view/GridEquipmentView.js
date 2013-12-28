Ext.define('New.view.GridEquipmentView', {
	extend : 'Ext.form.Panel',
	alias : 'widget.EquipmentGrid',
	title : 'Equipment View',
	height :750,
	frame : true,
	border : false,
	bodyPadding : 0,
	items : [{
		xtype : 'gridpanel',
		scroll : true,
		border : false,
		columnLines : true,
		id : 'gridEquipmentView',
		name : 'gridEquipmentView',
		store : 'EquipmentStoreGrid',
		overflowX : 'auto',

		viewConfig: {
            forceFit: true
		},
		fieldStyle: {
		     'fontFamily'   : 'courier new',
		     'fontSize'     : '20px',
		},
		columns :[ /*{
			header : 'Equipment ID',
			dataIndex : 'ID',	
	
		  },*/ {
			  flex : 1,
			  header : 'Equipment Name',
			  dataIndex : 'ItemName',
	
		  },{
			  flex : 1,
			  header : 'Equipment Type',
			  dataIndex : 'itemtypes',
	
		  },{
			  flex : 1,
			  header : 'Equipment Summary',
			  dataIndex : 'Summary',	
	
		  },{
			  flex : 1,
			  header : 'ITIC Description',
			  dataIndex : 'ITIC_Descrip',
	
		  },{
			  flex : 1,
			  header : 'Comments ',
			  dataIndex : 'Comments',
	
		  },{
			  flex : 1,
			  header : 'End of life date',
			  dataIndex : 'EOLDate',
	
		  },{
			 flex : 1,
			 header : 'Equipment Price',
			 dataIndex : 'Price',
	
		  }],
         tbar : [ {
				text : 'Add Equipment',
				iconCls : 'add',
				handler : function() {
					var win =null;
					win= Ext.create('Ext.window.Window', {
						title : 'Add New Equipment',
						width : 450,
						height : 550,
						minWidth : 300,
						minHeight : 500,
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
									var grid = Ext.getCmp('gridEquipmentView');
									var store = grid.getStore('EquipmentStoreGrid');
									store.proxy.extraParams.purpose='Grid';
									store.load();
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
				}, {
					text : 'Remove Equipment',
					iconCls : 'remove',
					handler : function(){
						var grid = Ext.getCmp('gridEquipmentView');
						var sm = grid.getSelectionModel();
						var val = sm.getSelection();
						var store = grid.getStore('EquipmentStoreGrid');
						if(val[0]!=null){
							store.remove(val);
							if (store.getCount() > 0) {
								sm.select(0);
							}
							Ext.MessageBox.confirm('Confirm', 'Are you sure, you want to do this?',  function(btn) {
								if(btn === 'yes'){
									var store =  Ext.getStore('EquipmentStore');
									store.proxy.extraParams.purpose = 'delete';
									store.proxy.extraParams.value = val[0].get('ItemName');
									store.load();
							
									Ext.Msg.alert('Sucsess', 'Successfully Deleted');
									
									var grid = Ext.getCmp('gridEquipmentView');
									var store = grid.getStore('EquipmentStoreGrid');
									store.proxy.extraParams.purpose='Grid';
									store.load();
								}
							});
							var grid = Ext.getCmp('gridEquipmentView');
							var store = grid.getStore('EquipmentStoreGrid');
							store.proxy.extraParams.purpose='Grid';
							store.load();
						}
						else{
							Ext.Msg.alert('Error ', "Plese Select one Row befor Pressing Delete");
						}
						}
					},{
					text : 'Refresh',
					iconCls : 'refresh',
					handler : function(){
						var grid = Ext.getCmp('gridEquipmentView');
						var store = grid.getStore('EquipmentStoreGrid');
						store.proxy.extraParams.purpose='Grid';
						store.load();
				}
			} ],
			listeners : {
				itemdblclick: function(me, record, item, index, e, eOpts ){
					var grid = Ext.getCmp('gridEquipmentView');
					var sm = grid.getSelectionModel();
					var val = sm.getSelection();
					var Titel = val[0].get('ItemName');
					win= Ext.create('Ext.window.Window', {
						title : Titel,
						width : 450,
						height : 550,
						minWidth : 300,
						minHeight : 500,
						layout : 'fit',
						plain : true,
						items : [ {
							xtype : 'UpdateEquiment'
						} ],

						buttons : [{
							text : 'Update',
							width : 150,
							handler : function() {
								
								var Name = Ext.getCmp('txtEqUpEquipmentName').getValue();
								var ItemType = Ext.getCmp('cmbEqUpItemType').getValue();
								var Price = Ext.getCmp('txtEqUpPrice').getValue();
								var Summary=Ext.getCmp('txtEqUpSummery').getValue();
								var support=Ext.getCmp('cmbEqUpSupport').getValue();
								var Comments = Ext.getCmp('txtEqUpComments').getValue();
								var ITICDescription = Ext.getCmp('txtEqUpITICDescription').getValue();
								var edate= Ext.getCmp('txtEqUpEOD').getValue();	
								var ID =Ext.getCmp('cmbEqUpID').getValue();
								
								var Support=support.toString();
								
								if(Support=="This is a base Item"){
									Support='Base';
								}
								 var form = Ext.getCmp('UpdateEquiment').getForm();
								
								 if(form.isValid()){
										
									 var date = new Date(edate),
									 mnth = ("0" + (date.getMonth()+1)).slice(-2),
									 day  = ("0" + date.getDate()).slice(-2);
									 var EOL=[ date.getFullYear(), mnth, day ].join("-");
									   
									 var store = Ext.getStore('EquipmentStore');
									 store.proxy.extraParams.purpose = 'Update';
									 store.proxy.extraParams.ID=Support;
									 store.proxy.extraParams.value=Ext.getCmp('txtEqUpEquipmentCName').getValue();
									 var JsonObject= {ID:ID,ItemName:Name,itemtypes:ItemType,Summary: Summary,Comments:Comments,ITIC_Descrip:ITICDescription,Price:Price,EOLDate:EOL};
									 var row= Ext.create('New.model.EquipmentModel', JsonObject);
									 store.insert(0, row);
									 
									 Ext.Msg.alert('Sucsess', 'Successfully Updated');
									 
									 var grid = Ext.getCmp('gridEquipmentView');
									 var store = grid.getStore('EquipmentStoreGrid');
									 store.proxy.extraParams.purpose='Grid';
									 store.load();
									 
									 win.close();
									 //Ext.Msg.alert('Sucsess', Support);
									}
								 else{
									 Ext.Msg.alert('Error', 'Plese Fill all the feied brfor saving !');
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