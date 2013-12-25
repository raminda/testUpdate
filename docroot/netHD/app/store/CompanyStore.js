Ext.define( 'New.store.CompanyStore', {
	extend :'Ext.data.Store',
	model : 'New.model.CompanyModel',
	autoLoad : true,
	autoSync : true,
	proxy : {
		type : 'ajax',
		url : CompanyStoreUrl,
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
	   	 }
	 }
});

