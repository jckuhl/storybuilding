//character constructor, populates with characters at the Submit button
function Character(name, species, gender, bio) {
	this.name = name;
	this.species = species;
	this.gender = gender;
	this.bio = bio;
}

var character = new Character("Suzetta","Human","Female","Orphaned as a child");
var customQuestion = '<div class="user-added-question"><p><input type="text" name="custom-question3" placeholder="Write your own question!"></p><p><textarea name="custom-question-answer3" placeholder="Answer your own question!"></textarea></div>'

//reset the form on click
$("#reset-btn").on("click", function() {
	var warning = confirm("This will reset every field.  Click 'Okay' to continue");
	if(warning !== false) {
		//iterate through each form input
		$(".question-form input, .question-form textarea").each(function() {
			//set them to empty
			$(".question-form input, .question-form textarea").val("");
		});
		//remove all user added questions
		$(".user-added-question").remove();
	}
});

//Add a question field for user custom questions
$("#add-question").on("click",function() {
	$(".questionaire").append(customQuestion);
});

//remove custom question fields in reverse order they were made
$("#remove-question").on("click",function() {
	var index = $(".user-added-question").length;
	if(index > 0) {
		$(".user-added-question")[index-1].remove();
	}
})