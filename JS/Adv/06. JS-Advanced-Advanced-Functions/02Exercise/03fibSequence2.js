function getFibonator() {
    let a = 0;
    let b = 1;

    function sum() {
        const c = a + b;
        a = b;
        b = c;

        return a;
    }

    return sum;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13