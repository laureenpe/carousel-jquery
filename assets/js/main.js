$(document).ready(function () {

	$('#before').click(function () {
		console.log($('.slider').find('.slider-element'));

		var size = $('.slider').find('.slider-element').length;

		$('.slider').find('.slider-element').each(
			function (index, value) {
				if ($(value).hasClass('visible')) {
					$(value).slideUp();
					$(value).removeClass('visible');

					if (index == 0) {
						$($('.slider').find('.slider-element').get(size - 1)).slideDown();
						$($('.slider').find('.slider-element').get(size - 1)).addClass('visible');
						return false;
					}
					else {
						$($('.slider').find('.slider-element').get(index - 1)).slideDown();
						$($('.slider').find('.slider-element').get(index - 1)).addClass('visible');
						return false;
					}
				}
			});
	});
	$('#next').click(function () {
		var size = $('.slider').find('.slider-element').length;
		$('.slider').find('.slider-element').each(
			function (index, value) {
				if ($(value).hasClass('visible')) {
					$(value).slideUp();
					$(value).removeClass('visible');

					if (index + 1 < size) {
						$($('.slider').find('.slider-element').get(index + 1)).slideDown();
						$($('.slider').find('.slider-element').get(index + 1)).addClass('visible');
						return false;
					}
					else {
						$($('.slider').find('.slider-element').get(0)).slideDown();
						$($('.slider').find('.slider-element').get(0)).addClass('visible');
						return false;
					}
				}
			});
	});



});


function avanzar() {
	var size = $('.slider').find('.slider-element').length;
	$('.slider').find('.slider-element').each(
		function (index, value) {
			if ($(value).hasClass('visible')) {
				$(value).slideUp();
				$(value).removeClass('visible');

				if (index + 1 < size) {
					$($('.slider').find('.slider-element').get(index + 1)).slideDown();
					$($('.slider').find('.slider-element').get(index + 1)).addClass('visible');
					return false;
				}
				else {
					$($('.slider').find('.slider-element').get(0)).slideDown();
					$($('.slider').find('.slider-element').get(0)).addClass('visible');
					return false;
				}
			}
		});
}