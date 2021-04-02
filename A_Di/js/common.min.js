

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

$('#designsSlider').slick({
	centerMode: true,
	arrows: true,
	dots: false,
	infinite: true,
	slidesToShow: 3,
	centerPadding: '60px',
})

$('#realizationCalcPlanUpload').on('change', function () {
	let name = this.files[0].name;
	// alert(name)
	$('#realizationUploadedPlanName').text(name);
})
