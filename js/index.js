$(document).ready(function() {
	$("#fullpage").fullpage({
		verticalCentered: false,
		paddingTop: 0,
		resize: false,
		anchors:['profile','work','resume','publications'],
		scrollingSpeed: 400
	});
	forcePosition();
	
	$("#vmenu li").mouseover(function() {
		$( this ).addClass("selected");
		if ($( this ).attr("id") != "profilebutton")
			$("#profilebutton").removeClass("selected");
	});
	
	$("#vmenu li").mouseleave(function() {
		$( this ).removeClass("selected");
		$("#profilebutton").addClass("selected");
	});
	
	$("#profilebutton").click(function() {
		$.fn.fullpage.moveTo('profile');
	});
	
	$("#workbutton").click(function() {
		$.fn.fullpage.moveTo('work');
	});
	
	$("#resumebutton").click(function() {
		$.fn.fullpage.moveTo('resume');
	});
	
	$("#pubbutton").click(function() {
		$.fn.fullpage.moveTo('publications');
	});
});

$(window).resize(function() {
	forcePosition();
});

// ensures that social links panel doesn't run into menu
function forcePosition() {
	//console.log ($("#sociallinks").offset());
	
	if ( $("#sociallinks").offset().top < 200 ) {
		$("#sociallinks").addClass("moveup");
	} else {
		$("#sociallinks").removeClass("moveup");
	}
}