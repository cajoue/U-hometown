$( document ).ready(function() {

	alert ("hello");

    $("#nav-hamburger").click(function() {
        $(this).toggleClass("open");
        $("#drawer").toggleClass("open");
    });
});



