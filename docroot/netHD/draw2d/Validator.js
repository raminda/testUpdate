/**
 * @author Raminda
 */
function Validator(txt) {
	var myjson_details="[";
	var obj = eval ("(" + txt + ")"); 
	var WokflowLenth=obj.figures.length;
	var bool=false;
	if(WokflowLenth >0){
		for(var i=0;i<WokflowLenth;i++){
			if(obj.figures[i].annotations.length==0){
				var id=obj.figures[i].id;
				var Doc=gJSN().figures;
				for(var j=0;j<Doc.getSize();j++){
					var _3b4b=Doc.get(j);
					if(_3b4b.id==id){
						_3b4b.onDoubleClick();
					}
				}
				bool=false;
				WokflowLenth=0;
			}
			else{
				//do nothing
			}
		}
		for(var i=0;i<WokflowLenth;i++){
			for(var j=0;j<4;j++){
				var PortsLenth= obj.figures[i].ports[j].connections.length;
				if(PortsLenth >0){
					 for(var k=0;k<PortsLenth;k++){
						var target= obj.figures[i].ports[j].connections[k].target;
						for(var ii=0;ii<WokflowLenth;ii++){
							 for(var jj=0;jj<4;jj++){
								 if(target==obj.figures[ii].ports[jj].id){
									 myjson_details+='{"Pid" : "'+obj.figures[i].id+'","Cid" : "'+obj.figures[ii].id+'","Ptype" : "'+obj.figures[i].subtype+'","Ctype" : "'+obj.figures[ii].subtype+',"Pannot" : "'+obj.figures[i].annotations[0].text+'","Cannot" : "'+obj.figures[ii].annotations[0].text+'"}';
									 bool=true;
								 }
								 else{
									 //do nothind
								 }
							 }
						}
					 }
				 }
				 else{
					 //do nothing
				 }
			 }
		 }
	 }
	 else{
		 bool=false;
	 }
	if(bool){
		alert(myjson_details); 
	}
	else{
		//Ext.Msg.alert('Error', 'each figuer shud bee annotate its own Equeipment\n plese double click the figuer and give coresponding Equipment!! ');
		Ext.Msg.alert('Error', 'No diagrum for validate Or No any Connections Or No Annotaion!');
	}
}