$(document).ready(function () {

	let parallax = document.querySelectorAll('.mouse-parallax');
	for (let i = 0; i < parallax.length; i++){
		window.addEventListener('mousemove', function(e) { 
			let x = e.clientX / window.innerWidth;
			let y = e.clientY / window.innerHeight;     
			parallax[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
		});    
	}
	let parallax2 = document.querySelectorAll('.mouse-parallax2');
	for (let i = 0; i < parallax2.length; i++){
		window.addEventListener('mousemove', function(e) { 
			let x = e.clientX / window.innerWidth;
			let y = e.clientY / window.innerHeight;     
			parallax2[i].style.transform = 'translate(' + x * 50 + 'px, ' + y * 50 + 'px)';
		});    
	}

	new WOW().init();

	(function () {
		var btn = $('.js-scroll');
		btn.click(function () {
			$("html, body").animate({
				scrollTop: $($(this).attr("href")).offset().top + "px"
			}, {
				duration: 1000
			});
			return false;
		});
	})();

	(function($){

		$.fn.extend({ 
	
			addTemporaryClass: function(className, duration) {
				var elements = this;
				setTimeout(function() {
					elements.removeClass(className);
				}, duration);
	
				return this.each(function() {
					$(this).addClass(className);
				});
			}
		});
	
	})(jQuery);
	
	$('.header_menu-item').on('mouseenter', function () {
		$(".header_menu-circmini").addTemporaryClass('transfer', 1000);
		$('.header_menu-circmini').appendTo(this);
	})
	$('.header_menu-item').on('mouseleave', function () {
		$('.header_menu-circmini').appendTo('.header_menu-middle');
		$('.header_menu-circmini').addClass('mouse-parallax');
		$(".header_menu-circmini").addTemporaryClass('transferback', 1000);
	})

	$('.header_burger').on('click', function () {
		$('body').toggleClass('ov-hidden');
		$('.header_menu').toggleClass('active');
		$(this).toggleClass('active');
	})

	$('.team_carousel').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		swipeToSlide: true,
		appendArrows: '.team_top-nav',
		prevArrow: '<svg class="slick-prev" width="24" height="10" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.58593 1L1.29304 4.29289C0.902517 4.68342 0.902517 5.31658 1.29304 5.70711L4.58593 9M1.58594 5H23" stroke="#353536" stroke-width="1.5" stroke-linecap="round"/></svg>',
		nextArrow: '<svg class="slick-next" width="24" height="10" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.58593 1L1.29304 4.29289C0.902517 4.68342 0.902517 5.31658 1.29304 5.70711L4.58593 9M1.58594 5H23" stroke="#353536" stroke-width="1.5" stroke-linecap="round"/></svg>',
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				infinite: false,
				settings: {
					slidesToShow: 1.2,
					arrows: false,
				}
			}
		  ]
	});
	$('.features_carousel').slick({
		infinite: false,
		slidesToShow: 1,
		arrows: false,
		dots: true,
		swipeToSlide: true,
		vertical: true,
		verticalSwiping: true,
		// autoplay: true,
		// autoplaySpeed: 3000,
		pauseOnHover: true,
	});

	$('.features_carousel > .slick-dots > li').html('<span></span>');
	
	$('.js-tab').on('click', function () {
		event.preventDefault();
		$('.about_tab, .js-tab').removeClass('active');
		$(this).addClass('active');
		$(this.hash).addClass('active');
	})

	$('.info_item').on('click', function () {
		$(this).siblings('.info_item').removeClass('active');
		$(this).toggleClass('active');
		$(this).siblings('.info_item').find('.info_item-text').slideUp('');
		$(this).find('.info_item-text').slideToggle('');
	})

});

