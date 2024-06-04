
function playGuessingGame(numToGuess, totalGuesses){

    for (let i = 0; i < totalGuesses; i++) {
        let guess1 = parseInt(prompt("Enter a number between 1 and 100"))
        if (guess1 === numToGuess){
            return i+1;

        }
    }

}

playGuessingGame(5,10)