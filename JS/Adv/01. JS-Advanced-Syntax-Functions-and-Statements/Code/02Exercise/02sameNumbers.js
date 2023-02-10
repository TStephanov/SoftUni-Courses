function sameNumbers(input) {
    let nums = input.toString().split('').map(el => Number(el));
    let firstNum = nums.shift();
    let areSame = true;
    let sum = firstNum;

    nums.forEach(num => {
        if (firstNum !== num) {
            areSame = false;
        }

        sum += num;
    })

    console.log(areSame);
    console.log(sum);
}

sameNumbers(2222222); // true
sameNumbers(1234); // false