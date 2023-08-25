function getFibonator() {
    let sequence = [0, 1];

    let calc = function () {
        let toPrint = sequence[sequence.length - 1];
        let nextNum = sequence.slice(sequence.length - 2).reduce((a, b) => a + b);
        sequence.push(nextNum);
        return toPrint;
    };

    return calc;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13