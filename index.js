//CLI Hangman.js 
var inquirer = require("inquirer")
var Word = require("./word.js")
var numLettersGuessed = 0

var wordList = [
	"cardinal",
	"flycatcher",
	"sparrow",
	"chickadee",
	"woodpecker",
	"flicker",
	"hummingbird",
	"robin",
	"magpie",
	"eagle"
	]

var newWord = "Hangman"
var guessessLeft = 10
var correctGuesses = 0
var currentWordIndex = 0
var gameOver = false

// var currentWord = new Word()
// currentWord.newWord(newWord)
// console.log(currentWord.displayWord())
// currentWord.guessLetter("a")
// console.log(currentWord.displayWord())
// currentWord.guessLetter("H")
// console.log(currentWord.displayWord())
// currentWord.guessLetter("x")
// console.log(currentWord.displayWord())
// currentWord.guessLetter("n")
// console.log(currentWord.displayWord())
// currentWord.guessLetter("g")
// console.log(currentWord.displayWord())
// currentWord.guessLetter("m")
// console.log(currentWord.displayWord())

console.log("Welcome to Hangman, Birds of North America Edition")
console.log(" ")

inquirer.prompt([
    {
      type: "confirm",
      message: "Are you ready to play?",
      name: "confirm",
      default: true
  	}
]).then(function(response) {
	if (response.confirm) {
		console.log("Great, let's get started. Here is your word:")
		gameOver = false
		guessessLeft = 10
		correctGuesses = 0
		currentWordIndex = [Math.floor(Math.random() * wordList.length)];
		console.log("currentWordIndex: " + currentWordIndex + ", word: " + wordList[currentWordIndex]);
		var currentWord = new Word()
		currentWord.newWord(wordList[currentWordIndex])
		console.log(currentWord.displayWord())
		playerGuess = function() {
			if (guessessLeft > 0 && !gameOver) {
				inquirer.prompt([
					{
		      		type: "input",
		      		message: "  Pick a letter, A - Z",
		      		name: "letterGuessed"
		    		}
					]).then(function(response) {
						console.log("You guessed " + response.letterGuessed)
						currentWord.guessLetter(response.letterGuessed)
						console.log("    " + currentWord.displayWord())
						//check for game over here
						
						//reset game if gameOver
						//increment games won
						guessessLeft--
						playerGuess()
					})
			} else {
				console.log("Game Over")
			}
		}

		playerGuess()

	} else {
		console.log("No problem, come back when you are ready.")
	} 
});