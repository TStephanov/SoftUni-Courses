function notation(input) {
    let nums = [];
    let operators = [];

    // extract numbers ( operands )
    input.forEach(element => {
        if (!isNaN(element)) {
            nums.push(element);
        }
    });

    // extract operators
    input.forEach(element => {
        if (isNaN(element)) {
            operators.push(element);
        }
    });

    function calc(op, num1, num2) {
        let result = 0;
        switch (op) {
            case '+': {
                result = num1 + num2;
            };
                break;
            case '-': {
                result = num2 - num1;
            };
                break;
            case '*': {
                result = num1 * num2;
            };
                break;
            case '/': {
                result = num2 / num1;
            };
                break;
        }
        return result;
    }

    console.log(nums);
    console.log(operators);

    if (nums.length - 1 > operators.length) {
        console.log('Error: too many operands!');
    } else if (nums.length == operators.length || nums.length < operators.length) {
        console.log('Error: not enough operands!');
    } else {
        let length = nums.length;

        while (operators.length > 0) {
            // let sign = operators.shift();
            // let num1 = nums.pop();
            // let num2 = nums.pop();
            // nums.push(calc(sign, num1, num2));

            nums.push(calc(operators.shift(), nums.pop(), nums.pop()));
        }
        // console.log(nums[0]);
        console.log(Math.ceil(nums[0]));
    }
}

// notation([3, 4, "+"]);
// console.log(' - - - ');
// notation([5, 3, 4, "*", "-"]);
// console.log(' - - - ');
// notation([7, 33, 8, "-"]);
// console.log(' - - - ');
// notation([15, "/"]);
// notation([31, 2, '+', 11, '/',]);
notation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);