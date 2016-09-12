$(function() {
	nav();
	header();
	projects();
	aboutme();
	$(window).resize(header);
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('.active').removeClass('active');
				$(this).parent().addClass('active');
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 500);
				$(this).blur();
				return false;
			}
		}
	});
})

function nav() {
	var numItems = $('.nav').children('li').length;
	$('.nav').children('li').width(100/numItems+'%');
}
function header() {
	$('#header').height($(window).height());
}
function projects() {
	$('#projects').height($(window).height());
	$('#projects').css('padding-top', $('.nav').height());
}
function aboutme() {
	$('#about-me').height($(window).height());
	$('#about-me').css('padding-top', $('.nav').height());
}