Ext.define('New.model.CompanyModel', {
	extend : 'Ext.data.Model',
	fields : [{
		name : 'ID',
		type : 'number'
	},{
		name : 'Company',
		type : 'string'
	},{
		name : 'Calendar_created',
		type : 'string'
	},{
		name : 'Calendar_modified',
		type : 'string'
	},{
		name : 'Calendar_logged',
		type : 'string'
	}]
});