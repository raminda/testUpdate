Ext.define('New.model.VersionMapModel', {
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
		name : 'PackageName',
		type : 'string'
	},{
		name : 'EOLDate',
		type : 'string'
	},{
		name : 'Calendar_created',
		type : 'string'
	},{
		name : 'Calendar_modified',
		type : 'string'
	},{
		name : 'CompanyName',
		type : 'string'
	},{
		name : 'Calendar_logged',
		type : 'string'
	}]
});