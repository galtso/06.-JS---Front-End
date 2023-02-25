function mathOperation(firstNumber, secondNumber, operator) {
    let result = {
        "+": firstNumber + secondNumber,
        "-": firstNumber - secondNumber,
        "*": firstNumber * secondNumber,
        "/": firstNumber / secondNumber,
        "%": firstNumber % secondNumber,
        "**": firstNumber ** secondNumber,
    }
    console.log(result[operator])
}