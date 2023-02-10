function lastKNums(nLength, kCount) {
    let numbers = [1];

    for (let i = 1; i < nLength; i++) {
        let sum = 0;

        if (i <= kCount) {
            // for (let num of numbers) {
            //     sum += num;
            // }
            sum = numbers.reduce((a, b) => a + b);

        } else {
            let toAddArr = numbers.slice(i - kCount, i);
            // for (let num of toAddArr) {
            //     sum += num;
            // }
            sum = toAddArr.reduce((a, b) => a + b);
        }

        numbers.push(sum);
    }

    return numbers;
}

console.log(lastKNums(6, 3)); // [1, 1, 2, 4, 7, 13]
console.log(lastKNums(8, 2)); // [1, 1, 2, 3, 5, 8, 13, 21]