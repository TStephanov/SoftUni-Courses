function sum(param1, param2) {
    let a = Number(param1);
    let b = Number(param2);
    let result = 0;

    for (let i = a; i <= b; i++) {
        result += i;
    }

    console.log(result);
}

sum('1', '5' );
sum('-8', '20');