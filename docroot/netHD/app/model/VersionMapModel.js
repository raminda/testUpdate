Ext.define('New.model.SiteTypeModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'ID',
		type : 'number'
	},{
		name : 'OptionID',
		type : 'string'
	},{
		name : 'Version',
		type : 'string'
	},{
		name : 'Project',
		type : 'string'
	},{
		name : 'date_created',
		type : 'date'
	},{
		name : 'date_modified',
		type : 'date'
	},{
		name : 'date_logged',
		type : 'date'
	}

	]
});