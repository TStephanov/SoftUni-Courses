function demo() {
    let arr1 = ['apple', 'banana', 'orange', 'pineapple'];
    let arr2 = arr1.slice();
    let result = arr2.shift();
    console.log(arr1);
    console.log(result);
    console.log(arr2);
}

demo();