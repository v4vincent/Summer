
function playGuessingGame(numToGuess, totalGuesses){
    let guess1 = parseInt(prompt("Enter a number between 1 and 100"))


    for (let i = 0; i < totalGuesses; ++i) {
        if (guess1 === numToGuess){
            console.log(i+1);
            return i;

        }
        else if (guess1 < numToGuess){
            guess1 = parseInt(prompt("Guess is too small. Guess a higher number."));
        }else if (guess1 > numToGuess){
            guess1 = parseInt(prompt("Guess is too high. Guess a small number."));
        }
        else if (isNaN(guess1)){
            guess1 = parseInt(prompt("Please enter a number."));
            i = i -1;

        }
    }
}

playGuessingGame(5,10)