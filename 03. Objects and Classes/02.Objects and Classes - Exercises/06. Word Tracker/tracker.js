function tracker(input) {
    let searchedWords = input.shift().split(' ');
    let words = {};

    for (const word of searchedWords) {
        let count = input.filter((w) => w === word).length;
        words[word] = count;
    }
    let sorted = Object.entries(words).sort((a, b) => b[1]-a[1]);
    
    for (const [w,count] of sorted) {
        console.log(`${w} - ${count}`)
    }
}

tracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    
)