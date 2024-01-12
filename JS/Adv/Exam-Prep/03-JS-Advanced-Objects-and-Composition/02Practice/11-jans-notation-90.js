function notation(input) {
    let nums = [];
    let operators = [];
    let i = 0;
    let errorPrinted = false;
    function calc(op, num1, num2) {
        let result = 0;
        switch (op) {
            case '+': {
                result = num1 + num2;
            };
                break;
            case '-': {
                result = num2 - num1; // num2 leftmost between num1 & num2 in nums, because of using .pop()
            };
                break;
            case '*': {
                result = num1 * num2;
            };
                break;
            case '/': {
                result = num2 / num1; // num2 leftmost between num1 & num2 in nums, because of using .pop()
            };
                break;
        }
        return result;
    }

    input.forEach(element => { // array already has 1 element for sure, because of 1st funstion row
        if (!isNaN(element)) {
            nums.push(element);
        } else {
            operators.push(element);
        }

        if (i != 0 && !errorPrinted) {
            if (operators.length > 0) {
                if (nums.length < 2) {
                    // no more numbers, but operators available
                    console.log('Error: not enough operands!');
                    errorPrinted = true;
                    // return;
                } else {
                    let sign = operators.shift();
                    let num1 = nums.pop();
                    let num2 = nums.pop();
                    nums.push(calc(sign, num1, num2));                    
                }

            }
            // else {
            //     if (i === input.length - 1) { // last element reached, no more left to the input, nothing to be added to nums nor operators
            //         console.log('Error: too many operands!');
            //         errorPrinted = true;
            //         // return;
            //     }
            // }
        }
        i++;
    });

    // console.log(`testing: ${nums}`);
    if (nums.length === 1 && !errorPrinted) {
        console.log(nums[0]);
    } else if (nums.length > operators.length) {
        console.log('Error: too many operands!');
    }

    // if input is only 1 non-number symbol or is empty, nothing will happend
}

// notation([3, 4, "+"]);
// console.log(' - - - ');
// notation([5, 3, 4, "*", "-"]);
// console.log(' - - - ');
// notation([7, 33, 8, "-"]);
// notation([7, "-", "-"]);
// console.log(' - - - ');
// notation([15, "/"]);
notation([31, 2, '+', 11, '/',]);
// notation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);