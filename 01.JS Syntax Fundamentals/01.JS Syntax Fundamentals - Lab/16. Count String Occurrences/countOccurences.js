function solve(text, word){
    let count = 0;
    let words = text.split(' ');
    for (const w of words) {
        if(w===word){
            count++;
        }
    }
    console.log(count);
}

solve('This is a word and it also is a sentence','is');
solve('softuni is great place for learning new programming languages',
'softuni'
);