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