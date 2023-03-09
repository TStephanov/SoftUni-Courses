function solution(input) {
    // Variant 1
    // return function (newEl) {
    //     return Number(newEl) + Number(input);
    // }

    // Variant 2
    return (newEl) => Number(newEl) + Number(input);
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));