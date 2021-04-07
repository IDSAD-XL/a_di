//!======Input masks
$('#headerFormTel').mask('+7(000) 000-00-00');
$('#footerFormTel').mask('+7(000) 000-00-00');
$('#getLinkFormTel').mask('+7(000) 000-00-00');
$('#modalTel').mask('+7(000) 000-00-00');

//!=====Modal
let cbModal = new bootstrap.Modal(document.getElementById('modalCallback'));

function showModal() {
	cbModal.show()
}
// setTimeout(showModal, 5000);
let cbModalHtml = document.getElementById('modalCallback')
let cbModalForm = document.getElementById('modalCbForm');
cbModalForm.addEventListener('submit', function () {
	cbModal.hide()
})

function goToPage(url) {
	cbModal.show()
	cbModalForm.addEventListener('submit', function () {
		window.open(url)
	})
}
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
let headerSliderCenter = Math.floor($('.designs_slider__item').length / 2)
$('#designsSlider').slick({
	centerMode: true,
	arrows: true,
	dots: false,
	infinite: false,
	slidesToShow: 3,
	initialSlide: headerSliderCenter,
	centerPadding: '60px',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				centerMode: false,
			}
		}
	]
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


$('.contract_previews_item').on('mouseenter', function () {
	$('.contract_previews_item').removeClass('active')
	$(this).addClass('active')
})