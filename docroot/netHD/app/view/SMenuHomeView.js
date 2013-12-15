Ext.define('New.view.SMenuHomeView', {
	extend : 'Ext.form.Panel',
	alias : 'widget.SMenuHome_View',
	title : 'Home',
	layout : 'fit',
	anchor: '100% 100%',
	frame : false,
	border : false,
	bodyPadding : 0,
	defaults: {
		labelWidth: 75,
	},
	items : [{
		
		xtype : 'panel',
		bodyPadding : 15,
		items : [{
			xtype : 'button',
			text : 'Vaildtete Diagrm',
			id: 'btnVaildtete',
			width : 200,
			handler : function() {
				crt2();
			}
		},{
			xtype : 'combobox',
			fieldLabel : 'Eqipment',
			id : 'txtItemName',
			name : 'txtItemName',
			valueField : 'ItemName',
			displayField:'ItemName',
			selectOnTab : true,
			allowBlank : false,
			msgTarget: 'side',
			width : 200,
			editable:false,
			store : 'EquipmentStoreComp',   
	        listeners: {
				focus:function( me, The, eOpts ){
					var store = Ext.getStore('EquipmentStoreComp');
					store.proxy.extraParams.purpose = 'Combo';
					store.proxy.extraParams.value="4";
					store.proxy.extraParams.ID=Ext.getCmp('txtEqipmentName').getValue();;
	    			store.load();
	            }
	    	}
		},{
			xtype : 'textfield',
			fieldLabel : 'Port details',
			id : 'txtPortType',
			width : 200,
			name : 'txtPortType',
			
		},{
			xtype : 'textfield',
			fieldLabel : 'Eqipment ID',
			id : 'txtEqipmentID',
			width : 200,
			name : 'txtEqipmentID',
			
		},{
			xtype : 'textfield',
			fieldLabel : 'txtDDJSON',
			id : 'txtDDJSON1',
			width : 200,
			name : 'txtDDJSON1',
			
		},{
			xtype : 'textfield',
			fieldLabel : 'txtDDJSON',
			id : 'txtDDJSON2',
			width : 200,
			name : 'txtDDJSON2',
			
		},{
			xtype : 'textfield',
			fieldLabel : 'Eqipment Name',
			id : 'txtEqipmentName',
			width : 200,
			name : 'txtEqipmentName',
			
		},{
			xtype : 'button',
			text : 'Add Equipment',
			width : 200,
			id : 'btnDAddEquipment',
			name : 'btnDAddEquipment',
			handler : function(){
				document.getElementById(Ext.getCmp('txtEqipmentID').getValue()+"_edit").value=Ext.getCmp('txtItemName').getValue();
				document.getElementById(Ext.getCmp('txtEqipmentID').getValue()+"_save").click();
				Ext.getCmp('btnVaildtete').setVisible(true);
				Ext.getCmp('btnDAddEquipment').setVisible(false);
				Ext.getCmp('btnAddConnecion').setVisible(false);
				Ext.getCmp('txtItemName').setVisible(false);
				Ext.getCmp('txtPortType').setVisible(false);
				Ext.getCmp('txtItemName').setValue("");
			}
		},{
			xtype : 'button',
			text : 'Add Connecion details',
			width : 200,
			id : 'btnAddConnecion',
			name : 'btnAddConnecion',
			handler : function(){
				document.getElementById(Ext.getCmp('txtEqipmentID').getValue()+"_edit").value=Ext.getCmp('txtPortType').getValue();
				document.getElementById(Ext.getCmp('txtEqipmentID').getValue()+"_save").click();
				Ext.getCmp('btnVaildtete').setVisible(true);
				Ext.getCmp('btnDAddEquipment').setVisible(false);
				Ext.getCmp('btnAddConnecion').setVisible(false);
				Ext.getCmp('txtItemName').setVisible(false);
				Ext.getCmp('txtPortType').setVisible(false);
				Ext.getCmp('txtPortType').setValue("");
			}
		},{
        	fieldLabel: 'Company Name',
        	xtype : 'combobox',
			id : 'cmbDCompany',
			name : 'cmbDCompany',
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
            			Ext.getCmp('cmbDProject').enable(true);
            		}
            		else{     
        			//disable  Project Name filed clear 
            			Ext.getCmp('cmbDProject').disable(true);
            		}
    				Ext.getCmp('cmbDProject').reset();
   
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
			id : 'cmbDProject',
			name : 'cmbDProject',
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
            		if(Ext.getCmp('cmbDProject').getValue()!=null){
						Ext.getCmp('cmbDOption').enable(true);	
            		}
            		else{
            			Ext.getCmp('cmbcmbDProjectOption').disable(true);		
            		}
            		Ext.getCmp('cmbDOption').reset();
            		
	    	    },
                focus:function( me, The, eOpts ){
                	var store = Ext.getStore('ProjectsStore');
    				store.proxy.extraParams.purpose = 'Combo';
    				store.proxy.extraParams.value="1";	
    				store.proxy.extraParams.ID=Ext.getCmp('cmbDCompany').getValue();
    				store.load();
                }
          	}
         
        },{
        	fieldLabel: 'Option Name',
        	xtype : 'combobox',
			id : 'cmbDOption',
			name : 'cmbDOption',
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
            		if(Ext.getCmp('cmbDOption').getValue()!=null){
						Ext.getCmp('cmbDVersion').enable(true);			
            		}
            		else{
						Ext.getCmp('cmbDVersion').disable(true); 
            		}
            		
            		Ext.getCmp('cmbDVersion').reset();
            	},
            	
                focus:function( me, The, eOpts ){
                	var store = Ext.getStore('VersionMapStore');
					store.proxy.extraParams.purpose = 'Combo';
					store.proxy.extraParams.value='1';
					store.proxy.extraParams.ID=Ext.getCmp('cmbDCompany').getValue();
					store.proxy.extraParams.ID1=Ext.getCmp('cmbDProject').getValue();
					store.load();
                }
        	}
        },{
        	fieldLabel: 'Version Name',
        	xtype : 'combobox',
			id : 'cmbDVersion',
			name : 'cmbDVersion',
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
            		if(Ext.getCmp('cmbDVersion').getValue()==null){
            			Ext.getCmp('cmbDSite').disable(true);
            			Ext.getCmp('btnSaveDD').setVisible(false);
            		}
            		else{
            			Ext.getCmp('btnSaveDD').setVisible(true);
            		}
            	},
                focus:function( me, The, eOpts ){
                	var store = Ext.getStore('VersionMapStore2');
    				store.proxy.extraParams.purpose = 'Combo';
    				store.proxy.extraParams.value='2';
    				store.proxy.extraParams.ID1=Ext.getCmp('cmbDProject').getValue();
    				store.proxy.extraParams.ID2=Ext.getCmp('cmbDOption').getValue();
					store.load();
                }
        	}
        },{
        	xtype: 'button',
	        labelWidth: 100,
	        text : 'Save',
	        id : 'btnSaveDD',
			name : 'btnSaveDD',
	        width : 150,
	        flex: 1,
	        layout: {
	            type: 'absolute'
	        },
	        handler : function() {
	        	var Project=Ext.getCmp('cmbDProject').getValue();
				var Option=Ext.getCmp('cmbDOption').getValue();
				var Version=myjson_details;
				var json=Ext.getCmp('cmbPrjSite').getValue();
				
				var store = Ext.getStore('ProjectItemsStoreResult');
				store.proxy.extraParams.purpose = 'New';
				store.proxy.extraParams.ID=Ext.getCmp('txtDDJSON1').getValue();
				store.proxy.extraParams.ID2=Ext.getCmp('txtDDJSON2').getValue();
				var JsonObject= {Project:Project,OptionID:Option,Version: Version};
				var row= Ext.create('New.model.VersionMapModel', JsonObject);
				store.insert(0, row);
	        }
	   }]
	}],		         
	initComponent : function() {
		this.callParent(arguments);
		
		Ext.getCmp('txtItemName').setVisible(false);
		Ext.getCmp('txtPortType').setVisible(false);
		Ext.getCmp('txtEqipmentID').setVisible(false);
		Ext.getCmp('txtEqipmentName').setVisible(false);
		Ext.getCmp('btnVaildtete').setVisible(false);
		Ext.getCmp('btnDAddEquipment').setVisible(false);
		Ext.getCmp('btnAddConnecion').setVisible(false);
		
		Ext.getCmp('cmbDCompany').setVisible(false);
		Ext.getCmp('cmbDProject').setVisible(false);
		Ext.getCmp('cmbDOption').setVisible(false);
		Ext.getCmp('cmbDVersion').setVisible(false);
		Ext.getCmp('btnSaveDD').setVisible(false);
		
		Ext.getCmp('txtDDJSON1').setVisible(false);
		Ext.getCmp('txtDDJSON2').setVisible(false);
	}
});
