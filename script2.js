
function playGuessingGame(numToGuess, totalGuesses) {


    let count = 0;

    for (let i = 0; i < totalGuesses; i++) {

        let intro = parseInt(prompt("Enter a number between 1 and 100."));

        count++;

        if (intro === numToGuess) {
            return count;
        } else {
            let intro2 = parseInt(prompt("enter num"));
            if (intro2 === numToGuess) {
                console.log(count);
                return count;
            }
        }

    }
    return count;

}
playGuessingGame(5, 10);