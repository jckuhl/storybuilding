//default to the sidebar being open
var sidebarOpen = true;
$("#login-screen").hide();


//default to the log in screen being hidden
//later add functionality that defaults to screen being hidden if
//user is logged in via cookie, but defaults to show if user is not logged in

$("#close").on("click", function() {
	closeLogInWithoutSubmit();
});
$("#login").on("click", function() {
	showLogInScreen();
});
$("#submit").on("click", function() {
	closeLogInWithSubmit();
});

function closeLogInWithoutSubmit() {
	//closes the screen without logging in
	$("#login-screen").hide();
}

function showLogInScreen() {
	$("#login-screen").show();
}

function closeLogInWithSubmit() {
	if($("#user_name").val() && $("#email").val() && $("#password").val()) {
	//ensures there's data in the form (actual data is checked with DB)

		//submits the form
		var name = $("#user_name").val();	//until we have an actual data base, we'll just pass the user name over
		$("#username").text(name);
		//$("#username").show();
		$("#login").text("Log Out");
		//and closes the screen
		$("#login-screen").hide();
	}
}

//AJAX
$("#char-build-html").on("click", function() {
	$(".container").load("charbuilding.html .container");
	$("#char-build-html").text("Return Home!")
});