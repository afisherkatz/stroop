var wait = true;
var input = new Array();
var pairs = new Array();
var pairs_temp = new Array();
var num_trials = 15;
var colors = [["red", "#FF0000"],
			  ["green", "#00FF00"],
			  ["blue", "#0000FF"],
			  ["yellow", "#FFFF00"]];
var len = colors.length;

// generate word-color pairs
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

var ready = true;
function KeyHandler() {
	$("#red").on('mouseenter', function(e) {
		if (ready) {
			input[input.length] = "red";
			ready = false;
		}
	});

	$("#green").on('mouseenter', function(e) {
		if (ready) {
			input[input.length] = "green";
			ready = false;
		}
	});

	$("#blue").on('mouseenter', function(e) {
		if (ready) {
			input[input.length] = "blue";
			ready = false;
		}
	});

	$("#yellow").on('mouseenter', function(e) {
		if (ready) {
			input[input.length] = "yellow";
			ready = false;
		}
	});

	$("#center-cross").on('mouseenter', function(e) {
		if (!ready) {
			if (num_trials > 1) {
				next_stroop();
			}
			ready = true;
		}
	});
}



$(document).ready(function() {
	KeyHandler();
	next_stroop();
});


function next_stroop() {
	if (pairs_temp.length > 0) {
		var index = Math.floor(Math.random() * pairs_temp.length);
		var display_word = "<font color=\"";
		display_word += pairs_temp[index][1];
		display_word += "\">";
		display_word += pairs_temp[index][0];
		display_word += "</font>";
		$("#word").html(display_word);
		pairs_temp.splice(index,1);
		num_trials--;
	} else {
		pairs_temp = pairs.slice();
	}

}


