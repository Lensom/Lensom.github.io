$(function() {
	$('#my-menu').mmenu({
		offCanvas: {
 		"position": "right" 
},
		extensions: {
 all: ["theme-black", "fx-menu-slide", "pagedim-black"] 
},
		navbar: {
			title: '<img src="img/logotype.png" alt="Portfolio">'
}
	});

	var api = $('#my-menu').data('mmenu');

	api.bind('open:finish', function(){
		$('.hamburger').addClass('is-active');	
	}).bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
	});

});

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});

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

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});