function smallestTwo(input) {
    let result = input.sort((a, b) => a - b);
    
    console.log(result.slice(0, 2).join(' '));
}

smallestTwo([30, 15, 50, 5]); // 5 15
smallestTwo([3, 0, 10, 4, 7, 3]); // 0 3