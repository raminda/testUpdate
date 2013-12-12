Ext.define('New.view.MenuDivView', {
	extend : 'Ext.form.Panel',
	alias : 'widget.MenuDiv_View',
	border : false,
	frame : true,
	anchor: '100% 100%',
	height:900,
	layout:'border',
	defaults: {
	    collapsible: true,
	    split: true,
	    animate: true,
	},
	items:[{
		region: 'west',
		xtype : 'Slide_View', 
		width: 275,
	    minSize: 100,
	    maxSize: 250,
		margins: '5 0 0 0',
		id : 'Slide_View',
		name : 'Slide_View',
		listeners: {
	        collapse: function() {
	        	var panel = Ext.getCmp('Body_View');
	        	var panel2 = Ext.getCmp('CanversView');
	            panel2.setWidth(panel.getWidth() -10);
	        },
	        expand: function() {
	        	var panel = Ext.getCmp('Slide_View');
	        	var panel2 = Ext.getCmp('CanversView');
	            panel2.setWidth(panel2.getWidth()- panel.getWidth());
	        }
	    }
	},{		
		collapsible: false,
		xtype : 'Body_View',
		id : 'Body_View',
		region: 'center',
		name : 'Body_View'
	},{
		xtype : 'Menu_View',
		id : 'Menu_View',
		name : 'Menu_View',
		height: 50,
   		minSize: 25,
   		maxSize: 100,
		region: 'north',
	}],
	initComponent : function() {
			this.callParent(arguments);}		
	});

Ext.onReady(function(){ 
	
	Ext.getCmp('CanversView').setVisible(true);
	
	addLibraryIcon('firewall');
	addLibraryIcon('Array');
	addLibraryIcon('Catalyst');
	//addLibraryIcon('InfiniBand');
	addLibraryIcon('PC');
	addLibraryIcon('Server');
	addLibraryIcon('firewall');
	addLibraryIcon('Array');
	addLibraryIcon('Switch');
	addLibraryIcon('Tape Library');
	addLibraryIcon('cloud');

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