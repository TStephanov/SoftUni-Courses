// Option 1
function solution(num) {
    function sum(el) {
        return num + el;
    }    
    return sum;
}

// Option 2
function solution(num) {
    const sum = (el) => num + el;
    return sum;
}


let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
