define(['text!../../tpl/leyuan.html'],function(html){

	function render(){

		$('#doc').html(html);
		initSwipe();
	}


	function initSwipe(){
		new Swiper({
			
		})
	}

	return {
		render:render
	}
})