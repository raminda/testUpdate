Ext.define('New.view.SMenuEHomeView', {
	extend : 'Ext.form.Panel',
	alias : 'widget.SMenuEHome_View',
	title : 'Home',
	layout : 'fit',
	anchor: '100% 100%',
	frame : false,
	border : false,
	bodyPadding : 0,
	defaults: {
		labelWidth: 60,
	},
	items : [{
		
		xtype : 'panel',
		bodyPadding : 15,
		items : [{
			xtype : 'button',
			text : 'Vaildtete Diagrm',
			id: 'btnEVaildtete',
			width : 200,
			handler : function() {
				crt2();
				
			}
		},{
        	fieldLabel: 'Company Name',
        	xtype : 'combobox',
			id : 'cmbEDCompany',
			name : 'cmbEDCompany',
			valueField : 'Company',
			displayField:'Company',
			selectOnTab : true,
			allowBlank : false,
			msgTarget: 'side',
			editable:false,
			store : 'CompanyStore',
			width : 200,
            layout: {
                type: 'absolute',
            },   
            listeners: {
            	change:function ( me,newValue , oldValue, eOpts ){                		
            		if(newValue!=null){
            			//enable  Project Name filed clear 
            			Ext.getCmp('cmbEDProject').enable(true);
            		}
            		else{     
        			//disable  Project Name filed clear 
            			Ext.getCmp('cmbEDProject').disable(true);
            		}
    				Ext.getCmp('cmbEDProject').reset();
   
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
        	xtype : 'combobox',
			id : 'cmbEDProject',
			name : 'cmbEDProject',
			valueField : 'ProjectName',
			displayField:'ProjectName',
			allowBlank : false,
			editable:false,
			msgTarget: 'side',
			store : 'ProjectsStore',
			width : 200,
            layout: {
                type: 'absolute',
            },   
            listeners: {
            	change:function ( me, newValue, oldValue, eOpts ){
            		if(Ext.getCmp('cmbEDProject').getValue()!=null){
						Ext.getCmp('cmbEDOption').enable(true);	
            		}
            		else{
            			Ext.getCmp('cmbEDProjectOption').disable(true);		
            		}
            		Ext.getCmp('cmbDOption').reset();
            		
	    	    },
                focus:function( me, The, eOpts ){
                	var store = Ext.getStore('ProjectsStore');
    				store.proxy.extraParams.purpose = 'Combo';
    				store.proxy.extraParams.value="1";	
    				store.proxy.extraParams.ID=Ext.getCmp('cmbEDCompany').getValue();
    				store.load();
                }
          	}
         
        },{
        	fieldLabel: 'Option Name',
        	xtype : 'combobox',
			id : 'cmbEDOption',
			name : 'cmbEDOption',
			valueField : 'OptionID',
			displayField:'OptionID',
			allowBlank : false,
			msgTarget: 'side',
			store : 'VersionMapStore',
			width : 200,
            typeAhead: true ,
            layout: {
                type: 'absolute',
            },
            listeners: {     	
            	change:function ( me, newValue, oldValue, eOpts ){
            		if(Ext.getCmp('cmbEDOption').getValue()!=null){
						Ext.getCmp('cmbEDVersion').enable(true);			
            		}
            		else{
						Ext.getCmp('cmbEDVersion').disable(true); 
            		}
            		
            		Ext.getCmp('cmbEDVersion').reset();
            	},
            	
                focus:function( me, The, eOpts ){
                	var store = Ext.getStore('VersionMapStore');
					store.proxy.extraParams.purpose = 'Combo';
					store.proxy.extraParams.value='1';
					store.proxy.extraParams.ID=Ext.getCmp('cmbEDCompany').getValue();
					store.proxy.extraParams.ID1=Ext.getCmp('cmbEDProject').getValue();
					store.load();
                }
        	}
        },{
        	fieldLabel: 'Version Name',
        	xtype : 'combobox',
			id : 'cmbEDVersion',
			name : 'cmbEDVersion',
			valueField : 'Version',
			displayField:'Version',
			selectOnTab : true,
			allowBlank : false,
			msgTarget: 'side',
			store : 'VersionMapStore2',
			width : 200,
            typeAhead: true ,
            layout: {
                type: 'absolute',
            },
            listeners: {          	
            	change:function ( me, newValue, oldValue, eOpts ){
            		if(Ext.getCmp('cmbEDVersion').getValue()==null){
            			Ext.getCmp('cmbEDSite').disable(true);
            			Ext.getCmp('btnESaveDD').setVisible(false);
            		}
            		else{
            			Ext.getCmp('btnESaveDD').setVisible(true);
            		}
            	},
                focus:function( me, The, eOpts ){
                	var store = Ext.getStore('VersionMapStore2');
    				store.proxy.extraParams.purpose = 'Combo';
    				store.proxy.extraParams.value='2';
    				store.proxy.extraParams.ID1=Ext.getCmp('cmbEDProject').getValue();
    				store.proxy.extraParams.ID2=Ext.getCmp('cmbEDOption').getValue();
					store.load();
                }
        	}
        },{
	       	xtype: 'button',
	        text : 'Get digram',
	        id : 'btnGetDD',
			name : 'btnGetDD',
	        width : 150,
	        flex: 1,
	        layout: {
	            type: 'absolute'
	        },
	        handler : function() {
	        	Ext.getCmp('cmbEDProject').setVisible(false);
				xt.getCmp('cmbEDOption').setVisible(false);
				Ext.getCmp('cmbEDVersion').setVisible(false);
				Ext.getCmp('cmbEDCompany').setVisible(false);
				Ext.getCmp('cmbEDProject').reset();
				Ext.getCmp('btnESaveDD').setVisible(false);
				Ext.getCmp('btnECancelDD').setVisible(false);
				//Ext.getCmp('txtEqipmentName').enableDD = true;
	        }
	   },{
        	xtype: 'button',
	        text : 'Save',
	        id : 'btnESaveDD',
			name : 'btnESaveDD',
	        width : 150,
	        flex: 1,
	        layout: {
	            type: 'absolute'
	        },
	        handler : function() {
	        	var Project=Ext.getCmp('cmbEDProject').getValue();
				var Option=Ext.getCmp('cmbEDOption').getValue();
				var Version=Ext.getCmp('cmbEDVersion').getValue();
				//var json=Ext.getCmp('cmbPrjSite').getValue();
				
				var store = Ext.getStore('ProjectItemsStoreResult');
				store.proxy.extraParams.purpose = 'New';
				store.proxy.extraParams.ID=Ext.getCmp('txtDDJSON1').getValue();
				store.proxy.extraParams.ID1=Ext.getCmp('txtDDJSON2').getValue();
				store.proxy.extraParams.ID2="DD";
				store.proxy.extraParams.ID3=jsonsite;
				var JsonObject= {Project:Project,OptionID:Option,Version: Version};
				var row= Ext.create('New.model.VersionMapModel', JsonObject);
				store.insert(0, row);
	        }
	   },{
	       	xtype: 'button',
	        text : 'Cancel',
	        id : 'btnECancelDD',
			name : 'btnECancelDD',
	        width : 150,
	        flex: 1,
	        layout: {
	            type: 'absolute'
	        },
	        handler : function() {
	        	Ext.getCmp('cmbEDProject').setVisible(false);
				xt.getCmp('cmbEDOption').setVisible(false);
				Ext.getCmp('cmbEDVersion').setVisible(false);
				Ext.getCmp('cmbEDCompany').setVisible(false);
				Ext.getCmp('cmbEDProject').reset();
				Ext.getCmp('btnESaveDD').setVisible(false);
				Ext.getCmp('btnECancelDD').setVisible(false);
				//Ext.getCmp('txtEqipmentName').enableDD = true;
	        }
	   }]
	}],		         
	initComponent : function() {
		this.callParent(arguments);
		
	/*	Ext.getCmp('txtItemName').setVisible(false);
		Ext.getCmp('txtPortType').setVisible(false);
		Ext.getCmp('txtEqipmentID').setVisible(false);
		Ext.getCmp('txtEqipmentName').setVisible(false);
		Ext.getCmp('btnVaildtete').setVisible(false);
		Ext.getCmp('btnDAddEquipment').setVisible(false);
		Ext.getCmp('btnAddConnecion').setVisible(false);
		
		Ext.getCmp('cmbEDCompany').setVisible(false);
		Ext.getCmp('cmbEDProject').setVisible(false);
		Ext.getCmp('cmbEDOption').setVisible(false);
		Ext.getCmp('cmbEDVersion').setVisible(false);
		Ext.getCmp('btnESaveDD').setVisible(false);
		
		Ext.getCmp('txtDDJSON1').setVisible(false);
		Ext.getCmp('txtDDJSON2').setVisible(false);
		Ext.getCmp('btnECancelDD').setVisible(false);*/
	}
});
