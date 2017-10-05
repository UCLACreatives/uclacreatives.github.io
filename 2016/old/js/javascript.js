$(document).ready(function(){
	var current = 0;
	var width = $(".personas").width();
	var yPos = $("#who").offset().top - 100;
	$("#who .showThis").fadeOut();
	var animated = 0;

	$(".arrow-right").click(function(){
		if(current == 2){
			current = 0;
		}
		else{
			current++;
		}
		animatePersona();
	});
	$(".arrow-left").click(function(){
		if(current == 0){
			current = 2;
		}
		else{
			current--;
		}
		animatePersona();
	});

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop > yPos){
			animateText();
		}
	});

	function animatePersona(){
		$('.personaParent').animate({scrollLeft: current*width/3}, 500);
	}

	function animateText(){
		if(animated == 0){
			animated = 1;
			$("#who .changeText .hideThis").fadeOut("slow", function(){
				$("#who .changeText .showThis").fadeIn("slow");
			});
		}
	}	
});