var PackageType = Ext.create('Ext.data.Store', {
    fields: ['PackageType'],
    data : [
        {"PackageType":"Backend machines"},
        {"PackageType":"Accessories"},
        {"PackageType":"Network equipment"}//,
        //{"PackageType":"Third party software"}
    ]
});
var Sitetype = Ext.create('Ext.data.Store', {
    fields: ['SiteID'],
    data : [
        {"SiteID":"Primary"},
        {"SiteID":"DR"},
        {"SiteID":"Test"}
    ]
});


Ext.define('New.view.FormProjectDetailsView', {
	extend : 'Ext.form.Panel',
	alias  : 'widget.ProjectDetails',
	border : false,
	anchor: '73% 100%',
	bodyPadding: 10,
    autoHeight: true,
    id : 'ProjectDetails',
	name : 'ProjectDetails',
    	items: [{
    		xtype : 'form',
    		border : true,
    		items : [{
		        xtype: 'panel',		        
	            items: [{
            		xtype: 'splitter'
                },{
            		xtype: 'splitter'
                },{
	            	fieldLabel: 'Company Name',
			        labelWidth: 250,
	            	xtype : 'combobox',
	    			id : 'cmbPrjCompany',
	    			name : 'cmbPrjCompany',
	    			valueField : 'Company',
	    			displayField:'Company',
	    			selectOnTab : true,
	    			allowBlank : false,
	    			msgTarget: 'side',
	    			editable:false,
	    			store : 'CompanyStore',
	                width : 500,
	                layout: {
	                    type: 'absolute'
	                },   
	                listeners: {
		            	change:function ( me,newValue , oldValue, eOpts ){                		
		            		if(newValue!=null){
		            			//enable  Project Name filed clear 
		            			Ext.getCmp('cmbPrjProject').enable(true);
			    				Ext.getCmp('btnClearAll').enable(true);
			    				Ext.getCmp('gridProjectoutView').setVisible(true);
			    				
			    				var store = Ext.getStore('ProjectItemsStoreResult');
			    				store.proxy.extraParams.purpose = 'Grid';
			    				store.proxy.extraParams.value="1";	
			    				store.proxy.extraParams.ID=Ext.getCmp('cmbPrjCompany').getValue();
			    				store.load();
		            		}
		            		else{     
	            			//disable  Project Name filed clear 
		            			Ext.getCmp('cmbPrjProject').disable(true);
		            		}
		            		
		    				//grid Setting
		            		Ext.getCmp('ProjectItemsResultGridProjectID').setVisible(true);
        					Ext.getCmp('ProjectItemsResultGridOptionID').setVisible(true);
        					Ext.getCmp('ProjectItemsResultGridVersionID').setVisible(true);
		    				Ext.getCmp('ProjectItemsResultGriddate_modified').setVisible(false);
		    				Ext.getCmp('ProjectItemsResultGridPrice').setVisible(false);
		    				Ext.getCmp('ProjectItemsResultGridPackageType').setVisible(false);
		    				Ext.getCmp('ProjectItemsResultGridPcakageUsege').setVisible(false);
		    				Ext.getCmp('ProjectItemsResultGridQuantity').setVisible(false);
		    				Ext.getCmp('ProjectItemsResultGridPackageID').setVisible(false);
		    				Ext.getCmp('ProjectItemsResultGridSiteID').setVisible(false);
		    				Ext.getCmp('ProjectItemsResultGridEOLDate').setVisible(false);
		    				Ext.getCmp('cmbPrjProject').reset();
		   
		            	},
		            	
		                focus:function( me, The, eOpts ){
		                	// load Combo box
		                	var store = Ext.getStore('CompanyStore');
		                	store.proxy.extraParams.purpose = 'Grid';
		                	store.proxy.extraParams.value = '1';
		                	store.load();
		                }
	                }	    
                },{ 
                	fieldLabel: 'Project Name',
                	labelWidth: 250,
		        	xtype : 'combobox',
					id : 'cmbPrjProject',
					name : 'cmbPrjProject',
					valueField : 'ProjectName',
					displayField:'ProjectName',
					allowBlank : false,
					editable:false,
					msgTarget: 'side',
					store : 'ProjectsStore',
	                width : 500,
	                layout: {
	                    type: 'absolute'
	                },   
	                listeners: {
	                	change:function ( me, newValue, oldValue, eOpts ){
	                		if(Ext.getCmp('cmbPrjProject').getValue()!=null){
								Ext.getCmp('cmbPrjOption').enable(true);				
								var store = Ext.getStore('ProjectItemsStoreResult');
			    				store.proxy.extraParams.purpose = 'Grid';
			    				store.proxy.extraParams.ID1=newValue;
			    				store.proxy.extraParams.value="2";	
			    				store.proxy.extraParams.ID=Ext.getCmp('cmbPrjCompany').getValue();
			    				store.load();
								Ext.getCmp('gridProjectoutView').setVisible(true);
								Ext.getCmp('ProjectItemsResultGridProjectID').setVisible(false);	
	                		}
	                		else{
	                			Ext.getCmp('cmbPrjOption').disable(true);		
	                		}
	                		
	                		Ext.getCmp('cmbPrjOption').reset();
	                		
			    	    },
		                focus:function( me, The, eOpts ){
		                	var store = Ext.getStore('ProjectsStore');
		    				store.proxy.extraParams.purpose = 'Combo';
		    				store.proxy.extraParams.value="1";	
		    				store.proxy.extraParams.ID=Ext.getCmp('cmbPrjCompany').getValue();
		    				store.load();
		                }
		          	}
	             
                },{
                	fieldLabel: 'Option Name',
                	labelWidth: 250,
		        	xtype : 'combobox',
					id : 'cmbPrjOption',
					name : 'cmbPrjOption',
					valueField : 'OptionID',
					displayField:'OptionID',
					allowBlank : false,
					msgTarget: 'side',
					store : 'VersionMapStore',
		            width : 500,
		            typeAhead: true ,
		            layout: {
	                    type: 'absolute'
	                },
		            listeners: {     	
	                	change:function ( me, newValue, oldValue, eOpts ){
	                		if(Ext.getCmp('cmbPrjOption').getValue()!=null){
								Ext.getCmp('cmbPrjVersion').enable(true);		
								var store = Ext.getStore('ProjectItemsStoreResult');
			    				store.proxy.extraParams.purpose = 'Grid';
			    				store.proxy.extraParams.ID=newValue;
			    				store.proxy.extraParams.value="3";	
			    				store.proxy.extraParams.ID1=Ext.getCmp('cmbPrjProject').getValue();
			    				store.load();
	        					Ext.getCmp('gridProjectoutView').setVisible(true);
	        					Ext.getCmp('ProjectItemsResultGridSiteID').setVisible(true);
	        					Ext.getCmp('ProjectItemsResultGridOptionID').setVisible(false);
	        					
	                		}
	                		else{
								Ext.getCmp('gridProjectoutView').setVisible(true);
								Ext.getCmp('cmbPrjVersion').disable(true); 
	                		}
	                		
	                		Ext.getCmp('cmbPrjVersion').reset();
	                	},
	                	
	                    focus:function( me, The, eOpts ){
	                    	var store = Ext.getStore('VersionMapStore');
							store.proxy.extraParams.purpose = 'Combo';
							store.proxy.extraParams.value='1';
							store.proxy.extraParams.ID=Ext.getCmp('cmbPrjCompany').getValue();
							store.proxy.extraParams.ID1=Ext.getCmp('cmbPrjProject').getValue();
							store.load();
	                    }
	            	}
                },{
                	fieldLabel: 'Version Name',
                	labelWidth: 250,
		        	xtype : 'combobox',
					id : 'cmbPrjVersion',
					name : 'cmbPrjVersion',
					valueField : 'Version',
					displayField:'Version',
					selectOnTab : true,
					allowBlank : false,
					msgTarget: 'side',
					store : 'VersionMapStore2',
		            width : 500,
		            typeAhead: true ,
		            layout: {
	                    type: 'absolute'
	                },
		            listeners: {          	
		            	change:function ( me, newValue, oldValue, eOpts ){
	                		if(Ext.getCmp('cmbPrjVersion').getValue()==null){
	                			Ext.getCmp('cmbPrjSite').disable(true);	
	                			
	                			Ext.getCmp('ProjectItemsResultGridOptionID').setVisible(true);
	        					Ext.getCmp('ProjectItemsResultGridVersionID').setVisible(true);
			    				Ext.getCmp('ProjectItemsResultGriddate_modified').setVisible(false);
			    				Ext.getCmp('ProjectItemsResultGridPrice').setVisible(false);
			    				Ext.getCmp('ProjectItemsResultGridPackageType').setVisible(false);
			    				Ext.getCmp('ProjectItemsResultGridPcakageUsege').setVisible(false);
			    				Ext.getCmp('ProjectItemsResultGridQuantity').setVisible(false);
			    				Ext.getCmp('ProjectItemsResultGridPackageID').setVisible(false);
			    				Ext.getCmp('ProjectItemsResultGridSiteID').setVisible(false);
	                		}
	                		else{
	                			Ext.getCmp('cmbPrjSite').enable(true);
	                			var store = Ext.getStore('ProjectItemsStoreResult');
			    				store.proxy.extraParams.purpose = 'Grid';
			    				store.proxy.extraParams.ID2=newValue;
			    				store.proxy.extraParams.value="4";	
			    				store.proxy.extraParams.ID1=Ext.getCmp('cmbPrjProject').getValue();
			    				store.proxy.extraParams.ID=Ext.getCmp('cmbPrjOption').getValue();
			    				store.load();
	        					Ext.getCmp('GenerateAll').enable(false);
	        					
	        					Ext.getCmp('ProjectItemsResultGridOptionID').setVisible(false);
	        					Ext.getCmp('ProjectItemsResultGridVersionID').setVisible(false);
			    				Ext.getCmp('ProjectItemsResultGriddate_modified').setVisible(false);
			    				
			    				Ext.getCmp('ProjectItemsResultGridPrice').setVisible(true);
			    				Ext.getCmp('ProjectItemsResultGridPackageType').setVisible(true);
			    				Ext.getCmp('ProjectItemsResultGridPcakageUsege').setVisible(true);
			    				Ext.getCmp('ProjectItemsResultGridQuantity').setVisible(true);
			    				Ext.getCmp('ProjectItemsResultGridPackageID').setVisible(true);
			    				Ext.getCmp('ProjectItemsResultGridSiteID').setVisible(true);
	                		}
	                		
		    				
		    				Ext.getCmp('ProjectItemsResultGridProjectID').setVisible(false);
	                		Ext.getCmp('cmbPrjSite').reset();
	                	},
		                focus:function( me, The, eOpts ){
		                	var store = Ext.getStore('VersionMapStore2');
	        				store.proxy.extraParams.purpose = 'Combo';
	        				store.proxy.extraParams.value='2';
	        				store.proxy.extraParams.ID1=Ext.getCmp('cmbPrjProject').getValue();
	        				store.proxy.extraParams.ID2=Ext.getCmp('cmbPrjOption').getValue();
							store.load();
		                }
		        	}
		        }]
	    	}],
            },{
        		xtype: 'splitter'
            },{
        		xtype: 'splitter'
            },{
            id : 'ProjectDetailspanel',
    		name : 'ProjectDetailspanel',	
	    	xtype : 'form',
    		border : true,
    		items : [{
    			id : 'ProjectDetailsform',
    			name : 'ProjectDetailsform',
    			xtype: 'panel',		        
	            items: [{
            		xtype: 'splitter'
	            },{
	        		xtype: 'splitter'
	            },{
	            	fieldLabel: 'Site Name',
	 	            labelWidth: 250,
	            	xtype : 'combobox',
	    			id : 'cmbPrjSite',
	    			name : 'cmbPrjSite',
	    			valueField : 'SiteID',
	    			displayField:'SiteID',
	    			selectOnTab : true,
	    			allowBlank : false,
	    			msgTarget: 'side',
	    			store : Sitetype,
	                width : 500,
	                typeAhead: true ,
	                layout: {
	                    type: 'absolute'
	                },
	                listeners: {
	                	change: function(){
	            			if(Ext.getCmp('cmbPrjSite').getValue()!=null){
								Ext.getCmp('cmbPrjPackage').enable(true);
								var store = Ext.getStore('ProjectItemsStoreResult');
			    				store.proxy.extraParams.purpose = 'Grid';
			    				store.proxy.extraParams.ID2=Ext.getCmp('cmbPrjVersion').getValue();;
			    				store.proxy.extraParams.value="5";	
			    				store.proxy.extraParams.ID1=Ext.getCmp('cmbPrjProject').getValue();
			    				store.proxy.extraParams.ID=Ext.getCmp('cmbPrjOption').getValue();
			    				store.proxy.extraParams.ID3=Ext.getCmp('cmbPrjSite').getValue();
			    				store.load();
								
								
								Ext.getCmp('btnClearAll').enable(true);
	            			}
	            			else{
	            				Ext.getCmp('cmbPrjPackage').disable(true);
	            			}
            				Ext.getCmp('cmbPrjPackage').reset();
            				
            				/*Ext.getCmp('ProjectItemsResultGridOptionID').setVisible(false);
        					Ext.getCmp('ProjectItemsResultGridVersionID').setVisible(false);
		    				Ext.getCmp('ProjectItemsResultGriddate_modified').setVisible(false);
		    				Ext.getCmp('ProjectItemsResultGridPrice').setVisible(true);
		    				Ext.getCmp('ProjectItemsResultGridPackageType').setVisible(true);
		    				Ext.getCmp('ProjectItemsResultGridPcakageUsege').setVisible(true);
		    				Ext.getCmp('ProjectItemsResultGridQuantity').setVisible(true);
		    				Ext.getCmp('ProjectItemsResultGridPackageID').setVisible(true);
		    				Ext.getCmp('ProjectItemsResultGridSiteID').setVisible(true);
		    				Ext.getCmp('ProjectItemsResultGridProjectID').setVisible(false);*/
                		},          		             
            		}
	        	},{
        			fieldLabel: 'Pacakge Name',
        			labelWidth: 250,
		        	xtype : 'combobox',
					id : 'cmbPrjPackage',
					name : 'cmbPrjPackage',
					valueField : 'ID',
					displayField:'PackageName',
					selectOnTab : true,
					allowBlank : false,
					msgTarget: 'side',
					editable:false,
					store : 'PackageStoreGrid',
		            width : 500,
		            layout: {
	                    type: 'absolute'
	                },
		            listeners: {
	                	change: function(){
							if(Ext.getCmp('cmbPrjPackage').getValue()!=null){
								Ext.getCmp('txtPrjQuntity').enable(true);
								Ext.getCmp('txtPrjUseage').enable(true);
								Ext.getCmp('cmbPrjPcakageType').enable(true);
							}
							else{	
								Ext.getCmp('txtPrjQuntity').disable(true);
								Ext.getCmp('txtPrjUseage').disable(true);
								Ext.getCmp('cmbPrjPcakageType').disable(true);
							}
							Ext.getCmp('txtPrjQuntity').reset();
							Ext.getCmp('cmbPrjPcakageType').reset();
							Ext.getCmp('txtPrjUseage').reset();
							/*Ext.getCmp('ProjectItemsResultGridOptionID').setVisible(false);
        					Ext.getCmp('ProjectItemsResultGridVersionID').setVisible(false);
		    				Ext.getCmp('ProjectItemsResultGriddate_modified').setVisible(false);
		    				Ext.getCmp('ProjectItemsResultGridPrice').setVisible(true);
		    				Ext.getCmp('ProjectItemsResultGridPackageType').setVisible(true);
		    				Ext.getCmp('ProjectItemsResultGridPcakageUsege').setVisible(true);
		    				Ext.getCmp('ProjectItemsResultGridQuantity').setVisible(true);
		    				Ext.getCmp('ProjectItemsResultGridPackageID').setVisible(true);
		    				Ext.getCmp('ProjectItemsResultGridSiteID').setVisible(true);
		    				Ext.getCmp('ProjectItemsResultGridProjectID').setVisible(true);*/
	                	},
	                	              	
	                	
	                    focus:function( me, The, eOpts ){
	                    	var store = Ext.getStore('PackageStoreGrid');
							store.proxy.extraParams.purpose = 'Grid';
							store.load();
	                    }
            		}
		        
		        },{
			        fieldLabel: 'Quntity',
			        labelWidth: 250,
			        	xtype : 'numberfield',
						id : 'txtPrjQuntity',
						name : 'txtPrjQuntity',
						selectOnTab : true,
						allowBlank : false,
						msgTarget: 'side',
			            width : 500,
			            allowNegative: false,
						allowDecimals: false,
						minValue: 1,
			            layout: {
		                    type: 'absolute'
		                },
		        },/*********************************************************************************************/
		        {
		        	 fieldLabel: 'Pcakage Type',
				        labelWidth: 250,
			        	xtype : 'combobox',
						id : 'cmbPrjPcakageType',
						name : 'cmbPrjPcakageType',
						selectOnTab : true,
						allowBlank : false,
						msgTarget: 'side',
						valueField : 'PackageType',
						displayField:'PackageType',
						store : PackageType,
			            width : 500,
			            typeAhead: true ,
			            layout: {
		                    type: 'absolute'
		                },
			            listeners: {
		                	
			                /*focus:function( me, The, eOpts ){
			                	var store = Ext.getStore('ProjectItemsStore4');
								store.proxy.extraParams.purpose = 'Combo';
								store.proxy.extraParams.value='4';
								store.proxy.extraParams.ID1=Ext.getCmp('cmbPrjProject').getValue();
								store.proxy.extraParams.ID2=Ext.getCmp('cmbPrjOption').getValue();
								store.proxy.extraParams.ID3=Ext.getCmp('cmbPrjVersion').getValue();
								store.proxy.extraParams.ID4=Ext.getCmp('cmbPrjSite').getValue();
								store.load();
			                }*/
			        	}
		        },
		        /******************************************************************************************/
		        {
			        fieldLabel: 'Useage',
			        labelWidth: 250,
			        	xtype : 'textfield',
						id : 'txtPrjUseage',
						name : 'txtPrjUseage',
						selectOnTab : true,
						allowBlank : false,
						msgTarget: 'side',
			            width : 500,
		
			        }]
		        
	        	}],
            bbar:[{
	                xtype: 'button',
	                labelWidth: 100,
	                text : 'Save',
	                width : 150,
	                flex: 1,
	                layout: {
	                    type: 'absolute'
	                },
	                handler : function() {
	                	var form = Ext.getCmp('ProjectDetails').getForm();
	                	form.isValid();
	                	
	                	var sts=false;
		            	if(Ext.getCmp('cmbPrjProject').getValue()==null)
		            		Ext.Msg.alert('Message', 'Plese Enter Project name Befor Save!');
		            	else if(Ext.getCmp('cmbPrjOption').getValue()==null)
		            		Ext.Msg.alert('Message', 'Plese Enter Option  name Befor Save!');
		            	else if(Ext.getCmp('cmbPrjVersion').getValue()==null)
		            		Ext.Msg.alert('Message', 'Plese Enter Verstion name Befor Save!');
		            	else if(Ext.getCmp('cmbPrjSite').getValue()==null)
		            		Ext.Msg.alert('Message', 'Plese Enter Site name Befor Save!');
		            	else if(Ext.getCmp('cmbPrjPackage').getValue()==null)
		            		Ext.Msg.alert('Message', 'Plese Enter Pacakges name Befor Save!');
		            	else if(Ext.getCmp('txtPrjQuntity').getValue()==null||Ext.getCmp('txtPrjQuntity').getValue()==0)
		            		Ext.Msg.alert('Message', 'Plese Enter Quntity name Befor Save!(0 is not a valide number)');
		            	else if(Ext.getCmp('cmbPrjPcakageType').getValue()==null||Ext.getCmp('cmbPrjPcakageType').getValue()==0)
		            		Ext.Msg.alert('Message', 'Plese Enter Pcakage Type Befor Save!');
		            	else if(Ext.getCmp('txtPrjUseage').getValue()==null||Ext.getCmp('txtPrjUseage').getValue()==0)
		            		Ext.Msg.alert('Message', 'Plese Enter Useage Description Befor Save!');
		            	else{
		            		
			            	var Project=Ext.getCmp('cmbPrjProject').getValue();
							var Option=Ext.getCmp('cmbPrjOption').getValue();
							var Version=Ext.getCmp('cmbPrjVersion').getValue();
							var site=Ext.getCmp('cmbPrjSite').getValue();
							var Package=Ext.getCmp('cmbPrjPackage').getValue();
							var Quntity=Ext.getCmp('txtPrjQuntity').getValue();	
							var PackageType=Ext.getCmp('cmbPrjPcakageType').getValue();
							var PcakageUsege=Ext.getCmp('txtPrjUseage').getValue();
							var store = Ext.getStore('ProjectItemsStoreResult');
							store.proxy.extraParams.purpose = 'New';
							var JsonObject= {Project:Project,OptionID:Option,Version: Version,SiteID:site,PackageName:Package,Quantity:Quntity,PcakageUsege:PcakageUsege,PackageType:PackageType};
							var row= Ext.create('New.model.VersionMapModel', JsonObject);
							store.insert(0, row);
							sts=true;
		            	
							if(sts){
								var store = Ext.getStore('ProjectItemsStoreResult');
			    				store.proxy.extraParams.purpose = 'Grid';
			    				store.proxy.extraParams.ID2=Ext.getCmp('cmbPrjVersion').getValue();;
			    				store.proxy.extraParams.value="5";	
			    				store.proxy.extraParams.ID1=Ext.getCmp('cmbPrjProject').getValue();
			    				store.proxy.extraParams.ID=Ext.getCmp('cmbPrjOption').getValue();
			    				store.proxy.extraParams.ID3=Ext.getCmp('cmbPrjSite').getValue();
			    				store.load();
			    				
								Ext.getCmp('gridProjectoutView').setVisible(true);
			            		Ext.getCmp('txtPrjUseage').reset();
								Ext.getCmp('cmbPrjPcakageType').reset();
			                	Ext.getCmp('txtPrjQuntity').reset();
			                	Ext.getCmp('cmbPrjPackage').reset();
			                	
			            	
			                	
		            		}
		            	}
	                }
	            }, {
	                xtype: 'splitter'
	            },{
	                xtype: 'splitter'
	            },{
	                xtype: 'button',
	                labelWidth: 100,
	                id : 'btnClearAll',
					name : 'btnClearAll',
	                text : 'Clear All',
	                width : 150,
	                flex: 1,
	                layout: {
	                    type: 'absolute'
	                },
	                handler : function() {
	                	
	                	Ext.getCmp('txtPrjQuntity').disable(true);
	                	Ext.getCmp('txtPrjQuntity').reset();
	                	Ext.getCmp('cmbPrjPackage').disable(true);
	                	Ext.getCmp('cmbPrjPackage').reset();
	                	Ext.getCmp('cmbPrjSite').reset();
						
						Ext.getCmp('txtPrjUseage').disable(true);
						Ext.getCmp('cmbPrjPcakageType').reset();
						Ext.getCmp('txtPrjUseage').reset();
						Ext.getCmp('cmbPrjPcakageType').disable(true);
						
	                	Ext.getCmp('btnClearAll').disable(true);
	                	
	                	var store = Ext.getStore('ProjectItemsStoreResult');
	    				store.proxy.extraParams.purpose = 'Grid';
	    				store.proxy.extraParams.ID2=Ext.getCmp('cmbPrjVersion').getValue();;
	    				store.proxy.extraParams.value="5";	
	    				store.proxy.extraParams.ID1=Ext.getCmp('cmbPrjProject').getValue();
	    				store.proxy.extraParams.ID=Ext.getCmp('cmbPrjOption').getValue();
	    				store.proxy.extraParams.ID3=Ext.getCmp('cmbPrjSite').getValue();
	    				store.load();
	                }
	            }]
    		},{
        		xtype: 'splitter'
            },{
        		xtype: 'splitter'
            },{
        		xtype: 'splitter'
            },{
        		xtype: 'splitter'
            },{
			xtype: 'splitter'
		},{
    		xtype: 'splitter'
        },{
			xtype : 'form',
    		border : false,
    		items : [{
    			xtype: 'panel',		        
	            bbar: [{
		    	//	xtype: 'button',
		    		id : 'GenerateAll',
					name : 'GenerateAll',
	                text : 'Generate Project to Excel',
	                width : 150,
	                flex: 1,
	                layout: {
	                    type: 'absolute'
	                },
	                handler : function() {
	                	
						if(Ext.getCmp('cmbPrjProject').getValue()!=null && Ext.getCmp('cmbPrjVersion').getValue()!=null  && Ext.getCmp('cmbPrjOption').getValue()!=null ){
						
							var store = Ext.getStore('my');
				            	store.proxy.extraParams.purpose="ExcelCreate";
				        		store.proxy.extraParams.ID1=Ext.getCmp('cmbPrjProject').getValue();
								store.proxy.extraParams.ID2=Ext.getCmp('cmbPrjOption').getValue();
								store.proxy.extraParams.ID3=Ext.getCmp('cmbPrjVersion').getValue();	
							var win = Ext.create('Ext.window.Window', {
								title : 'Excel Genarating Window',
								width : 450,
								height : 250,
								minWidth : 300,
								minHeight : 200,
								layout : 'fit',
								plain : true,
								items : [{
									xtype : 'GenerateExcel',
								}],
								buttons : [],
							});
							win.show();
								
							store.load();}
							else{
							Ext.Msg.alert('Message', 'Plese Enter values!');}
							}
					
            	},{
            		id : 'EditeProjrct',
					name : 'EditeProjrct',
	                text : 'Edit Project',
	                width : 150,
	                flex: 1,
	                layout: {
	                    type: 'absolute'
	                },
	                handler : function() {
	                	Ext.getCmp('cmbPrjSite').reset();
	                	Ext.getCmp('cmbPrjPackage').reset();
	                	Ext.getCmp('cmbPrjPackage').reset();
	                	Ext.getCmp('ProjectDetailspanel').setVisible(true);
	                	Ext.getCmp('RestProjrct').setVisible(true);
	                	Ext.getCmp('EditeProjrct').setVisible(false);
	                }
            	},{
            		id : 'RestProjrct',
					name : 'RestProjrct',
	                text : 'Hide project details adding menu',
	                width : 150,
	                flex: 1,
	                layout: {
	                    type: 'absolute'
	                },
	                handler : function() {
	                	Ext.getCmp('ProjectDetailspanel').setVisible(false);
	                	Ext.getCmp('RestProjrct').setVisible(false);
	                	Ext.getCmp('EditeProjrct').setVisible(true);
	                	
	                	var form = Ext.getCmp('AddProjectDetails').getForm();
	    	        	form.reset(true);
	                	
	                	var store = Ext.getStore('ProjectItemsStoreResult');
    	        		store.proxy.extraParams.ID1=Ext.getCmp('cmbPrjProject').getValue();
    					store.proxy.extraParams.ID2=Ext.getCmp('cmbPrjOption').getValue();
    					store.proxy.extraParams.ID3=Ext.getCmp('cmbPrjVersion').getValue();
	        			store.proxy.extraParams.value = '6';
	        			store.proxy.extraParams.purpose = 'Combo';
    					store.load();
	                }
            	},{
            		id : 'Clearall',
					name : 'Clearall',
	                text : 'Reset all',
	                width : 150,
	                flex: 1,
	                layout: {
	                    type: 'absolute'
	                },
	                handler : function() {
	                	var form = Ext.getCmp('ProjectDetails').getForm();
	    	        	form.reset(true);
	    	        	Ext.getCmp('gridProjectoutView').setVisible(false);
	    	        	Ext.getCmp('ProjectDetailspanel').setVisible(false);
	    	        	Ext.getCmp('RestProjrct').disabledisable(false);
	                	Ext.getCmp('EditeProjrct').disable(false);
	                	Ext.getCmp('GenerateAll').disable(false);
	                }
            	}]
    		}]
	
		},{
			xtype: 'splitter'
		},{
    		xtype: 'splitter'
        },{
    		xtype: 'splitter'
        },{
    		xtype: 'splitter'
        },{
        	//collapsible:true,
        	xtype: 'panel',	
        	id : 'gridProjectoutView',
    		name : 'gridProjectoutView',
        	items: [{
	        	xtype : 'ProjectsItemsGrids',
	    		border : false,
	    		autoHeight: true,
	    		autoScroll: true,
 		    		
			}],
        	
        }],
    	
    	
    
	initComponent : function() {
		this.callParent(arguments);
		Ext.getCmp('gridProjectoutView').setVisible(false);
		Ext.getCmp('cmbPrjCompany').enable(true);
		Ext.getCmp('cmbPrjOption').disable(true); 
		Ext.getCmp('cmbPrjVersion').disable(true);
		Ext.getCmp('cmbPrjProject').disable(true);
		Ext.getCmp('cmbPrjPackage').disable(true);
		Ext.getCmp('cmbPrjSite').disable(true);
		Ext.getCmp('txtPrjQuntity').disable(true);
		Ext.getCmp('txtPrjUseage').disable(true);
		Ext.getCmp('cmbPrjPcakageType').disable(true);
		Ext.getCmp('cmbPrjPcakageType').disable(true);
		Ext.getCmp('GenerateAll').disable(false);
		Ext.getCmp('ProjectDetailspanel').setVisible(false);
		
		
		Ext.getCmp('RestProjrct').setVisible(false);
		
	}
        });