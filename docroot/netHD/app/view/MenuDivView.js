Ext.define('New.view.MenuDivView', {
	extend : 'Ext.form.Panel',
	alias : 'widget.MenuDiv_View',
	border : false,
	frame : true,
	anchor: '100% 100%',
	height:800,
	layout : {
		align: 'stretch', 
		type : 'hbox',
		padding : 5
	},
	items:[{
		anchor: '24% 100%',
		type : 'hbox',
		flex : 24,
		xtype : 'Slide_View',
		id : 'Slide_View',
		name : 'Slide_View'
	},{
		anchor: '1% 100%',
		flex : 1,
		type : 'hbox',
    	xtype: 'splitter'
    },{			
    	anchor: '74% 100%',
    	flex : 74,
		xtype : 'Body_View',
		id : 'Body_View',
		type : 'hbox',
		name : 'Body_View'
	}],
	
	tbar :[{
        collapsible: true,
		anchor: '100% 50%',
		xtype : 'Menu_View',
		id : 'Menu_View',
		name : 'Menu_View',
		flex : 1
	}],
	initComponent : function() {
			this.callParent(arguments);		
			//Ext.getCmp('Slide_View').setVisible(false);
			//Ext.getCmp('Canvers_View').setVisible(false);
		},
/*listeners: {
    click : function(){
       // element: 'el', //bind to the underlying el property on the panel
        //fn: function(){ console.log('click el'); }
    	Ext.Msg.alert('Status', 'Changes saved successfully.');
    },
    dblclick:function(){
        console.log('dblclick body');
        alert('Status', 'Changes saved successfully.');
    }
},*/
	});

Ext.onReady(function(){ 
	});