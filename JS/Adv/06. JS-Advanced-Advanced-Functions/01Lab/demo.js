function demo() {
    let arr = [1, 2, 3, 12, 5, 6, 7];

    function isFound(el) {
        return el > 10;
    }

    let result = arr.find(isFound);
    console.log(result);
}

demo();