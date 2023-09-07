// const assert = require('assert').strict;
const calculate = require('./01-sub-sum-L.js');

function test() {
    // Arrange
    let expectedSum = 150;
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIndex = 3;
    let endIndex = 300;

    // Act
    let actualSum = calculate(numbers , startIndex, endIndex);

    // Assert
    // assert.equal(actualSum, expectedSum); // it's not working in that case, but assert is used widely

    if (actualSum === expectedSum) {
        console.log('correct');
    } else {
        console.log('error');
    }
}

test();