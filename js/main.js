$(document).ready(function(){

	setTimeout(function(){
		$('.logo').addClass('animateF');
	}, 500);
	setTimeout(function(){
		$('.name').addClass('animateF');
	}, 1000);
	setTimeout(function(){
		$('.slogan').addClass('animateF');
	}, 1500);
	setTimeout(function(){
		$('.description_wrap').addClass('animateF');
	}, 1900);
	setTimeout(function(){
		$('.description span.orange').addClass('animateF');
	}, 4000);

	$(window).load(function() {
		setTimeout(function(){
			setTimeout(function(){
				$('.description_wrap').animate({height:'0'},100);
				$('.description_wrap').animate({
					width:'0',
					borderBottom:'0'},100);
			}, 0);
			setTimeout(function(){
				$('.slogan').animate({top:'-40px'},200);
			}, 200);
			
			setTimeout(function(){
				$('.name').addClass('animateRev').css('visibility', 'hidden');
			}, 600);
			setTimeout(function(){
				$('.logo').addClass('animateRev').css('visibility', 'hidden');
			}, 800);
		    $('.preloader_wrap').delay(1000).fadeOut('slow');
		},5000);
	});
})
