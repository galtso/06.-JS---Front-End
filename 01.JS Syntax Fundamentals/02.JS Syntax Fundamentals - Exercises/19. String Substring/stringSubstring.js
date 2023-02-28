function solve(word, text) {
    text = text.split(" ");
    text = text.map(w => w.toLowerCase());
    if(text.includes(word.toLowerCase())){
        console.log(word);
    }else(
        console.log(`${word} not found!`)
    )
}

solve('javascript', 'JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');