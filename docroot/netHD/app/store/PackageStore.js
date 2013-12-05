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
	}
});

