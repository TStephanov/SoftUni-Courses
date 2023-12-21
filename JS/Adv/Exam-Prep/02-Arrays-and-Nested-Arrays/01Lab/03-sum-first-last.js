function sum(input) {
    if (input.length === 1) {
        console.log(Number(input[0]));
    } else {
        console.log(Number(input[0]) + Number(input[input.length - 1]));
    }
}

sum(['20', '30', '40']);
sum(['5', '10']);
sum(['3']);