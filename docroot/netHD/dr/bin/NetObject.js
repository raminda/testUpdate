draw2d.NetObject=function(){
	//alert(this.type);
	draw2d.ImageFigure.call(this,"/test-portlet/netHD/dr/bin/"+this.type+".png");
	this.outputPort=null;this.setDimension(50,50);
	};
function my2(st) {
	//alert("j1 :"+st);
	draw2d.NetObject.prototype=new draw2d.ImageFigure();
	draw2d.NetObject.prototype.type=st;
	draw2d.NetObject.prototype.setWorkflow=function(_ac0){
		draw2d.ImageFigure.prototype.setWorkflow.call(this,_ac0);
		if(_ac0!==null&&this.outputPort===null){
			this.outputPort=new draw2d.OutputPort();
			this.outputPort.setMaxFanOut(5);
			this.outputPort.setWorkflow(_ac0);
			this.outputPort.setBackgroundColor(new draw2d.Color(245,115,115));
			this.addPort(this.outputPort,this.width,this.height/2);
		}
		if(_ac0!==null&&this.inputPort===null){
			this.inputPort=new draw2d.InputPort();
			this.inputPort.setMaxFanOut(5);
			this.inputPort.setWorkflow(_ac0);
			this.inputPort.setBackgroundColor(new draw2d.Color(245,115,115));
			this.addPort(this.inputPort,0,this.height/2);
		}
	};
}