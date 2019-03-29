
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessChoices = [];
var options = ["a", "b", "c", "d", "e",
    "f", "g", "h", "j", "k",
    "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u",
    "w", "x", "y", "z"];

var winText = document.getElementById("win-text");
var lossText = document.getElementById("loss-text");
var guessesLefttext = document.getElementById("guesses-left-text");
var guesssofartext = document.getElementById("guess-so-far-text");
var computerGuess = options[Math.floor(Math.random() * options.length)];
document.onkeyup = function (event) {
    var userGuess = event.key;

    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        guessChoices = [];
        winText.textContent = wins;
        computerGuess = options[Math.floor(Math.random() * options.length)];
    }

    else {
        guessesLeft--
        guessChoices.push(userGuess)
    }

    if (guessesLeft === 0){
        losses++;
        guessesLeft = 9;
        guessChoices = [];
        lossText.textContent = losses;
        computerGuess = options[Math.floor(Math.random() * options.length)];
    }


    guessesLefttext.textContent = guessesLeft;
    guesssofartext.textContent = guessChoices;
    console.log(computerGuess);


}

