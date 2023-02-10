function neighbours(input) {
    let count = 0;
    let iRow = 0;

    function isValid(array, index) {
        if (index >= 0 && index < array.length) {
            return true;
        } else {
            return false;
        }
    }

    function areSame(inputOne, inputTwo) {
        if (inputOne === inputTwo) {
            return true;
        } else {
            return false;
        }
    }

    input.forEach(row => {
        for (let iColumn = 0; iColumn < row.length; iColumn++) {
            let element = row[iColumn];
            // let leftElColIndex = iColumn - 1;
            let rightElColIndex = iColumn + 1;
            // let topElRowIndex = iRow - 1;
            let bottomElRowIndex = iRow + 1;

            // if (isValid(row, leftElColIndex)) {
            //     let leftElement = input[iRow][leftElColIndex];
            //     if (areSame(element, leftElement)) {
            //         count++;
            //         row[iColumn] = element + ' - matched';
            //     }
            // }

            if (isValid(row, rightElColIndex)) {
                let rightElement = input[iRow][rightElColIndex];
                if (areSame(element, rightElement)) {
                    count++;
                    row[iColumn] = element + ' -  - matched';
                }
            }

            // if (isValid(input, topElRowIndex)) {
            //     let topElement = input[topElRowIndex][iColumn];
            //     if (element === topElement) {
            //         count++;
            //         row[iColumn] = element + ' - matched';
            //     }
            // }

            if (isValid(input, bottomElRowIndex)) {
                let bottomElement = input[bottomElRowIndex][iColumn];
                if (element === bottomElement) {
                    count++;
                    row[iColumn] = element + ' - matched';
                }
            }

        }

        iRow++;
        // UPDATE - skip check of LEFT and TOP elements - once become left or top, element have been checked already
    })

    return count;
}

neighbours([
    ['2', '1', '3'],
    ['3', '1', '2'],
    ['1', '2', '3']
]);
console.log('-----');
neighbours([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);
console.log('-----');
neighbours([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);