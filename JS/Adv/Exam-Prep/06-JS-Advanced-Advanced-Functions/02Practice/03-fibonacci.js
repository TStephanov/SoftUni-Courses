function getFibonator() {
    let sequence = [0, 1];

    let result = function() {
        // console.log(sequence);
        const toPrint = sequence[sequence.length - 1];
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
        return toPrint;
    }

    return result;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13