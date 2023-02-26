function test() {
    let arr = [1, 2, 1, 4, 5];
    let result = new Set(arr);
    console.log(arr.length);
    console.log(Array.from(result).length);
}

test();