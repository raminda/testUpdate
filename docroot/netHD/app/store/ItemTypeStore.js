Ext.define( 'New.store.ItemTypeStore', {
	extend :'Ext.data.Store',
	model : 'New.model.ItemTypeModel',
	autoLoad : true,
	autoSync : true,
	proxy : {
		type : 'ajax',
		url : ItemTypeStoreUrl,
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
	    	//store = Ext.getStore('ItemTypeStore');
	    	 //console.log(this.proxy.extraParams.purpose);

	    	//console.log(this.proxy.extraParams);
	   	 		var jsn=null;
		   		try{
			   		Ext.each(records, function(rec) {
			       	 	jsn=Ext.encode(rec.raw);
			               console.log(jsn + "   -       +   ");
			       	 });
			   		var jsn = eval ("(" + jsn + ")");
		       	
		       		if(jsn.data!=null){
		       			Ext.Msg.alert('Status', jsn.data);
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

	   	 
	   	 }
	 }
});

