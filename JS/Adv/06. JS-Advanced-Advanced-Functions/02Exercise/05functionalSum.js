function add(num) {
    let sum = 0;
    // when calling inner, it updates the sum and returns itself. Therefore, upon each call, add(1)(6)(-3),: it's called with 1, updates sum with 1, returns itself -> it's called with 6, updates sum, it's called with -3, updates sum, returns itself. Followed by .toString - explained below
    function inner(number) {
        sum += number;

        const temp = inner;
        return inner;
    }
    // it's like, when giving a value to inner.toString (e.g. (arrow function value result)), we are connecting that result with the calling of the function below, in console.log with '.toString()'. Therefore, when calling it in console.log, we are receiving the sum - which is the result of the arrow func - 'return sum'. ... As a result of each call of inner(), we are receiving update of sum and inner func itself(explained above). Therefore, when all calls are finished, e.g. '(1)(6)(-3)', as result of '(-3)', we have 'inner', so console.log looks like this console.log(inner.toString()), which calls this below where the result is 'return sum'
    inner.toString = () => {
        return sum;
    }

    return inner(num);
}

// console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());

/*
// Clean solution
function add(input) {
    let sum = 0;

    function inner(value) {
        sum += value;
        return inner;
    }
    inner.toString = () => {
        return sum;
    }

    return inner(input);
}

// console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());
*/