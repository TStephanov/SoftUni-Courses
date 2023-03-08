function demo() {
    // Variation
    const calc = (number) => sum(10, number);

    // Variation
    const calc2 = function (number) {
        return sum(13, number)
    };

    // NOTE: use one of 2 returns, for result
    return calc;
    // return calc2;
}

function sum(a, b) {
    return a + b;
}

let result = demo();
console.log(result(5)); // calc = 15; calc2 = 18