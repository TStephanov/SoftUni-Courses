function add(num) {
    let sum = 0;

    function inner(number) {
        sum += number;

        return inner;
    }

    inner.jopppy = () => { // toString() method is overwriten. We might use whatever name we want here
        return sum;
    }

    return inner(num);
}

console.log(add(1)(6)(-3).jopppy());