Ext.define('New.model.EquipmentsBulkModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'ID',
		type : 'number'
	}, {
		name : 'PackageID',
		type : 'string'
	},{
		name : 'ItemID',
		type : 'string'
	}, {
		name : 'Package',
		type : 'string'
	},{
		name : 'Quantity',
		type : 'number'
	},{
		name : 'Price',
		type : 'number'
	}, {
		name : 'Calendar_created',
		type : 'string'
	}, {
		name : 'Calendar_modified',
		type : 'string'
	},{
		name : 'Calendar_logged',
		type : 'string'
	}]
});