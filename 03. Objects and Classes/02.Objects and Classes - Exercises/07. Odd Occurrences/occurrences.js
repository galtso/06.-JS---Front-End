function oddOccurrences(input) {
    input = input.split(' ').map((e) => e.toLowerCase());
    let words = {};

    
    for (const word of input) {
        if(words.hasOwnProperty(word)){
            words[word]++;
        }else{
            words[word] = 1;
        }
    }
    let keys = Object.keys(words).filter((k) => words[k] % 2 !== 0);
    console.log(keys.join(' '));
    
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')