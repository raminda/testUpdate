/**
 * @author Raminda
 */
var myjson_details="";
var jsonsite="";
function Validator(txt) {
	try{
		jsonsite="[";
		myjson_details="[";
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
			}
			if(WokflowLenth!=0){
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
											 if(obj.figures[i].subtype=='Site'){
												 jsonsite+="{Site:'"+obj.figures[i].annotations[0].text+"',SiteID :'"+obj.figures[i].id+"' ,ConectotID:'"+obj.figures[ii].id+"',ConectotAnn:'"+obj.figures[ii].annotations[0].text+"'},";
											 }
											 if(obj.figures[ii].subtype=='Site'){
												 jsonsite+="{Site:'"+obj.figures[ii].annotations[0].text+"',SiteID :'"+obj.figures[ii].id+"' , ConectotID:'"+obj.figures[i].id+"',ConectotAnn:'"+obj.figures[i].annotations[0].text+"'},";
											 }
										 }
									 }
								}
							 }
						 }
					 }
				 }
				myjson_details+="{}]";
				jsonsite+="{}]";
				var objo = eval ("(" + myjson_details + ")"); 
				var objo2 = eval ("(" +jsonsite+ ")");
				var jLenth=objo.length;
				var jLenth2=objo2.length;
				boolin=false;
				if(jLenth>1){
					for(var i=0;i<jLenth-1;i++){
						obj2=objo[i];
						if((obj2.Ptype=='Server' && obj2.Ctype=='Server')||(obj2.Ptype=='Server' && obj2.Ctype=='Site')||(obj2.Ptype=='Site' && obj2.Ctype=='Server')||(obj2.Ptype=='Server' && obj2.Ctype=='Router')||(obj2.Ptype=='Router' && obj2.Ctype=='Server')||(obj2.Ptype=='Server' && obj2.Ctype=='cloud')||(obj2.Ptype=='cloud' && obj2.Ctype=='Server')||(obj2.Ptype=='Server' && obj2.Ctype=='firewall')||(obj2.Ptype=='firewall' && obj2.Ctype=='Server')||(obj2.Ptype=='Server' && obj2.Ctype=='Catalyst')||(obj2.Ptype=='Catalyst' && obj2.Ctype=='Server')||(obj2.Ptype=='Server' && obj2.Ctype=='PC')||(obj2.Ptype=='PC' && obj2.Ctype=='Server')||(obj2.Ptype=='Server' && obj2.Ctype=='Array')||(obj2.Ptype=='Array' && obj2.Ctype=='Server')){
							boolin=false;
						}
						else if((obj2.Ptype=='Site' && obj2.Ctype=='firewall')||(obj2.Ptype=='firewall' && obj2.Ctype=='Site')||(obj2.Ptype=='firewall' && obj2.Ctype=='Tape Library')||(obj2.Ptype=='Tape Library' && obj2.Ctype=='firewall')||(obj2.Ptype=='firewall' && obj2.Ctype=='firewall')||(obj2.Ptype=='firewall' && obj2.Ctype=='Catalyst')||(obj2.Ptype=='Catalyst' && obj2.Ctype=='firewall')||(obj2.Ptype=='firewall' && obj2.Ctype=='PC')||(obj2.Ptype=='PC' && obj2.Ctype=='firewall')||(obj2.Ptype=='firewall' && obj2.Ctype=='Array')||(obj2.Ptype=='Array' && obj2.Ctype=='firewall')||(obj2.Ptype=='firewall' && obj2.Ctype=='Switch')||(obj2.Ptype=='Switch' && obj2.Ctype=='firewall')||(obj2.Ptype=='firewall' && obj2.Ctype=='SAN')||(obj2.Ptype=='SAN' && obj2.Ctype=='firewall')){
							boolin=false;
						}
						else if((obj2.Ptype=='Site' && obj2.Ctype=='Switch')||(obj2.Ptype=='Switch' && obj2.Ctype=='Site')||(obj2.Ptype=='Switch' && obj2.Ctype=='Array')||(obj2.Ptype=='Array' && obj2.Ctype=='Switch')||(obj2.Ptype=='Switch' && obj2.Ctype=='cloud')||(obj2.Ptype=='Switch' && obj2.Ctype=='cloud')){
							boolin=false;
						}
						else if((obj2.Ptype=='Site' && obj2.Ctype=='cloud')||(obj2.Ptype=='cloud' && obj2.Ctype=='Site')||(obj2.Ptype=='cloud' && obj2.Ctype=='Tape Library')||(obj2.Ptype=='Tape Library' && obj2.Ctype=='cloud')||(obj2.Ptype=='cloud' && obj2.Ctype=='Catalyst')||(obj2.Ptype=='Catalyst' && obj2.Ctype=='cloud')||(obj2.Ptype=='cloud' && obj2.Ctype=='PC')||(obj2.Ptype=='PC' && obj2.Ctype=='cloud')||(obj2.Ptype=='cloud' && obj2.Ctype=='Array')||(obj2.Ptype=='Array' && obj2.Ctype=='cloud')||(obj2.Ptype=='cloud' && obj2.Ctype=='SAN')||(obj2.Ptype=='SAN' && obj2.Ctype=='cloud')||(obj2.Ptype=='cloud' && obj2.Ctype=='Router')||(obj2.Ptype=='Router' && obj2.Ctype=='cloud')){
							boolin=false;
						}
						else if((obj2.Ptype=='Site' && obj2.Ctype=='Array')||(obj2.Ptype=='Array' && obj2.Ctype=='Site')||(obj2.Ptype=='Array' && obj2.Ctype=='Tape Library')||(obj2.Ptype=='Tape Library' && obj2.Ctype=='Array')||(obj2.Ptype=='Array' && obj2.Ctype=='Array')||(obj2.Ptype=='Array' && obj2.Ctype=='Catalyst')||(obj2.Ptype=='Catalyst' && obj2.Ctype=='Array')||(obj2.Ptype=='Array' && obj2.Ctype=='PC')||(obj2.Ptype=='PC' && obj2.Ctype=='Array')||(obj2.Ptype=='Array' && obj2.Ctype=='Router')||(obj2.Ptype=='Router' && obj2.Ctype=='Array')){
							boolin=false;
						}
						else if((obj2.Ptype=='Site' && obj2.Ctype=='Tape Library')||(obj2.Ptype=='Tape Library' && obj2.Ctype=='Site')||(obj2.Ptype=='Tape Library' && obj2.Ctype=='Tape Library')||(obj2.Ptype=='Tape Library' && obj2.Ctype=='Catalyst')||(obj2.Ptype=='Catalyst' && obj2.Ctype=='Tape Library')||(obj2.Ptype=='Tape Library' && obj2.Ctype=='PC')||(obj2.Ptype=='PC' && obj2.Ctype=='Tape Library')||(obj2.Ptype=='Tape Library' && obj2.Ctype=='Router')||(obj2.Ptype=='Router' && obj2.Ctype=='Tape Library')){
							boolin=false;
						}
						else if((obj2.Ptype=='Site' && obj2.Ctype=='SAN')||(obj2.Ptype=='SAN' && obj2.Ctype=='Site')||(obj2.Ptype=='SAN' && obj2.Ctype=='Catalyst')||(obj2.Ptype=='Catalyst' && obj2.Ctype=='SAN')||(obj2.Ptype=='SAN' && obj2.Ctype=='PC')||(obj2.Ptype=='PC' && obj2.Ctype=='SAN')||(obj2.Ptype=='SAN' && obj2.Ctype=='SAN')||(obj2.Ptype=='SAN' && obj2.Ctype=='Router')||(obj2.Ptype=='Router' && obj2.Ctype=='SAN')){
							boolin=false;
						}
						else if((obj2.Ptype=='Router' && obj2.Ctype=='PC')||(obj2.Ptype=='PC' && obj2.Ctype=='Router')||(obj2.Ptype=='Router' && obj2.Ctype=='Router')){
							boolin=false;
						}
						else if((obj2.Ptype=='Site' && obj2.Ctype=='PC')||(obj2.Ptype=='PC' && obj2.Ctype=='Site')||(obj2.Ptype=='PC' && obj2.Ctype=='Catalyst')||(obj2.Ptype=='Catalyst' && obj2.Ctype=='PC')||(obj2.Ptype=='PC' && obj2.Ctype=='PC')){
							boolin=false;
						}
						else if((obj2.Ptype=='Site' && obj2.Ctype=='Site')||(obj2.Ptype=='Site' && obj2.Ctype=='Catalyst')||(obj2.Ptype=='Catalyst' && obj2.Ctype=='Site')){
							boolin=false;
						}
						else{
							boolin=true;
						}
						
						if(!boolin){
							jLenth=0;
						}
					}
					if(boolin){
						if(jLenth2>1){
							Ext.getCmp('txtDDJSON1').setValue(txt);
							Ext.getCmp('txtDDJSON2').setValue(myjson_details);
							Ext.getCmp('cmbDCompany').setVisible(true);
							Ext.getCmp('cmbDProject').setVisible(true);
							Ext.getCmp('cmbDOption').setVisible(true);
							Ext.getCmp('cmbDVersion').setVisible(true);
							Ext.getCmp('btnVaildtete').setVisible(false);
							Ext.getCmp('txtEqipmentName').enableDD = false;
							Ext.Msg.alert('Validated', "Validation complete ready to Submit !");
						}
						else{
							Ext.Msg.alert('Warning', "NO any Sie Connection found!(Number of sites : "+(jLenth2-1)+")");
						}
					}
					else{
						Ext.Msg.alert('Warning', obj2.Ptype +" & "+obj2.Ctype +" not compatible connection for "+obj2.Cannot+" and "+obj2.Pannot);
					}
				}
				else{
					Ext.Msg.alert('Warning', "No conections for validations");
				}
			}
			else{
				Ext.Msg.alert('Error', 'each figuer shuld be annotated whith its own Equeipment\n please insert the coresponding Equipment name !! ');
			}
		}
		else{
			Ext.Msg.alert('Warning', "No any Figuer For vlidate");
		}
	}
	catch (e) {
		console.log(e.toString());
		Ext.Msg.alert("System error ! "," "+e.toString());
	}
}