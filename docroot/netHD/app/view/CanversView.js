/**
 * 
 */
Ext.define('New.view.CanversView', {
	extend : 'Ext.form.Panel',
	alias : 'widget.Canvers_View',
	border : false,
	frame : false,
	anchor: '100% 100%',
	height:800,
	items :[{
    	flex : 1,
		html: "<div id='icons_div'></div><div id='center1' class='x-layout-active-content'><div  id='paintarea' style='width:1000px;height:1000px;'></div></div>",
		xtype: 'panel',
		type : 'hbox'
        	
	}],
	
	initComponent : function() {
		this.callParent(arguments);
		 
	     /*workflow.scrollArea = document.getElementById("center1").parentNode;
	              
		addLibraryIcon('a100baset_hub');
		addLibraryIcon('asa');
		addLibraryIcon('workstation');

	   var droptarget=new Ext.dd.DropTarget("center1",{ddGroup:'TreeDD'});
	   droptarget.notifyDrop=function(dd, e, data){
        if(data.name) {
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
           else	{
        	   workflow.addFigure(eval("new "+data.name+"()"),e.xy[0]-xOffset+scrollLeft,e.xy[1]-yOffset+scrollTop);
           }
        }
	  }
	}*/}
});