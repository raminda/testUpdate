Ext.define('New.view.imageView', {
	extend :'Ext.Img',
	alias  : 'widget.image',
	border : false,
	frame : true,
	height:900,
	fieldStyle: {
	     'fontFamily'   : 'courier new',
	     'fontSize'     : '12px',
	},
	layout : {
		align: 'stretch', 
		type : 'fit',
		padding : 5
	},
    src: '/test-portlet/Img/4.png',
    initComponent : function() {
		this.callParent(arguments);	
	}

});
