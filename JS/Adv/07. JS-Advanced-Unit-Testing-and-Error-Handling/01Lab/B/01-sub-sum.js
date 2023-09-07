function cardFactory(numbers, start, end) {
    if (!Array.isArray(numbers)) {
        return NaN;
    }

    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, numbers.length - 1); // typo: was lenght insead of length

    let subNumbers = numbers.slice(startIndex, endIndex + 1);

    let sum = subNumbers.reduce((a, x) => a + Number(x), 0);

    return sum;
}

module.exports = cardFactory;

// console.log(cardFactory([10, 20, 30, 40, 50, 60], 3, 300));

/**
// Unit testing - initial example, inside the file
function test() {
    // Triple AAA
    // Arrange
    let expectedSum = 150;
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIndex = 3;
    let endIndex = 300;

    // Act
    let actualSum = cardFactory(numbers, startIndex, endIndex);

    // Assert
    if (actualSum === expectedSum) {
        console.log('coorect');
    } else {
        console.log('error');
    }
}

test();
*/