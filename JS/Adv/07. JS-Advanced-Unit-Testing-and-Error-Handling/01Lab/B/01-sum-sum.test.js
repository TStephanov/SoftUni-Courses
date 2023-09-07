const assert = require('assert').strict;
const result = require('./01-sub-sum.js');

function test() {
    // Triple AAA
    // Arrange
    let expectedSum = 150;
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIndex = 3;
    let endIndex = 300;

    // Act
    let actualSum = result(numbers, startIndex, endIndex);

    // Assert
    // assert.equal(actualSum, expectedSum);

    if (actualSum === expectedSum) {
        console.log('coorect');
    } else {
        console.log('error');
    }
}

test();