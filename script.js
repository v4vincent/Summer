function playGuessingGame(numToGuess, totalGuesses) {


    let intro = parseInt(prompt("Enter a number between 1 and 100"));
    let count = 1;

    if (intro === numToGuess) {
        return count;
    } else {
        while (count < totalGuesses) {
            let userInput = parseInt(prompt("Guessing game number: "));
            if (userInput === numToGuess) {
                count++;
                console.log("winner")
                break;

            }


        }
    }
    console.log(count)

}

playGuessingGame(5, 10);