function demo() {
    // spred operator
    let arr = [1, 2, 3, 'four', 'five', 6];
    console.log(...arr);

    // rest operator
    function myFunc(...elements) {
        console.log(elements);
        elements.forEach(element => console.log(element));
    }
    let result = myFunc(1, 2, 3, 4, 5);
}

demo();