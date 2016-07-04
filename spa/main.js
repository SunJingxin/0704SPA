require.config({
	baseUrl:'./lib',
	paths:{
		jquery:'jquery-1.12.3',
		backbone:'backbone',
		underscore:'underscore',
		text:'text'
	}
});

require(['jquery','./router.js','backbone'],function($){
	Backbone.history.start();
})