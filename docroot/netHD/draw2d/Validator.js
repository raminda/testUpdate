/**
 * 
 */
function Validator(txt) {
	alert(txt);
	 var obj = eval ("(" + txt + ")");
	 if(obj.figures.length>0){
		 
	 }
	 else{
		 Ext.Msg.alert('Error', 'No diagrum for validate!');
	 }
	 alert(obj.figures[0].ports[0].connections.length);
		// alert(obj.figures.length);
	 //alert(obj.figures[0].subtype);
}