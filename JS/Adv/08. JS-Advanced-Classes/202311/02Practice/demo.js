function test() {
    let arr = [3, 2, 4, 1];

    console.log(arr.sort((a, b) => a - b)); // [ 1, 2, 3, 4 ]
    console.log(arr.sort((a, b) => b - a)); // [ 4, 3, 2, 1 ]
}

test();