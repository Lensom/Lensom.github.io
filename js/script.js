$(function() {

	$('.menuToggle').on('click', function(){

		$('.menu').slideToggle(300, function(){

			if($(this).css('display') === 'none'){
				$(this).removeAttr('style');
			}

		});

	})
	$('body').append('<button class="btn_up" />');

	$('.btn_up').click(function(){
		$('body').animate({'scrollTop': 0}, 1000);
		$('html').animate({'scrollTop': 0}, 1000);
	})
});	


