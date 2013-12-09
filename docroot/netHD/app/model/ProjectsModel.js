Ext.define('New.model.ProjectsModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'ID',
		type : 'number'
	},{
		name : 'Company',
		type : 'string'
	},{
		name : 'ProjectName',
		type : 'string'
	},{
		name : 'TotalAmount',
		type : 'number'
	},{
		name : 'SysReq',
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
	}

	]
});