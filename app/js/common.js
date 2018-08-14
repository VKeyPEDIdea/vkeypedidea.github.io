$(function() {

	// Custom JS

	// add color to "O" in logo
	$('.logo-litera').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace('O', '<span>O</span>'))
	});

	// to show search field
	$('.search-button').click(function(){
		$('.search-field').fadeIn();
	});

	// to focus on search-field
	$('.search-button').on('click', function(){
		$('.search-input').focus();
	});

	// to hide search field
	$('.search-close').click(function(){
		$('.search-field').fadeOut();
	});

	// to hide search field, if press Esc button
	$(document).keyup(function(e) {
		if(e.keyCode == 27) {
			$('.search-field').fadeOut();
		}
	});

	$('.top-line').after('<div class="mobile-menu d-lg-none">');
	$('.top-menu').clone().appendTo('.mobile-menu');
	$('.mobile-menu-button').click(function() {
		$('.mobile-menu').stop().slideToggle();
	});

});
