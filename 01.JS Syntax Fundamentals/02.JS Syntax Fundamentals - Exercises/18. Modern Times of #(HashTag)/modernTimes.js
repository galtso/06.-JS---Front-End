function solve(input){
    input = input.split(" ");
    for (const word of input) {
        if(word.match(/#[A-Za-z]+/)){
            console.log(word.substring(1,word.length));
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')