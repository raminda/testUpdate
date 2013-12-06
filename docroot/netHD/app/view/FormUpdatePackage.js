Ext.define('New.view.FormUpdatePackage', {
	extend : 'Ext.form.Panel',
	alias : 'widget.UpdatePackage',
	layout : 'column',
	frame : false,
	border : false,
	buttonAlign : 'center',
	width : '100%',
	bodyPadding : 0,
	id : 'UpPackage',
	name : 'UpPackage',
	
	items : [{
			xtype : 'panel',
			width : '100%',
			bodyPadding : 15,
			border : false,
			items : [{
				xtype : 'textfield',
				fieldLabel : 'Package Name',
				id : 'txtUpPackageID',
				name : 'txtUpPackageID',
				allowBlank : false,
				msgTarget: 'side',
				width : 400
			}, {
				xtype : 'textfield',
				fieldLabel : 'Package Name',
				id : 'txtUpPackageName',
				name : 'txtUpPackageName',
				allowBlank : false,
				msgTarget: 'side',
				width : 400
			}, {
				xtype : 'textarea',
				id : 'txtUpPkgSummery',
				name : 'txtUpPkgSummery',
				fieldLabel : 'Summery',
				width : 400,
				height : 60,
				allowBlank : false,
				msgTarget: 'side',
				emptyText : 'txtUpSummery Here'
			},{
				xtype : 'textarea',
				id : 'txtUpPkgComment',
				name : 'txtUpPkgComment',
				fieldLabel : 'Comment',
				width : 400,
				height : 60,
				emptyText : 'Comment'
			}, {
				xtype : 'textarea',
				id : 'txtUppkgBasePrice',
				name : 'txtUppkgBasePrice',
				fieldLabel : 'Base Price',
				width : 400,
				height : 60,
				emptyText : '$'
			},{
				xtype : 'datefield',
				id : 'txtUpPkgEOD',
				name : 'txtUpPkgEOD',
				fieldLabel : 'End Of Life Date',
				width : 400,
				height : 60,
				selectOnTab : true,
				allowBlank : false,
				msgTarget: 'side',
				minValue:new Date(),
				format:"d/M/Y"
			}]
	
		}],

	buttons: [],
	
	initComponent : function() {
		this.callParent(arguments);
		var grid = Ext.getCmp('gridPackageView');
		var sm = grid.getSelectionModel();
		var val = sm.getSelection();

		
		var ItemName = val[0].get('PackageName');
		var Summary = val[0].get('Summery');
		var Comment = val[0].get('Comment');
		var BasePrice = val[0].get('BasePrice');
		var EOLDates = val[0].get('EOLDate');
		var ID=val[0].get('ID');
		
		var date = new Date(EOLDates),
        mnth = ("0" + (date.getMonth()+1)).slice(-2),
        day  = ("0" + date.getDate()).slice(-2);
		var EOLDate =[ day, mnth,  date.getFullYear()].join("-");
		
		Ext.getCmp('txtUpPackageName').setValue(ItemName);
		Ext.getCmp('txtUpPkgSummery').setValue(Summary);
		Ext.getCmp('txtUpPkgComment').setValue(Comment);
		Ext.getCmp('txtUppkgBasePrice').setValue(BasePrice);
		Ext.getCmp('txtUpPkgEOD').setValue(EOLDate);
		Ext.getCmp('txtUpPackageID').setValue(ID);
		Ext.getCmp('txtUpPackageID').setVisible(false);
	}
});
