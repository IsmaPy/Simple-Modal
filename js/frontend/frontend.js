$(document).ready(function(){
		
		/*Action for to close modal*/
		$('.btn_close').click(function(e) {
			e.preventDefault();
			if($('.modal.top, .modal.center, .modal.to_the_top, .modal.to_the_bottom, .modal.to_the_left, .modal.to_the_right').hasClass('active')){
				$('.modal.top, .modal.center, .modal.to_the_top, .modal.to_the_bottom, .modal.to_the_left, .modal.to_the_right').removeClass('active');
			}
			else{
				$('.modal.top, .modal.center, .modal.to_the_top, .modal.to_the_bottom, .modal.to_the_left, .modal.to_the_right').addClass('active');
			}		
		});

		/*Action for top modal*/
		$('.btn.top').click(function(e) {
			e.preventDefault();
			if($('.modal.top').hasClass('active')){
				$('.modal.top').removeClass('active');
			}
			else{
				$('.modal.top').addClass('active');
			}		
		});

		/*Action for center modal*/
		$('.btn.center').click(function(e) {
			e.preventDefault();
			if($('.modal.center').hasClass('active')){
				$('.modal.center').removeClass('active');
			}
			else{
				$('.modal.center').addClass('active');
			}		
		});

		/*Action for top modal animation*/
		$('.btn.top_animation').click(function(e) {
			e.preventDefault();
			if($('.modal.to_the_top').hasClass('active')){
				$('.modal.to_the_top').removeClass('active');
			}
			else{
				$('.modal.to_the_top').addClass('active');
			}		
		});

		/*Action for bottom modal animation*/
		$('.btn.bottom_animation').click(function(e) {
			e.preventDefault();
			if($('.modal.to_the_bottom').hasClass('active')){
				$('.modal.to_the_bottom').removeClass('active');
			}
			else{
				$('.modal.to_the_bottom').addClass('active');
			}		
		});

		/*Action for left modal animation*/
		$('.btn.left_animation').click(function(e) {
			e.preventDefault();
			if($('.modal.to_the_left').hasClass('active')){
				$('.modal.to_the_left').removeClass('active');
			}
			else{
				$('.modal.to_the_left').addClass('active');
			}		
		});

		/*Action for right modal animation*/
		$('.btn.right_animation').click(function(e) {
			e.preventDefault();
			if($('.modal.to_the_right').hasClass('active')){
				$('.modal.to_the_right').removeClass('active');
			}
			else{
				$('.modal.to_the_right').addClass('active');
			}		
		});
		
	});