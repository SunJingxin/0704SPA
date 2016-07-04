define(['text!../../tpl/mime.html'],function(html){

	function render(){

		$('#doc').html(html);
		
	}

	return {
		render:render
	}
})