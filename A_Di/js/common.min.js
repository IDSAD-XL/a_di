

//!======Slick slider in header
$('#headerSlider').slick({
	arrows: false,
	dots: true,
	infinite: true,
	vertical: true,
	autoplay: true,
	autoplaySpeed: 4000,
	touchMove: false,
	swipe: false,
	adaptiveHeight: true,
	customPaging: function (slider, i) {
		let thumb = $(slider.$slides[i]).data('thumb');
		return '<div class="dot"></div>';
	}
});


//!========Slick slider in Designs
$('#designsSlider').slick({
	centerMode: true,
	arrows: true,
	dots: false,
	infinite: false,
	slidesToShow: 3,
	centerPadding: '60px',
})

//!======File upload in calculator
$('#realizationCalcPlanUpload').on('change', function () {
	let name = this.files[0].name;
	// alert(name)
	$('#realizationUploadedPlanName').text(name);
})

//!=====Ineractive house

$('.interactive_plus').on('mouseenter', function () {
	let hintClass = $(this).attr('hint-class');
	$('.interactive__hint').addClass('hide').removeClass('active')
	$('.interactive_plus').removeClass('active')
	$(this).addClass('active')
	$(`.${hintClass}`).addClass('active').removeClass('hide')
})

