function calc() {
    let stringOne = document.getElementById('num1');
    let stringTwo = document.getElementById('num2');
    
    let numberOne = Number(stringOne.value);
    let numberTwo = Number(stringTwo.value);

    let result = document.getElementById('sum');
    result.value = numberOne + numberTwo;
}