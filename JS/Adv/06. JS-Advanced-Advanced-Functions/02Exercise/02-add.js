function solution(num1) {
    return (num2) => {
        return Number(num1) + Number(num2);
    } // equal to => return (num2) => Number(num1) + Number(num2);

    // //Ivo Papazov
    // function sum(a, b) {
    //     return a + b;
    // }

    // return sum.call(this, num1);
    // // return (n) => sum(num1, n);
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));