
$(document).ready(function(){
	dynamicFaq();
});

function dynamicFaq(){
	$('dd').hide();
	$('dt').bind('click', function(){
		$(this).toggleClass('open').next().slideToggle();
	});
}