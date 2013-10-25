Ext.define('New.model.CompanyModel', {
	extend : 'Ext.data.Model',
	fields : [{
		name : 'ID',
		type : 'number'
	},{
		name : 'CompanyName',
		type : 'number'
	},{
		name : 'date_created',
		type : 'date'
	},{
		name : 'date_modified',
		type : 'date'
	},{
		name : 'date_logged',
		type : 'date'
	}]
});