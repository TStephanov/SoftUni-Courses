function demo() {
    let arr = [1, 2, 3, 4, 5];
    let sum = arr.reduce((acc, item) => acc + item, 5);
    console.log(sum);
}

demo();