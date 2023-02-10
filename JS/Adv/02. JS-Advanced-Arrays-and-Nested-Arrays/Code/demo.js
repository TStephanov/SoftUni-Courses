/*
let myArr = [10, 15, 20, 25, 30];

let newArr = [...myArr];
let result = myArr.slice(1, 5);

let strArr = ['z', 'b', 'd', 'c', 'a', 'Z', 'B', 'D', 'C', 'A'];
let numArr = [3, 31, 5, 4, 9, 57, 7, 8, 1, 13];
console.log('strArr sort()', strArr.sort());
console.log('strArr sort(a, b) => a - b', strArr.sort((a, b) => a - b));
console.log('strArr localeCompare()', strArr.sort((a, b) => a.localeCompare(b)));
console.log('numArr sort()', numArr.sort());
console.log('numArr sort(a, b) => a - b', numArr.sort((a, b) => a - b));
console.log('numArr localeCompare()', numArr.sort((a, b) => a.localeCompare(b))); - CAN'T localeCompare() number values

console.log(myArr);
console.log(newArr);
console.log(result);
*/

/*
let testArr = [];
console.log(testArr);
testArr.length = 3;
console.log(testArr);
 */

/*
function solve(a, b) {
    let finalArr = [];
    for (let i = 0; i < a; i++) {
        let currArr = [];
        currArr.length = b;
        finalArr.push(currArr);
    }

    console.log(finalArr);
}

solve(3, 3);
 */