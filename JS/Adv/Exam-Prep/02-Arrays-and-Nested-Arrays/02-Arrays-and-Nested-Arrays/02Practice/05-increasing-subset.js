function increasingSubset(input) {
    let biggestNum = input[0];
    let increasingArr = [];

    input.filter(el => {
        if (el >= biggestNum) {
            biggestNum = el;
            increasingArr.push(biggestNum);
        }
    });

    return increasingArr;
}

increasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
increasingSubset([1, 2, 3, 4]);
increasingSubset([20, 3, 2, 15, 6, 1]);