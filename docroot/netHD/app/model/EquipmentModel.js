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
		name : 'Summary',
		type : 'string'
	}, {
		name : 'ITIC_Descrip',
		type : 'string'
	}, {
		name : 'Tec_Descrip',
		type : 'string'
	}, {
		name : 'Comments',
		type : 'string'
	},{
		name : 'Price',
		type : 'number'
	}, {
		name : 'EOLDate',
		type : 'string'
	}, {
		name : 'Calendar_created',
		type : 'string'
	}, {
		name : 'Calendar_logged',
		type : 'string'
	},{
		name : 'Calendar_modified',
		type : 'string'
	}]
});