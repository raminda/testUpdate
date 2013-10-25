Ext.define('New.model.EquipmentModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'ID',
		type : 'number'
	}, {
		name : 'ItemName',
		type : 'string'
	}, {
		name : 'itemtypes',
		type : 'string'
	}, {
		name : 'Comments',
		type : 'string'
	}, {
		name : 'ITIC_Descrip',
		type : 'string'
	}, {
		name : 'Summary',
		type : 'string'
	}, {
		name : 'Tec_Descrip',
		type : 'string'
	}, {
		name : 'EOLDate',
		type : 'string'
	}, {
		name : 'Price',
		type : 'number'
	}, {
		name : 'date_created',
		type : 'string'
	}, {
		name : 'date_modified',
		type : 'string'
	},{
		name : 'date_logged',
		type : 'string'
	}]
});