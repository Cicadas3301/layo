$(document).ready(function () {

	let parallax = document.querySelectorAll('.mouse-parallax');
	for (let i = 0; i < parallax.length; i++){
		window.addEventListener('mousemove', function(e) { 
			let x = e.clientX / window.innerWidth;
			let y = e.clientY / window.innerHeight;     
			parallax[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
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

});

