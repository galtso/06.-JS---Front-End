function solve(num1, num2) {
    let firstFact = calcFactorial(num1);
    let secondFact = calcFactorial(num2);
    console.log(Math.floor(firstFact / secondFact).toFixed(2));

    function calcFactorial(num) {
        let factSum = 1;
        if (num === 0) {
            return factSum = 1;
        } else {
            for (let i = 1; i <= num; i++) {
                factSum *= i;
            }
            return factSum;
        }
    }
}

solve(6, 2);