function solve(array, number){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(i % number ===0){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);
solve(['dsa',
'asd', 
'test', 
'tset'], 
2

);