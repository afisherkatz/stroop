var wait = true;
var input = new Array();
var pairs = new Array();
var pairs_temp = new Array();
var num_trials = 10;
var colors = [["red", "#FF0000"],
			  ["green", "#00FF00"],
			  ["blue", "#0000FF"],
			  ["yellow", "#FFFF00"]];
var len = colors.length;
for (var ii = 0; ii < len; ii++) {
	for (var jj = 0; jj < len; jj++) {
		if (ii != jj) {
			pairs[pairs.length] = [colors[ii][0], colors[jj][1]];
		}
	}
}
pairs_temp = pairs.slice();
var count = 1;
var is_test = false;

function KeyHandler() {
	$(document).on('keydown', function(e) {
		//wait = false;
		//document.write(wait);
		input[input.length] = String.fromCharCode(e.keyCode);
		if (num_trials >= 0) {
			next_stroop();
			alert("ready for the next color?");
		}
	});
}



$(document).ready(function() {
	KeyHandler();
});


function next_stroop() {
	if (pairs_temp) {
		var index = Math.floor(Math.random() * pairs_temp.length);
		var display_word = "<font color=\"";
		display_word += pairs_temp[index][1];
		display_word += "\">";
		display_word += pairs_temp[index][0];
		display_word += "</font>";
		$("#container").html(display_word);
		pairs_temp.splice(index,1);
	}

}


