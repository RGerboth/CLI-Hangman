//CLI Hangman.js 

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

var currentWord = new Word()
currentWord.newWord(newWord)
console.log(currentWord.displayWord())
currentWord.guessLetter("a")
console.log(currentWord.displayWord())
currentWord.guessLetter("H")
console.log(currentWord.displayWord())
currentWord.guessLetter("x")
console.log(currentWord.displayWord())
currentWord.guessLetter("n")
console.log(currentWord.displayWord())
currentWord.guessLetter("g")
console.log(currentWord.displayWord())
currentWord.guessLetter("m")
console.log(currentWord.displayWord())
