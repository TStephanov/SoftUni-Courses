function sortingNumbers(input) {
    let result = [];
    let sorted = input.sort((a, b) => a - b);

    // while (sorted.length > 0) {
    //     result.push(sorted.shift(), sorted.pop());
    // }

    for (let i = 0; i < sorted.length / 2; i++) {
        let elementOne = sorted[i];
        let elementTwo = sorted[sorted.length - 1 - i];

        // Judge fails with 50/100 when input has odd el-ts count, e.g. pushing same el-t as elementOne and elementTwo
        if (elementOne === elementTwo) {
            result.push(elementOne);
        } else {
            result.push(elementOne, elementTwo);
        }
    }

    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
// [-3, 1, 3, 18, 31, 48, 52, 56, 63, 65]
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
