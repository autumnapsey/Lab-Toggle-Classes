$(document).ready(function(){
	$('li').hover(function(){
		$(this).fadeTo(200, .25);	
		}, 
		function(){$(this).fadeTo(200, 1);
	});

	var saveText = $('li').text();

	$('li').click(function(){
	
		if($(this).text() === "Clicked!") {
			$(this).text(saveText);
			console.log("the if");
		}
		else {
			$(this).text("Clicked!");
			$(this).css("background-color", "#3396fb");
			console.log("the else");

		}

	});
});