function sum(el1, el2) {
    let startNum = Math.min(Number(el1), Number(el2));
    let endNum = Math.max(Number(el1), Number(el2));
    let sum = 0;

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }

    console.log(sum);
}

sum('1', '5');
sum('-8', '20');
sum('5', '1');