$(function() {

	$('.popup').magnificPopup({type:"image"});
	$('.popup_c').magnificPopup();

	$.stellar({
		responsive: true,
		horizonOffset: 60
	});

  $(".owl-carousel").owlCarousel({
  	loop: true,
  	responsive: {
  		0: {
  			items: 1,
  			nav: true,
  		}
  	},
  	navText: ""
  });

	function wResize() {
		// $("header").css("height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize();
	});
	// табы для городов
	$(".top_phone .wrapper .tab").click(function(){
			$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(" .top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// табы для скидок
	$(".top_header .wrapper .tab").click(function(){
			$(".top_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(" .top_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//табы для городов внизу
	$(".contacts_top .tab").click(function(){
			$(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(" .s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// табы для городов внизу низа
	$(".bottom_phone .wrapper .tab").click(function(){
			$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(" .bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close();		
				$(this).trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(window).load(function(){
	$(".top_header h1").animated("fadeInDown", "fadeInDown");
	$(".top_header h2").animated("fadeInUp", "fadeInUp");
	$(".tabs_header .wrapper").animated("flipInY", "flipInY");
	$(".profy_item").animated("fadeInRight", "fadeOutRight");
	$(".s_profy form").animated("zoomInRight", "fadeOut");
	$(".s_back h3").animated("fadeInUp", "fadeOut");
	$("footer").animated("fadeInUp", "fadeOut");

});


