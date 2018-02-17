//CLI Hangman.js 
var inquirer = require("inquirer")
var Word = require("./word.js")

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
	"starling",
	"junco",
	"blackbird",
	"oriole",
	"thrush",
	"raven",
	"finch",
	"eagle"
	]

var newWord = "Hangman"
var guessessLeft = 10
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
		console.log("Great, let's get started. ")
		newGame = function() {
			console.log("")
			console.log("Here is your new word:")
			console.log("")
			gameOver = false
			guessessLeft = 10
			currentWordIndex = [Math.floor(Math.random() * wordList.length)];
			// console.log("currentWordIndex: " + currentWordIndex + ", word: " + wordList[currentWordIndex]);
			var currentWord = new Word()
			currentWord.newWord(wordList[currentWordIndex])
			console.log("    " + currentWord.displayWord())
			console.log("")
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
							}
							playerGuess()
						})
				} else {
					console.log(" ")
					if (guessessLeft === 0  && !gameOver) {
						console.log("You are out of guesses! I recommend the Peterson Field Guide to Birds of Western North America.")
					} 
					newGame()
				}
			}
			playerGuess()
		}
		newGame()

	} else {
		console.log("")
		console.log("Hey, no problem...come back when you are ready.")
	} 
});