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
			parallax2[i].style.transform = 'translate(-' + y * 50 + 'px, -' + x * 50 + 'px)';
		});    
	}

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

	

});

