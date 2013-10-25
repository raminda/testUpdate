Ext.define('New.model.ProjectItemsModel', {
	extend : 'Ext.data.Model',
	fields : [{
		name : 'ID',
		type : 'number'
	},{
		name : 'Packages',
		type : 'string'
	},{
		name : 'Version_Map',
		type : 'string'
	},{
		name : 'SiteID',
		type : 'string'
	},{
		name : 'PackageType',
		type : 'string'
	},{
		name : 'Quantity',
		type : 'number'
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