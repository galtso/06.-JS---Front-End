function subtract() {
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;
    const result = document.getElementById('result');

    let subtraction = Number(firstNumber) - Number(secondNumber);
    result.textContent = subtraction;
}