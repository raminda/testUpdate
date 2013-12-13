Ext.define( 'New.store.VersionMapStore2', {
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
	        purpose: 'null',
	        value: '0',
	        ID1:'0',
	        ID2:'0',
	        ID3:'0',
	        ID4:'0'
		}
	}
});

