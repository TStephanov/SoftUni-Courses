function calc() {
    let paramOne = document.getElementById('num1');
    let paramTwo = document.getElementById('num2');
    // let paramOne = Number(document.getElementById('num1').value);
    // let paramTwo = Number(document.getElementById('num2').value);
    
    let numOne = Number(paramOne.value);
    let numTwo = Number(paramTwo.value);
    
    let result = numOne + numTwo;
    // let result = paramOne + paramTwo;

    let sum = document.getElementById('sum');
    sum.value = result;
}