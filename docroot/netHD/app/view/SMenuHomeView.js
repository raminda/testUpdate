Ext.define('New.view.SMenuHomeView', {
	extend : 'Ext.form.Panel',
	alias : 'widget.SMenuHome_View',
	title : 'Home',
	layout : 'fit',
	anchor: '100% 100%',
	frame : false,
	border : false,
	bodyPadding : 0,
	items : [ {
		xtype : 'panel',
		bodyPadding : 15,
		items : [{
			xtype : 'button',
			text : 'Projects',
			width : 200,
			handler : function() {
				crt2();
			}
		},/*{
			xtype : 'textfield',
			
			
		}*/
		{
			xtype : 'combobox',
			fieldLabel : 'Eqipment Name',
			id : 'txtType',
			name : 'txtType',
			valueField : 'ItemName',
			displayField:'ItemName',
			selectOnTab : true,
			allowBlank : false,
			msgTarget: 'side',
			width : 400,
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
			xtype : 'button',
			text : 'Eq',
			width : 200,
			id : 'btnType',
			name : 'btnType',
			handler : function() {
				document.getElementById(Ext.getCmp('txtEqipmentType').getValue()+"_edit").value=Ext.getCmp('txtType').getValue();
				document.getElementById(Ext.getCmp('txtEqipmentType').getValue()+"_save").click();
			}
		},{
			xtype : 'textfield',
			fieldLabel : 'Eqipment Type',
			id : 'txtEqipmentType',
			name : 'txtEqipmentType',
			
		},{
			xtype : 'textfield',
			fieldLabel : 'Eqipment Name',
			id : 'txtEqipmentName',
			name : 'txtEqipmentName',
			
		},{
			xtype : 'image',
			fieldLabel : 'Eqipment Name',
			id : 'imageEqipmentName',
			name : 'imageEqipmentName',
			src: '/test-portlet/Img/4.png',
			height : '100px',
			weight : '100px',
			draggable:true
			
		}]		         
	} ], 

	initComponent : function() {
		this.callParent(arguments);
		
		Ext.getCmp('txtEqipmentType').setVisible(false);
		Ext.getCmp('txtEqipmentName').setVisible(false);
		Ext.getCmp('txtType').setVisible(false);
		Ext.getCmp('btnType').setVisible(false);
	}
});
