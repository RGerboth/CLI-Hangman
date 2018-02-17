//CLI Hangman.js 
var inquirer = require("inquirer")
var Word = require("./word.js")
var numLettersGuessed = 0

var wordList = [
	"cardinal",
	"warbler",
	"sparrow",
	"chickadee",
	"woodpecker",
	"flicker",
	"hummingbird",
	"robin",
	"magpie",
	"bluebird",
	"eagle"
	]

var newWord = "Hangman"
var guessessLeft = 10
var correctGuesses = 0
var currentWordIndex = 0
var gameOver = false
var gamesWon = 0

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
						letterGuessedLower = response.letterGuessed.toLowerCase()
						console.log(" ")
						console.log("You guessed: " + letterGuessedLower)
						console.log(" ")
						currentWord.guessLetter(letterGuessedLower)
						if (!letterGuessedLower || wordList[currentWordIndex].indexOf(letterGuessedLower) === -1) {
							console.log(wordList[currentWordIndex].indexOf(letterGuessedLower))
							console.log("     INCORRECT")
							console.log(" ")
						} else {
							console.log("     CORRECT!")
							console.log(" ")
						}
						guessessLeft--
						console.log("Guesses Left: " + guessessLeft)
						console.log(" ")			
						displayWord = currentWord.displayWord()
						console.log("    " + displayWord)
						console.log(" ")
						if (displayWord.indexOf("_ ") === -1) {
							console.log("Winner! Congratulations.")
							gameOver=true
							//start new game
						}
						playerGuess()
					})
			} else {
				console.log(" ")
				console.log("Game Over")
				console.log(" ")
				console.log("Sorry for the loss. I recommend the Peterson Field Guide to Birds of Western North America.")
				//start new game
			}
		}

		playerGuess()

	} else {
		console.log("Hey, no problem...come back when you are ready.")
	} 
});