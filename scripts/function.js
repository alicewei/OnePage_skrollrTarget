$(document).ready(function() {
	animateBtn();
	$('.ta-top').bind('click', toTop);	
	$('.ta-about, .btn-scroll').bind('click', toAbout);
	$('.ta-musicion').bind('click', toMusicion);
	$('.ta-history').bind('click', toHistory);
	$('.ta-link').bind('click', toLink);
})
function animateBtn() {
$('.btn-scroll').animate({'top':'0px'},600).animate({'top':'20px'},30, animateBtn); 
}
function toTop(){
	$("html, body").animate({ scrollTop: $('.con-inex').offset() }, 800);
}
function toAbout(){
	$("html, body").animate({ scrollTop: $('.target-about').offset().top }, 800);
}
function toMusicion(){
	$("html, body").animate({ scrollTop: $('.target-musicion').offset().top }, 800);
}
function toHistory(){
	$("html, body").animate({ scrollTop: $('.target-history').offset().top }, 800);
}
function toLink(){
	$("html, body").animate({ scrollTop: $('.target-link').offset().top }, 800);
}