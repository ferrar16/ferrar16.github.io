$(document).ready(function(){

	$('#cell1').mouseenter(function() {
		$('.header1').addClass("hoversat");
		$('.header1').removeClass("leavesat");
	});

	$('#cell1').mouseleave(function(){
		$('.header1').removeClass("hoversat");
		$('.header1').addClass("leavesat");
	});

	$('#cell2').mouseenter(function() {
		$('.header2').addClass("hoversat");
		$('.header2').removeClass("leavesat");
	});

	$('#cell2').mouseleave(function(){
		$('.header2').removeClass("hoversat");
		$('.header2').addClass("leavesat");
	});
	
	$('#cell3').mouseenter(function() {
		$('.header3').addClass("hoversat");
		$('.header3').removeClass("leavesat");
	});

	$('#cell3').mouseleave(function(){
		$('.header3').removeClass("hoversat");
		$('.header3').addClass("leavesat");
	});
	
	$('#cell4').mouseenter(function() {
		$('.header4').addClass("hoversat");
		$('.header4').removeClass("leavesat");
	});

	$('#cell4').mouseleave(function(){
		$('.header4').removeClass("hoversat");
		$('.header4').addClass("leavesat");
	});
	

});