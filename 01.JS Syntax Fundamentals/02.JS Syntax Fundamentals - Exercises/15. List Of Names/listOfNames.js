// function solve(list){
//     list.sort();
//     let index = 1;
//     for (const name of list) {
//         console.log(`${index}.${name}`)
//         index++;
//     }
// }

// function solve(list){
//     console.log(list.sort().map((name,index) => `${index + 1}.${name}`).join("\n"));
// }

function solve(arr) {
    arr.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}.${ arr[i] }`);
}
  }

solve(["John", "Bob", "Christina", "Ema"])