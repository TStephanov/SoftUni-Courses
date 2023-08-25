function add(input) {
    let result = 0;

    function sum(newValue) {
        result += newValue;

        return sum;
    }

    sum.toString = () => {
        return result;
    }

    return sum(input);
}

add(1);
console.log(add(1)(6)(-3).toString());