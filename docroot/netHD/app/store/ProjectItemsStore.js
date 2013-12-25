Ext.define( 'New.store.ProjectItemsStore', {
	extend :'Ext.data.Store',
	model : 'New.model.ProjectItemsModel',
	autoLoad : true,
	autoSync : true,
	proxy : {
		type : 'ajax',
		url : ProjectItemsStoreUrl,
		reader : {
			type : 'json'
		},
		extraParams: {
	        purpose: 'null',
	        value: '0',
	        ID1:'0',
	        ID2:'0',
	        ID3:'0',
	        ID4:'0'
		}
	},
	listeners: {
	    load: function (me, records, successful, eOpts) {
	    			var jsn=null;
		   		try{
			   		Ext.each(records, function(rec) {
			       	 	jsn=Ext.encode(rec.raw);
			               console.log(jsn + "   -       +   ");
			       	 });
			   		var jsn = eval ("(" + jsn + ")");
		       	
		       		if(jsn.data!=null){
		       			Ext.Msg.alert('status', jsn.data);
			       	 }
			       	 else{
			       		 console.log(jsn);
			       	 }
		       	 }
		       	 catch (e) {
		       		console.log(e);
				}
		   	// grid_panel.getEl().unmask();
		       // window.open('xls/' + report_name + '.xls');
		        
		      
		   	// }
	   	 
	   	 }
	 }
});

