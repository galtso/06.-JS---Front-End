function solve(char1, char2, char3){
    let string = char1 + char2 +char3;
    
    console.log(string.split("").reverse().join(" "));
}

solve('A',
'B',
'C'
);