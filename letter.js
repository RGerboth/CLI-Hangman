//letter.js letter constructor

var Letter = function(value) {
	this.value=value;
	this.guessed=false;
	this.placeholder="_ "

	this.toString = function() {
		if (this.guessed) {
			return this.value
		} else {
			return this.placeholder
		}
	}

	this.guessLetter = function(value) {
		if (value == this.value) {
			this.guessed = true;
		}
		this.toString()
	}
}

module.exports=Letter;

//******** unit test code begin ****************
// var letter = new Letter("A")
// console.log("Letter: " + letter.value)
// letter.guessLetter("B")
// letter.guessLetter("A")

//******** unit test code end   ****************