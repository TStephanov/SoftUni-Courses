function math(num1, num2, operator) {
    let collection = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '**': (a, b) => a ** b,
    }
        
    let result = collection[operator](num1, num2);
    console.log(result);
    // OR 
    // console.log(collection[operator](num1, num2));
}

math(5, 6, '+');
math(3, 5.5, '*');