var wait = true;
var input = new Array();
var pairs = new Array();
var colors = [["red", "#FF0000"],
			  ["green", "#00FF00"],
			  ["blue", "#0000FF"],
			  ["yellow", "#FFFF00"]];
var count = 1;
var is_test = false;
function KeyHandler() {
	$(document).on({
		keypress: function(e) {
			//wait = false;
			//document.write(wait);
			input[input.length] = String.fromCharCode(e.keyCode);
			count++;
			if (pairs) {
				document.write(count);
				next_stroop();
			}
		}
	});
}

//for (var z = 0; z <= 5; z++){
	$(document).ready(function(){
		
		KeyHandler();
});
//}*/
    


function stroop (num_pairs) {
	this.valid_pairs = new Array();
	for (var i = 0; i < colors.length; i++) {
		var temp_color = colors[0];
		colors.shift();
		colors[colors.length] = temp_color;
		this.valid_pairs[i] = colors.slice();
	}	

	var word_num = null;
	var prev_word = null;
	var color_num = null;
	var color = null;
	for (var j = 0; j < num_pairs; j++) {
		wait = true;

		word_num = Math.floor((Math.random() * colors.length));

		while (word_num == prev_word) {
			word_num = Math.floor((Math.random() * colors.length));
		}
		prev_word = word_num;
		var color_num = Math.floor((Math.random() * (colors.length - 1)) + 1);
		var word = this.valid_pairs[word_num][0][0];
		var color = this.valid_pairs[word_num][color_num][1];
		pairs[pairs.length] = [word, color];
	}
}

function next_stroop() {
	document.write(pairs[0][0].fontcolor(pairs[0][1]));
	pairs.shift();
}

stroop(600);
