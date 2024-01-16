function subtract() {
    const firstNum = document.querySelector('#firstNumber').value;
    const secondNum = document.getElementById('secondNumber').value;
    let result = document.querySelector('#result');
    result.textContent = Number(firstNum) - Number(secondNum);
}