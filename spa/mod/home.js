define(['text!../../tpl/home.html'],function(html){

	function render(){

		$('#doc').html(html);
		bindEvent();
		
	}

	function bindEvent(){

	}

	return {
		render:render
	}
})