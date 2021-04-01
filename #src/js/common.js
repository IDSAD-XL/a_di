

//!======Slick slider in header
$('#headerSlider').slick({
	arrows: false,
	dots: true,
	infinite: true,
	vertical: true,
	autoplay: true,
	autoplaySpeed: 3000,
	touchMove: false,
	swipe: false,
	adaptiveHeight: true,
	customPaging: function (slider, i) {
		var thumb = $(slider.$slides[i]).data('thumb');
		return '<div class="dot"></div>';
	}
});

