function subtract() {
    let firstElement = document.getElementById('firstNumber').value;
    let secondElement = document.getElementById('secondNumber').value;

    let firstNumber = Number(firstElement);
    let secondNumber = Number(secondElement);
    let subtract = firstNumber - secondNumber;

    let result = document.getElementById('result');
    result.innerHTML = subtract;
}