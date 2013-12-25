Ext.define( 'New.store.PackageStore', {
	extend :'Ext.data.Store',
	model : 'New.model.PackagesModel',
	autoLoad : true,
	autoSync : true,
	proxy : {
		type : 'ajax',
		url : PackageStoreUrl,
		reader : {
			type : 'json'
		},
		extraParams: {
	        purpose: 'Null',
	        value: '0',
	        ID:'Null'
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
		        
		      
		   //	 }
	   	 
	   	 }
	 }
});

