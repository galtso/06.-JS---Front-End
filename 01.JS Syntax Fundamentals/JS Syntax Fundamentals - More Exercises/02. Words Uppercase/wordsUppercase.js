function solve(line) {
    let firstArray = line.split(" ");
    let result = [];
    for (const word of firstArray) {
        let currentWord = "";
        for (const letter of word) {
            if (letter.toUpperCase() !== letter.toLowerCase()) {
                currentWord += letter.toUpperCase();
            }else{
                result.push(currentWord)
                currentWord = "";
            }
        }
        if (currentWord) {
            result.push(currentWord);
        }
    }
    console.log(result.join(", "));
}

solve('Hi, how are you?');