NetObject=function(){
	 ImageFigure.call(this,"/test-portlet/netHD/draw2d/"+this.type+".png");
	this.outputPort = null;
	this.setDimension(50,50);
};
	
function my2(st) {
	 NetObject.prototype = new  ImageFigure();
	 NetObject.prototype.type=st;
	
	 NetObject.prototype.setWorkflow=function(/*: Workflow*/ workflow){
	 ImageFigure.prototype.setWorkflow.call(this,workflow);
	
	if(workflow!==null && (this.outputPort===null || this.inputPort===null)){
			this.outputPort = new  OutputPort();
		    this.outputPort.setMaxFanOut(5); // It is possible to add "5" Connector to this port
		    this.outputPort.setWorkflow(workflow);
		    this.outputPort.setBackgroundColor(new   Color(245,115,115));
		
		    ////////////////////////////////////////////////////////////////////
		    // INPORTANT: Now you can use the function "End.getPort("output")"!!!
		    //            See in index.html for the usage!!!!
		    //            This is the main differenct to the "connector_via_api1" demo.
		    //
		    this.outputPort.setName("output");
		    ////////////////////////////////////////////////////////////////////
		
		    this.addPort(this.outputPort,this.width,this.height/2);
		    // create a new Port element. Ports can be children of "Node" elements.
		    // (Inheritance: End->Image->Node->Figure->Object)
		    this.inputPort = new  InputPort();
	
		    // set the paintarea/canvas for this port figure
		    this.inputPort.setWorkflow(workflow);
	
		    // set background color of the port
		    this.inputPort.setBackgroundColor(new   Color(115,115,245));
		    this.inputPort.setColor(null);
	
		    ////////////////////////////////////////////////////////////////////
		    // INPORTANT: Now you can use the function "End.getPort("input")"!!!
		    //            See in index.html for the usage!!!!
		    //            This is the main differenct to the "connector_via_api1" demo.
		    //
		    this.inputPort.setName("input");
		    ////////////////////////////////////////////////////////////////////
	
	
	
		    // Add the port to this object at the left/middle position
		    this.addPort(this.inputPort,0,this.height/2);
		  }
	};
	
}