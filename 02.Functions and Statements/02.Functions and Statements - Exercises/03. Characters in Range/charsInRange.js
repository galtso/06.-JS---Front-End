function printCharsInRange(char1, char2){
    let firstChar = char1.charCodeAt(0);
    let secondChar = char2.charCodeAt(0);
    let first = Math.min(firstChar, secondChar);
    let second = Math.max(firstChar, secondChar);
    let ouput = [];
    for (let index = first + 1; index < second; index++) {
        ouput.push(String.fromCharCode(index));
    }
    console.log(ouput.join(" "));
}

printCharsInRange('a','d')
printCharsInRange('C','#')