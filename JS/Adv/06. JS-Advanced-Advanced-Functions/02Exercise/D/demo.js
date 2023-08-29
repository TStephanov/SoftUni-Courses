function calc(num) {
    num--;
    
    if (num === 0) {
        return num;
    }

    return calc(num);
}

console.log(calc(10));