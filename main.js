function check(){


var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0; 


	if (question1 == "2015") {
		correct++;
	}
	if (question2 == "2008") {
		correct++;
	}

	if (question3 == "2013") {
		correct++;
	}

var messages = ["Bro your AMAZING" , "Thats just fine I guess" , "Did you even try!?"];
var gifs = ["images/win.gif", "images/its ok.gif", "images/Loose.jpg"];






var range;

	if (correct < 1) {
		range = 2;
	}

	if (correct > 0 && correct < 3) {
		range = 1;
	}

	if (correct > 2) {
		range = 0;
	}







document.getElementById("after_submit").style.visibility = "visible";




document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "you got " + correct + " correct.";
document.getElementById("picture").src = gifs[range];
}