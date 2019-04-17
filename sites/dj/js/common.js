$(document).ready(function () {

	// Navigation
	$('.navigation-btn').on('click', function () {
		$(this).toggleClass('active');
		$('.menu-wrapper').toggleClass('show');
	});

	// WOW init
	new WOW().init()

	// Scroll main
	$(".btn-slide").on("click", function (e) {
		e.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1000);
	});

	// Owl carousel init
	$(".owl-carousel").owlCarousel({
		items: 1
	});
});

$(window).on('load', function () {
	$preloader = $('.loaderArea'),
		$preloader.delay(2000).fadeOut('slow');
});


if (jQuery(window).width() > 481) {
	function promoEffect() {
		var pro = jQuery('.header');
		var where = window.pageYOffset || document.documentElement.scrollTop;
		pro.css({
			'transform': 'scale(' + (100 - where / 109) / 100 + ')',
			'opacity': (1 - (where / 20) / 19),
			'z-index': '-1000'
		})
	}
	promoEffect();
	jQuery(window).scroll(promoEffect);
} else {
	function promoEffect() {
		var pro = jQuery('.header');
		var where = window.pageYOffset || document.documentElement.scrollTop;
		pro.css({
			'transform': 'scale(' + (100 - where / 100) / 99 + ')',
			'opacity': (1 - (where / 20) / 15),
			'z-index': 1
		})
	}
	promoEffect();
	jQuery(window).scroll(promoEffect);

}

function homeh() {
	var hometext = jQuery('.main')

	hometext.css({
		"height": jQuery(window).height() + "px"
	});
	jQuery('.studio').css({
		"margin-top": jQuery(window).height() + "px"
	});

}

homeh();
jQuery(window).resize(homeh);