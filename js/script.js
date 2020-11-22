$(document).ready(function() {
  var w=$(window).outerWidth();
  var h=$(window).outerHeight();
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
 function isIE() {
  ua = navigator.userAgent;
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie; 
 }
 if(isIE()){
  $('body').addClass('ie');
 }
 if(isMobile.any()){
  $('body').addClass('touch');
 }
 //<ПОДКЛЮЧЕНИЕ КЛАСС IBG>====================================================================================================
 function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();
//<ПОДКЛЮЧЕНИЕ КЛАСС IBG>====================================================================================================

//<ПОДКЛЮЧЕНИЕ МЕНЮ БУРГЕР>====================================================================================================

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
//<ПОДКЛЮЧЕНИЕ МЕНЮ БУРГЕР>====================================================================================================
$(document).ready(function() {	
	$('.slider').slick({
		arrows:true,
		dots: false,
		adaptiveHeight:true,
		slidesToShow: 2,
		slidesToScroll:1,
		speed: 500,
		easing: 'ease',
		centerMode: false, /* центрует слайд!! */
		variableWidth: false, /* убирает отступы у фото!! */ 
		rows: 2,	
		slidesPerRow: 1,
		vertical: false,
		verticalSwiping: false,
		// asNavFor: ".sliderbig",
		
		responsive: [{
			breakpoint: 769,
			settings:{
				centerMode: true, 
				variableWidth: true,
				rows: 1,
				slidesToShow: 1,
			},
			breakpoint: 426,
			settings:{
				centerMode: true, 
				variableWidth: true,
				rows: 3,

			}
		}]
		
	});

	$('.slider__item img').click(function(){
		let src = $(this).attr('src');
		$('.sliderbig__item').html('<img src="' + src + '" alt="">');
	});
	// $('.sliderbig').slick({
	// 	arrows: false,
	// 	fade: true,
	// 	asNavFor: ".slider",

	// });
	$('.sliderlove').slick({
		arrows:false,
		dots: true,
		adaptiveHeight:true,
		slidesToShow: 3,
		slidesToScroll:2,
		variableWidth: false,
		centerMode: false,
		responsive: [{
			breakpoint: 769,
			settings:{
				slidesToShow: 1,
				centerMode: true,
				variableWidth: true,	
			},
			breakpoint: 426,
			settings:{	
				slidesToShow: 1,
				variableWidth: false,
				centerMode: true,
				slidesToScroll: 1,
			}
		}]
		
	})
	});
//<аккордеон или табы>====================================================================================================
	let accBu = document.querySelectorAll('.tabs__item')//дивом активирует  ссылки для таб 
	let accCon = document.querySelectorAll('.tabs__block')// контент для показа
	//** если не нужно прятать по второму нажатию*////
		for (let i = 0; i < accBu.length; i++){
	 accBu[i].addEventListener('click', ()=>{
	  for (let content of accCon){
	   content.classList.remove('active')
	  }
	  accCon[i].classList.add('active')
	 })
	 accBu[i].addEventListener('click', ()=>{
	  for (let content of accBu){
	   content.classList.remove('active')
	  }
	  accBu[i].classList.add('active')
	 })
	}
  //** если нужно прятать по второму нажатию*////

// 	for (let i = 0; i < accBu.length; i++){
// 	 accBu[i].addEventListener('click', ()=>{
// 	  if (accCon[i].classList.contains('active')){
// 	   accCon[i].classList.remove('active')
// 	  } else {
// 	   for (let content of accCon){
// 	    content.classList.remove('active')
// 	   }
// 	   accCon[i].classList.add('active')
//   }
//   if (accBu[i].classList.contains('active')){
// 	   accBu[i].classList.remove('active')
// 	  } else {
// 	   for (let content of accBu){
// 	    content.classList.remove('active')
// 	   }
// 	   accBu[i].classList.add('active')
//   }
//  })
// }
//<аккордеон или табы>====================================================================================================
	

	

 });


