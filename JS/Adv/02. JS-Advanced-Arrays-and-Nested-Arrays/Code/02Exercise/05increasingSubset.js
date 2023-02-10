function increasingSubset(input) {
    // let result = [];
    let biggest = Number.MIN_SAFE_INTEGER;

    // input.forEach((el) => {
    //     if (el >= biggest) {
    //         biggest = el;
    //         result.push(biggest);
    //     }
    // });

    let result = input.reduce((arr, number) => {
        if (number >= biggest) {
            biggest = number;
            arr.push(biggest);
        }
        return arr;
    }, []);

    return result;
}

increasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// [1, 3, 8, 10, 12, 24]
increasingSubset([1, 2, 3, 4]);
// [1, 2, 3, 4]
increasingSubset([20, 3, 2, 15, 6, 1]);
// [20]
