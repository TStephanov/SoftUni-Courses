function nthElement(arr, step) {
    let resultArr = [];

    // for (let i = 0; i < arr.length; i += step) {
    //     resultArr.push(arr[i]);
    // }

    // return resultArr;

    arr.filter((el, i) => {
        if (i % step === 0) {
            resultArr.push(el);
        }
    });

    return resultArr;
}

nthElement(["5", "20", "31", "4", "20"], 2);
console.log("-------");
nthElement(["dsa", "asd", "test", "tset"], 2);
console.log("-------");
nthElement(["1", "2", "3", "4", "5"], 6);
