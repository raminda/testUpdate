Ext.define('New.model.VersionMapModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'ID',
		type : 'number'
	},{
		name : 'CompanyName',
		type : 'string'
	},{
		name : 'Project',
		type : 'string'
	},{
		name : 'Version',
		type : 'string'
	},{
		name : 'OptionID',
		type : 'string'
	},{
		name : 'SiteID',
		type : 'string'
	},{
		name : 'PackageName',
		type : 'string'
	},{
		name : 'PackageType',
		type : 'string'
	},{
		name : 'Quantity',
		type : 'string'
	},{
		name : 'Price',
		type : 'string'
	},{
		name :'PcakageUsege',
		type:'string'
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
		name : 'Calendar_logged',
		type : 'string'
	}]
});