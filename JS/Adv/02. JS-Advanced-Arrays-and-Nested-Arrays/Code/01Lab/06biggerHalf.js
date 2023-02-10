function biggerHalf(input) {
    let result = input.sort((a, b) => a - b);
    let startIndex = Math.floor(result.length / 2);
    
    return result.slice(startIndex);
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);