//word.js word constructor
var Letter = require("./letter.js")

var Word = function(input) {
	var letters=[];
	this.newWord = function(input) {
		for (i=0; i < input.length; i++) {
			var newWord = input
			var newLetter = new Letter(newWord.charAt(i))
			letters.push(newLetter)
		}
		// console.log(letters)
	}

	this.displayWord = function(input) {
		var displayWord = ""
		displayWord = letters.join(" ")
		console.log("displayWord: " + displayWord)
	}

	this.guessLetter = function(input) {
		for (i=0; i<letters.length; i++) {
			letters[i].guessLetter(input)
		}
		displayWord = letters.join(" ")
		console.log("displayWord: " + displayWord)
	}
}

module.exports = Word;

//******** unit test code begin ****************
// var word = new Word("Hangman")
// word.newWord("Hangman")
// word.displayWord()
// word.guessLetter("a")
// word.guessLetter("H")
// word.guessLetter("x")
// word.guessLetter("n")
// word.guessLetter("g")
// word.guessLetter("m")
//******** test code end   ****************