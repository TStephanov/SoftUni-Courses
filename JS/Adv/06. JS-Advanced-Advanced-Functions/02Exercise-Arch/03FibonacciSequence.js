function getFibonator() {
    let sequence = [0];
    const firstToAdd = 1;
    
    function print() {
        if (sequence.length === 1) {
            sequence.push(firstToAdd);
        } else {
            const numToAdd = sequence[sequence.length - 2] + sequence[sequence.length - 1];
            sequence.push(numToAdd);
        }

        return sequence[sequence.length - 1];
    }
    
    return print;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13