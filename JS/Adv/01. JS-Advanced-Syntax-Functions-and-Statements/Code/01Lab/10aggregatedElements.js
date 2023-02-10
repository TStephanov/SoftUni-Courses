function agregated(input) {
    // sum all input elements
    console.log(input.reduce((a, b) => a + b));
    // sum of inversed elements values
    console.log(input.map(el => 1 / el).reduce((a, b) => a + b));
    // concatenates all input elements
    console.log(input.join(''));
}

agregated([1, 2, 3]);
console.log(' - - - ');
agregated([2, 4, 8, 16]);