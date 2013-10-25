Ext.define('New.model.EquipmentMapModel', {
	extend : 'Ext.data.Model',
	fields : [{
		name : 'ID',
		type : 'number'
	},{
		name : 'CEquipment',
		type : 'string'
	},{
		name : 'PEquipment',
		type : 'string'
	},{
		name : 'date_created',
		type : 'string'
	},{
		name : 'date_modified',
		type : 'string'
	},{
		name : 'date_logged',
		type : 'string'
	}]
});