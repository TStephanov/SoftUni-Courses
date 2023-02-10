function diagonals(input) {
    let first = 0;
    let second = 0;

    for (let i = 0; i < input.length; i++) {
        first += input[i][i];
        second += input[i][input.length - 1 - i];
    }

    console.log(first + ' ' + second);
    // console.log(first, second);
}

diagonals([
    [20, 40],
    [10, 60]
]);
console.log('------');
diagonals([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);