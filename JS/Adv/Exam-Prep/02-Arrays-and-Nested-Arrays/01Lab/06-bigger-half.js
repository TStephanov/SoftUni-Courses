function biggerHalf(input) {
    return input
        .sort((a, b) => a - b)
        .splice(Math.floor(input.length / 2));
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);