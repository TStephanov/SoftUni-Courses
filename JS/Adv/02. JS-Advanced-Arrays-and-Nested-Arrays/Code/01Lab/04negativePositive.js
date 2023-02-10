function negativePositive(input) {
    let result = [];

    input.forEach(el => el < 0 ? result.unshift(el) : result.push(el));

    return result.join('\n');
}

console.log(negativePositive([7, -2, 8, 9]));
// -2
// 7
// 8
// 9
console.log(negativePositive([3, -2, 0, -1]));
// -1
// -2
// 3
// 0