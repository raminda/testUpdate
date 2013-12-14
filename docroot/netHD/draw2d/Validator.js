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
				Ext.Msg.alert('Error', 'each figuer shud bee annotate its own Equeipment\n plese double click the figuer and give coresponding Equipment!! ');
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
									 myjson_details+='{"Pid" : "'+obj.figures[i].id+'","Cid" : "'+obj.figures[ii].id+'","Ptype" : "'+obj.figures[i].subtype+'","Ctype" : "'+obj.figures[ii].subtype+'","Pannot" : "'+obj.figures[i].annotations[0].text+'","Cannot" : "'+obj.figures[ii].annotations[0].text+'"},';
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
		myjson_details+="{}]";
	}
	else{
		 bool=false;
		 Ext.Msg.alert('Error', 'No diagrum for validate Or No any Connections!');
			
	}
	//alert(myjson_details);
	var objo = eval ("(" + myjson_details + ")"); 
	var jLenth=objo.length;
	//alert(jLenth);
	if(jLenth>0){
		for(var i=0;i<jLenth-1;i++){
			obj2=objo[i];
			if((obj2.Ptype=='Server' && obj2.Ctype=='Server')||(obj2.Ptype=='Server' && obj2.Ctype=='Site')||(obj2.Ptype=='Site' && obj2.Ctype=='Server')||(obj2.Ptype=='Server' && obj2.Ctype=='Router')||(obj2.Ptype=='Router' && obj2.Ctype=='Server')||(obj2.Ptype=='Server' && obj2.Ctype=='cloud')||(obj2.Ptype=='cloud' && obj2.Ctype=='Server')||(obj2.Ptype=='Server' && obj2.Ctype=='firewall')||(obj2.Ptype=='firewall' && obj2.Ctype=='Server')||(obj2.Ptype=='Server' && obj2.Ctype=='Catalyst')||(obj2.Ptype=='Catalyst' && obj2.Ctype=='Server')||(obj2.Ptype=='Server' && obj2.Ctype=='PC')||(obj2.Ptype=='PC' && obj2.Ctype=='Server')||(obj2.Ptype=='Server' && obj2.Ctype=='Array')||(obj2.Ptype=='Array' && obj2.Ctype=='Server')){
				Ext.Msg.alert('Warning', obj2.Ptype +" & "+obj2.Ctype +" not compatible connection for "+obj2.Cannot+" and "+obj2.Pannot);
			}
			else if((obj2.Ptype=='Site' && obj2.Ctype=='firewall')||(obj2.Ptype=='firewall' && obj2.Ctype=='Site')||(obj2.Ptype=='firewall' && obj2.Ctype=='Tape Library')||(obj2.Ptype=='Tape Library' && obj2.Ctype=='firewall')||(obj2.Ptype=='firewall' && obj2.Ctype=='firewall')||(obj2.Ptype=='firewall' && obj2.Ctype=='Catalyst')||(obj2.Ptype=='Catalyst' && obj2.Ctype=='firewall')||(obj2.Ptype=='firewall' && obj2.Ctype=='PC')||(obj2.Ptype=='PC' && obj2.Ctype=='firewall')||(obj2.Ptype=='firewall' && obj2.Ctype=='Array')||(obj2.Ptype=='Array' && obj2.Ctype=='firewall')||(obj2.Ptype=='firewall' && obj2.Ctype=='Switch')||(obj2.Ptype=='Switch' && obj2.Ctype=='firewall')||(obj2.Ptype=='firewall' && obj2.Ctype=='SAN')||(obj2.Ptype=='SAN' && obj2.Ctype=='firewall')){
				Ext.Msg.alert('Warning', obj2.Ptype +" & "+obj2.Ctype +" not compatible connection for "+obj2.Cannot+" and "+obj2.Pannot);
			}
			else if((obj2.Ptype=='Site' && obj2.Ctype=='Switch')||(obj2.Ptype=='Switch' && obj2.Ctype=='Site')||(obj2.Ptype=='Switch' && obj2.Ctype=='Array')||(obj2.Ptype=='Array' && obj2.Ctype=='Switch')||(obj2.Ptype=='Switch' && obj2.Ctype=='cloud')||(obj2.Ptype=='Switch' && obj2.Ctype=='cloud')){
				Ext.Msg.alert('Warning', obj2.Ptype +" & "+obj2.Ctype +" not compatible connection for "+obj2.Cannot+" and "+obj2.Pannot);
			}
			else if((obj2.Ptype=='Site' && obj2.Ctype=='cloud')||(obj2.Ptype=='cloud' && obj2.Ctype=='Site')||(obj2.Ptype=='cloud' && obj2.Ctype=='Tape Library')||(obj2.Ptype=='Tape Library' && obj2.Ctype=='cloud')||(obj2.Ptype=='cloud' && obj2.Ctype=='Catalyst')||(obj2.Ptype=='Catalyst' && obj2.Ctype=='cloud')||(obj2.Ptype=='cloud' && obj2.Ctype=='PC')||(obj2.Ptype=='PC' && obj2.Ctype=='cloud')||(obj2.Ptype=='cloud' && obj2.Ctype=='Array')||(obj2.Ptype=='Array' && obj2.Ctype=='cloud')||(obj2.Ptype=='cloud' && obj2.Ctype=='SAN')||(obj2.Ptype=='SAN' && obj2.Ctype=='cloud')||(obj2.Ptype=='cloud' && obj2.Ctype=='Router')||(obj2.Ptype=='Router' && obj2.Ctype=='cloud')){
				Ext.Msg.alert('Warning', obj2.Ptype +" & "+obj2.Ctype +" not compatible connection for "+obj2.Cannot+" and "+obj2.Pannot);
			}
			else if((obj2.Ptype=='Site' && obj2.Ctype=='Array')||(obj2.Ptype=='Array' && obj2.Ctype=='Site')||(obj2.Ptype=='Array' && obj2.Ctype=='Tape Library')||(obj2.Ptype=='Tape Library' && obj2.Ctype=='Array')||(obj2.Ptype=='Array' && obj2.Ctype=='Array')||(obj2.Ptype=='Array' && obj2.Ctype=='Catalyst')||(obj2.Ptype=='Catalyst' && obj2.Ctype=='Array')||(obj2.Ptype=='Array' && obj2.Ctype=='PC')||(obj2.Ptype=='PC' && obj2.Ctype=='Array')||(obj2.Ptype=='Array' && obj2.Ctype=='Router')||(obj2.Ptype=='Router' && obj2.Ctype=='Array')){
				Ext.Msg.alert('Warning', obj2.Ptype +" & "+obj2.Ctype +" not compatible connection for "+obj2.Cannot+" and "+obj2.Pannot);
			}
			else if((obj2.Ptype=='Site' && obj2.Ctype=='Tape Library')||(obj2.Ptype=='Tape Library' && obj2.Ctype=='Site')||(obj2.Ptype=='Tape Library' && obj2.Ctype=='Tape Library')||(obj2.Ptype=='Tape Library' && obj2.Ctype=='Catalyst')||(obj2.Ptype=='Catalyst' && obj2.Ctype=='Tape Library')||(obj2.Ptype=='Tape Library' && obj2.Ctype=='PC')||(obj2.Ptype=='PC' && obj2.Ctype=='Tape Library')||(obj2.Ptype=='Tape Library' && obj2.Ctype=='Router')||(obj2.Ptype=='Router' && obj2.Ctype=='Tape Library')){
				Ext.Msg.alert('Warning', obj2.Ptype +" & "+obj2.Ctype +" not compatible connection for "+obj2.Cannot+" and "+obj2.Pannot);
			}
			else if((obj2.Ptype=='Site' && obj2.Ctype=='SAN')||(obj2.Ptype=='SAN' && obj2.Ctype=='Site')||(obj2.Ptype=='SAN' && obj2.Ctype=='Catalyst')||(obj2.Ptype=='Catalyst' && obj2.Ctype=='SAN')||(obj2.Ptype=='SAN' && obj2.Ctype=='PC')||(obj2.Ptype=='PC' && obj2.Ctype=='SAN')||(obj2.Ptype=='SAN' && obj2.Ctype=='SAN')||(obj2.Ptype=='SAN' && obj2.Ctype=='Router')||(obj2.Ptype=='Router' && obj2.Ctype=='SAN')){
				Ext.Msg.alert('Warning', obj2.Ptype +" & "+obj2.Ctype +" not compatible connection for "+obj2.Cannot+" and "+obj2.Pannot);
			}
			else if((obj2.Ptype=='Router' && obj2.Ctype=='PC')||(obj2.Ptype=='PC' && obj2.Ctype=='Router')){
				Ext.Msg.alert('Warning', obj2.Ptype +" & "+obj2.Ctype +" not compatible connection for "+obj2.Cannot+" and "+obj2.Pannot);
			}
			else if((obj2.Ptype=='Site' && obj2.Ctype=='PC')||(obj2.Ptype=='PC' && obj2.Ctype=='Site')||(obj2.Ptype=='PC' && obj2.Ctype=='Catalyst')||(obj2.Ptype=='Catalyst' && obj2.Ctype=='PC')||(obj2.Ptype=='PC' && obj2.Ctype=='PC')){
				Ext.Msg.alert('Warning', obj2.Ptype +" & "+obj2.Ctype +" not compatible connection for "+obj2.Cannot+" and "+obj2.Pannot);
			}
			else if((obj2.Ptype=='Site' && obj2.Ctype=='Site')||(obj2.Ptype=='Site' && obj2.Ctype=='Catalyst')||(obj2.Ptype=='Catalyst' && obj2.Ctype=='Site')){
				Ext.Msg.alert('Warning', obj2.Ptype +" & "+obj2.Ctype +" not compatible connection for "+obj2.Cannot+" and "+obj2.Pannot);
			}
			else{
				Ext.Msg.alert('OK',"Validate");
			}
		}
	}
	else{
		//do nothing
	}
	if(bool){
		myjson_details+="{}]";
		alert(myjson_details); 
	}
	else{
		//do nothing
	}
}