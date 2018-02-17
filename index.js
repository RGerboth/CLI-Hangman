//CLI Hangman.js 

var Word = require("./word.js")

var guessessLeft = 10
var correctGuesses = 0

var currentWord = new Word("Hangman")
currentWord.newWord("Hangman")
currentWord.displayWord()
currentWord.guessLetter("a")
currentWord.guessLetter("H")
currentWord.guessLetter("x")
currentWord.guessLetter("n")
currentWord.guessLetter("g")
currentWord.guessLetter("m")
