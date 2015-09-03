$( document ).ready(function() {

// run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);





});

//Function to the css rule
function checkSize(){
    if ($(".nav__item").css("display") == "block" ){


$( "#close-menu" ).hide();
	$( ".nav" ).hide();
	$( "#hamburger" ).click(function() {
		$( ".nav" ).slideToggle( "slow", function() {
			$( "#hamburger" ).hide();
			$( "#close-menu" ).show();
		});
	});

	$( "#close-menu" ).click(function() {
		$( ".nav" ).slideToggle( "slow", function() {
			$( "#close-menu" ).hide();
			$( "#hamburger" ).show();
		});
	});


    }
}