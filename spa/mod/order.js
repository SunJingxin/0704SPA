define(['text!../../tpl/order.html'],function(html){

	function render(){

		$('#doc').html(html);
		
	}

	return {
		render:render
	}
})