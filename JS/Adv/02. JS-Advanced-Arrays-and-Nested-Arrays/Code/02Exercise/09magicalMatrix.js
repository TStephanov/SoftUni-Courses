function magicalMatrix(matrix) {
    let comparingSum = matrix[0].reduce((a, b) => a + b);
    let isMagic = true;

    for (let row of matrix) {
        let currentRowSum = row.reduce((a, b) => a + b);

        if (currentRowSum !== comparingSum) {
            isMagic = false;
            break;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        let columnSum = 0;

        for (let z = 0; z < matrix.length; z++) {
            let colIndex = i;
            let rowIndex = z;
            let currentElement = matrix[rowIndex][colIndex];
            columnSum += currentElement;
        }

        if (columnSum !== comparingSum) {
            isMagic = false;
            break;
        }
    }
    
    isMagic ? console.log('true') : console.log('false');
}

magicalMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
]);
// true
console.log('-----');
magicalMatrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
]);
// false
console.log('-----');
magicalMatrix([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
]);
// true
