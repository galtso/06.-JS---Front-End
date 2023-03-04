function printMatrix(n){
//    let matrix = [];
//   (n) => new Array(n).fill(new Array(n).fill(n)).forEach(row => console.log(row.join(' ')))

for (let i = 0; i < n; i++){
    for (let i = 0; i < n; i++){
        process.stdout.write(`${n} `);
    }
    console.log()
}
}

printMatrix(3);