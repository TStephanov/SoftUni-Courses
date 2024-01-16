function calc() {
    const value1 = document.querySelector('input#num1').value;
    const value2 = document.querySelector('input#num2').value;
    let result = document.querySelector('input#sum');    
    result.value = Number(value1) + Number(value2);
}
