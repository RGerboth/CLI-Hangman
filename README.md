# CLI-Hangman
A Command-Line Hangman Game, Birds of North America Edition

## Overview
I kind of enjoy writing command line interfaces with inquirer. This game is an exercise in JavaScript and inquirer utilizing constructors for the letters and words. Each letter, once instantiated, knows it's own identity and whether or not it has been guessed. Each letter includes a method that can respond with either the value of itself if guessed correctly or an underscore if not. The words are built also from a constructor that assembles letters and includes functions for guessing letters and returning a display of the current word. The displayed word strings together the letters, which each know whether they are guessed or not and return the appropriate symbol. 

The rest is simple game score keeping for number of guessess left and games won.

## Key Technologies

* JavaScript
* Node.js
* inquirer

## Installation
This game runs in the command line and requires the inquirer node package. Here are the steps to try it out for yourself:

1. Clone the CLI-Hangman repo to your local device
2. From within the "cli-hangman" directory run "npm install" to install the inquirer package
3. Run "node index"
4. Enjoy!
