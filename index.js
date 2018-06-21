var inquirer = require("inquirer");

var Letter = require("./letter.js");
var Word = require("./word");

var userGuesses = [];
var userGuessesRemaining = 10;


// Word bank 
var choices = ["hello", "goodbye", "farewell", "adios", "hola", "sup"];


function choseWord() {
    guessingWord = choices[Math.floor(Math.random() * choices.length)].toUpperCase();
    for (var i = 0; i < guessingWord.length; i++) {
        userGuesses.push(new Letter(guessingWord.charAt(i)));
    }
};

var guessingWord = new Word(userGuesses);

function setUp() {
    console.log("Welcome to this hangman style game! May the odds be ever in your favor! \nYou have " + userGuessesRemaining + " tries!");
    choseWord();
    console.log("Catergory is greetings! \nYour secret word has " + guessingWord.length + " characters!");
    guessLetters();
};

setUp();

function guessLetters() {
    if (userGuessesRemaining > 0) {
        inquirer.prompt([
            {
                type: "input",
                maxlength: "1",
                name: "userGuess",
                message: "Select a letter to guess",
            }
        ]).then(function (letterGuess) {
            this.character = letterGuess.userGuess;
            console.log("You've selected " + this.character.toUpperCase() + "!");
            userGuessesRemaining--;

            if (this.character.length > 1) {
                console.log("Please only enter one letter.");
                guessLetters();
            }
        });
    }
}
