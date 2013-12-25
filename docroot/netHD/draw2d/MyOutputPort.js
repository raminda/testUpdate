MyOutputPort=function(_2d21){
OutputPort.call(this,_2d21);
};
MyOutputPort.prototype=new OutputPort;
MyOutputPort.prototype.type="MyOutputPort";
MyOutputPort.prototype.onDrop=function(port){
	Ext.getCmp('cmbDCompany').reset();
	Ext.getCmp('cmbDCompany').setVisible(false);
	Ext.getCmp('cmbDProject').setVisible(false);
	Ext.getCmp('cmbDOption').setVisible(false);
	Ext.getCmp('cmbDVersion').setVisible(false);
	Ext.getCmp('btnSaveDD').setVisible(false);
	Ext.getCmp('btnVaildtete').setVisible(true);
	Ext.getCmp('txtPortType').setVisible(false);
	Ext.getCmp('txtItemName').setVisible(false);

	Ext.getCmp('btnDAddEquipment').setVisible(false);
	Ext.getCmp('btnAddConnecion').setVisible(false);
if(this.getMaxFanOut()<=this.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _2d23=new CommandConnect(this.parentNode.workflow,this,port);
_2d23.setConnection(new ContextmenuConnection());
this.parentNode.workflow.getCommandStack().execute(_2d23);
}

};
MyOutputPort.prototype.onKeyDown=function(_3831,ctrl){
    if(_3831==46&&this.isDeleteable()==true){
      var i=0;
      this.workflow.commandStack.execute(new CommandDelete(this));
      	Ext.getCmp('cmbDCompany').reset();
  		Ext.getCmp('cmbDCompany').setVisible(false);
  		Ext.getCmp('cmbDProject').setVisible(false);
  		Ext.getCmp('cmbDOption').setVisible(false);
  		Ext.getCmp('cmbDVersion').setVisible(false);
  		Ext.getCmp('btnSaveDD').setVisible(false);
  		Ext.getCmp('btnVaildtete').setVisible(true);
  		Ext.getCmp('txtPortType').setVisible(false);
  		Ext.getCmp('txtItemName').setVisible(false);
  		Ext.getCmp('btnAddConnecion').setVisible(false);
    }
    if(ctrl){
      this.workflow.onKeyDown(_3831,ctrl);
    }
  };