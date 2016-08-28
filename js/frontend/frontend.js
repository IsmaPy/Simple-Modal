$(document).ready(function(){
		
		/*Action for to close modal*/
		$('.btn_close').click(function(e) {
			e.preventDefault();
			if($('.top, .center, .to_the_top, .to_the_bottom, .to_the_left, .to_the_right, .to_the_top_bounce, .to_the_bottom_bounce, .to_the_left_bounce, .to_the_right_bounce, .top_resize').hasClass('active')){
				$('.top, .center, .to_the_top, .to_the_bottom, .to_the_left, .to_the_right, .to_the_top_bounce, .to_the_bottom_bounce, .to_the_left_bounce, .to_the_right_bounce, .top_resize').removeClass('active');
			}
			else{
				$('.top, .center, .to_the_top, .to_the_bottom, .to_the_left, .to_the_right, .to_the_top_bounce, .to_the_bottom_bounce, .to_the_left_bounce, .to_the_right_bounce, .top_resize').addClass('active');
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

		/*Action for top modal animation Bounce*/
		$('.btn.top_animation_bounce').click(function(e) {
			e.preventDefault();
			if($('.modal.to_the_top_bounce').hasClass('active')){
				$('.modal.to_the_top_bounce').removeClass('active');
			}
			else{
				$('.modal.to_the_top_bounce').addClass('active');
			}		
		});

		/*Action for bottom modal animation Bounce*/
		$('.btn.bottom_animation_bounce').click(function(e) {
			e.preventDefault();
			if($('.modal.to_the_bottom_bounce').hasClass('active')){
				$('.modal.to_the_bottom_bounce').removeClass('active');
			}
			else{
				$('.modal.to_the_bottom_bounce').addClass('active');
			}		
		});

		/*Action for left modal animation Bounce*/
		$('.btn.left_animation_bounce').click(function(e) {
			e.preventDefault();
			if($('.modal.to_the_left_bounce').hasClass('active')){
				$('.modal.to_the_left_bounce').removeClass('active');
			}
			else{
				$('.modal.to_the_left_bounce').addClass('active');
			}		
		});

		/*Action for right modal animation Bounce*/
		$('.btn.right_animation_bounce').click(function(e) {
			e.preventDefault();
			if($('.modal.to_the_right_bounce').hasClass('active')){
				$('.modal.to_the_right_bounce').removeClass('active');
			}
			else{
				$('.modal.to_the_right_bounce').addClass('active');
			}		
		});

		/*Action for top modal animation Resize height*/
		$('.btn.top_animation_resize').click(function(e) {
			e.preventDefault();
			if($('.modal.top_resize').hasClass('active')){
				$('.modal.top_resize').removeClass('active');
			}
			else{
				$('.modal.top_resize').addClass('active');
			}
			$("html, body").animate({scrollTop: 0}, 500);		
		});
		
	});