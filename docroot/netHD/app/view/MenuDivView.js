Ext.define('New.view.MenuDivView', {
	extend : 'Ext.form.Panel',
	alias : 'widget.MenuDiv_View',
	border : false,
	frame : true,
	anchor: '100% 100%',
	height:1000,
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
			this.callParent(arguments);}		
	});

Ext.onReady(function(){ 
	
	Ext.getCmp('CanversView').setVisible(true);
	
	addLibraryIcon('a100baset_hub');
	addLibraryIcon('asa');
	addLibraryIcon('workstation');

	var droptarget=new Ext.dd.DropTarget("center1",{ddGroup:'TreeDD'});
	droptarget.notifyDrop=function(dd, e, data){
		if(data.name){
       var xOffset    = workflow.getAbsoluteX();
       var yOffset    = workflow.getAbsoluteY();
       var scrollLeft = workflow.getScrollLeft();
       var scrollTop  = workflow.getScrollTop();
       if(typeof(data.pic) != "undefined") {
	     var el = document.getElementById("drag_" + data.type);
	     var aWidth = 32;
	     var aHeight = 32;
	     if (el) {
	       aWidth = el.width;
	       aHeight = el.height;
	     }
	     var aFig = eval("new "+data.name+"()");
	     aFig.setDimension(aWidth, aHeight);
	     aFig.setPic(data.pic);
	     aFig.subtype = data.type;
         workflow.addFigure(aFig,e.xy[0]-xOffset+scrollLeft,e.xy[1]-yOffset+scrollTop);
       } 
       else {
    	   workflow.addFigure(eval("new "+data.name+"()"),e.xy[0]-xOffset+scrollLeft,e.xy[1]-yOffset+scrollTop);
       }
       return true;
    	}
	};
	Ext.getCmp('CanversView').setVisible(false);
});