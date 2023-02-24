function solution(number) {
    let value = number;
    return function (a) {
        value + a;
    };
};

let add = solution(5);
console.log(add(2)); // 7
console.log(add(3)); // 8