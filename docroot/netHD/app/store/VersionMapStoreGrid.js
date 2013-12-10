Ext.define( 'New.store.VersionMapStoreGrid', {
	extend :'Ext.data.Store',
	model : 'New.model.VersionMapModel',
	autoLoad : true,
	autoSync : true,
	proxy : {
		type : 'ajax',
		url : VersionMapStoreUrl,
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

