function calcWordFrequencies() {

    let userInput = prompt("Enter a list of words separated by spaces:");

    if (userInput === null || userInput.trim() === "") {
        return;
    }

    let words = userInput.trim().split(/\s+/);

    let wordFrequencyMap = new Map();

    words.forEach(function (word) {
        if (wordFrequencyMap.has(word)) {
            wordFrequencyMap.set(word, wordFrequencyMap.get(word) + 1);
        } else {
            wordFrequencyMap.set(word, 1);
        }
    });

    wordFrequencyMap.forEach(function (value, key) {
        console.log(key + " " + value);


    });

}

calcWordFrequencies();
