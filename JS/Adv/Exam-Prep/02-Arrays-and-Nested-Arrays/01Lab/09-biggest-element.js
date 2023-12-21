function biggestElement(input) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    input.forEach(row => {
        row.forEach(columnValue => {
            if (columnValue > maxNum) {
                maxNum = columnValue;
            }
        });
    });

    return maxNum;
}

biggestElement([
    [20, 50, 10],
    [8, 33, 145]
]);
biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);