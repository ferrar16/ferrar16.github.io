$(document).ready(function(){

	
	$('.pulsebox').mouseenter(function() {
		$('.graphic').addClass("hoversat");
		$('.graphic').removeClass("leavesat");
	});

	$('.pulsebox').mouseleave(function(){
		$('.graphic').removeClass("hoversat");
		$('.graphic').addClass("leavesat");

	});


	$('.pulsebox2').mouseenter(function() {
		$('.graphic2').addClass("hoversat");
		$('.graphic2').removeClass("leavesat");
	});

	$('.pulsebox2').mouseleave(function(){
		$('.graphic2').removeClass("hoversat");
		$('.graphic2').addClass("leavesat");

	});


	$('.pulsebox3').mouseenter(function() {
		$('.graphic3').addClass("hoversat");
		$('.graphic3').removeClass("leavesat");
	});

	$('.pulsebox3').mouseleave(function(){
		$('.graphic3').removeClass("hoversat");
		$('.graphic3').addClass("leavesat");

	});


	$('.pulsebox4').mouseenter(function() {
		$('.graphic4').addClass("hoversat");
		$('.graphic4').removeClass("leavesat");
	});

	$('.pulsebox4').mouseleave(function(){
		$('.graphic4').removeClass("hoversat");
		$('.graphic4').addClass("leavesat");

	});


});