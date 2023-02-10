function orbit(input) {
    let width = input[0];
    let height = input[1];
    let x = input[2];
    let y = input[3];

    // create a matrix
    let matrix = [];
    for (let i = 0; i < height; i++) {
        let row = [];
        for (let i = 0; i < width; i++) {
            row.push('');
        }
        matrix.push(row);
    }

    // insert initial, star, element
    matrix[x][y] = 1;
    let rowI = x;
    let colI = y;

    // fill-in elements on star row
    matrix[rowI] = fillRow(matrix[rowI], matrix[rowI][colI], colI);
    
    // fill star column elements


    // fill-in the matrix, from star to bottom rows
    for (let i = rowI; i < height; i++) {
        rowI++;
        let isRowIValid = isValid(matrix, rowI);
        matrix[rowI][colI] = matrix[rowI - 1][colI] + 1;
        if (isRowIValid) {
            matrix[rowI] = fillRow(matrix[rowI], matrix[rowI][colI], colI);
        }
    }

    // fill-in the matrix, from star to top rows
    rowI = x; // set initial value, as it might be changed in previous loop
    colI = y; // set initial value, as it might be changed in previous loop

    for (let i = rowI; i <= 0; i--) {
        rowI--;
        let isRowIValid = isValid(matrix, rowI);
        matrix[rowI][colI] = matrix[rowI + 1][colI] + 1;
        if (isRowIValid) {
            matrix[rowI] = fillRow(matrix[rowI], matrix[rowI][colI], colI);
        }
    }

    // row = current row; initialNumber = currently filled element of that row, e.g. the on on "star" column; column = star column;
    function fillRow(rowArr, initialNumber, columnIndex) {
        let index = columnIndex;
        let numberToFill = initialNumber;

        // fill right positioned star elements
        for (let i = index; i < rowArr.length; i++) {
            index++;
            let indexValid = isValid(rowArr, index);
            if (indexValid) {
                numberToFill++;
                rowArr[index] = numberToFill;
            }

        }

        // fill left positioned star elements
        index = columnIndex; // set initial value to "index", as it might be changed in the prior loop
        numberToFill = initialNumber; // set initial value to "numberToFill", as it might be changed in the prior loop

        for (let i = index; i >= 0; i--) {
            index--;
            let indexValid = isValid(rowArr, index);
            if (indexValid) {
                numberToFill++;
                rowArr[index] = numberToFill;
            }
        }

        return rowArr;
    }

    function isValid(array, index) {
        if (index >= 0 && index < array.length) {
            return true;
        } else {
            return false;
        }
    }

    console.table(matrix);
}

orbit([4, 4, 1, 2]);
// 3 2 2 2
// 3 2 1 2
// 3 2 2 2
// 3 3 3 3
// orbit([4, 4, 0, 0]);
// 1 2 3 4
// 2 2 3 4
// 3 3 3 4
// 4 4 4 4
// console.log('------------');
// orbit([5, 5, 2, 2]);
// 3 3 3 3 3
// 3 2 2 2 3
// 3 2 1 2 3
// 3 2 2 2 3
// 3 3 3 3 3
// console.log('------------');
// orbit([5, 5, 2, 2]);
//  3  3  3  3  3
//  3  2  2  2  3
//  3  2  1  2  3
//  3  2  2  2  3
//  3  3  3  3  3
