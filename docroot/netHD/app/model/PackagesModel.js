Ext.define('New.model.PackagesModel', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'ID',
		type : 'number'
	}, {
		name : 'PackageName',
		type : 'string'
	}, {
		name : 'BasePrice',
		type : 'number'
	},{
		name : 'EOLDate',
		type : 'string'
	},{
		name : 'Summery',
		type : 'string'
	},{
		name : 'Comment',
		type : 'string'
	},{
		name : 'Tec_Descrip',
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