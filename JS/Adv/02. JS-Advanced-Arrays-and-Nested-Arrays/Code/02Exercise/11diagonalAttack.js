function diagonalAttack(input) {
    // create matrix
    let matrix = [];
    for (let row of input) {
        matrix.push(row.split(' ').map((el) => Number(el)));
    }

    // find main diagonal sum
    let mainDiagSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        mainDiagSum += matrix[i][i];
    }

    // find second diagonal sum
    let secondDiagSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        secondDiagSum += matrix[i][matrix.length - 1 - i];
    }

    if (mainDiagSum === secondDiagSum) {
        // modify array
        for (let row = 0; row < matrix.length; row++) {
            for (let column = 0; column < matrix[row].length; column++) {
                if (column !== row && column !== matrix[row].length - 1 - row) {
                    matrix[row][column] = mainDiagSum;
                }
            }
        }
    }

    // print result(or unchanged) array
    matrix.forEach(row => console.log(row.join(' ')));
    // console.table(matrix); // SERVICE print
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1',
]);
console.log('----------');
// 5 15 15 15 1
// 15 4 15 2 15
// 15 15 3 15 15
// 15 4 15 2 15
// 5 15 15 15 1

diagonalAttack(['1 1 1', '1 1 1', '1 1 1']);
// 1 1 1
// 1 1 1
// 1 1 0
