Ext.define('New.view.imageView', {
	extend :'Ext.Img',
	alias  : 'widget.image',
	border : false,
	frame : true,
	anchor: '100% 100%',
	height :900,
	flex:1,
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
