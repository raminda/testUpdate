Ext.define( 'New.store.CompanyStoreGrid', {
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
	}
});

