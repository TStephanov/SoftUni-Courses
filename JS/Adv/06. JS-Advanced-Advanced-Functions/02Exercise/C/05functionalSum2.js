function add(input) {
    let result = 0;

    function sum(value) {
        result += value;

        return sum;
    }
    sum.toString = () => {
        return result;
    }

    return sum(input);
}

// console.log(add(1));
console.log(add(1)(6)(-3).toString());