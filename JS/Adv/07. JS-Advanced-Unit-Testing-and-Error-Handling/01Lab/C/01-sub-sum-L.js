function solve(numbers, start, end) {
    if (!Array.isArray(numbers)) {
        return NaN;
    }

    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, numbers.length - 1);

    let sumNumbers = numbers.slice(startIndex, endIndex + 1); // including end index

    let sum = sumNumbers.reduce((a, x) => a + Number(x), 0); // start calculations from "0"

    return sum;
}

module.exports = solve;

// console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));

// // Unit test sample :)
// function test() {
//     // Arrange
//     let expectedSum = 150;
//     let numbers = [10, 20, 30, 40, 50, 60];
//     let startIndex = 3;
//     let endIndex = 300;

//     // Act
//     let actualSum = solve(numbers , startIndex, endIndex);

//     // Assert
//     if (actualSum === expectedSum) {
//         console.log('correct');
//     } else {
//         console.log('error');
//     }
// }

// test();