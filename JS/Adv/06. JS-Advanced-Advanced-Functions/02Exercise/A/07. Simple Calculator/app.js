function calculator() {
    const funcs = {
        init,
        add,
        subtract
    }
    
    let firstNum;
    let secondNum;
    let resultNum;

    function init(selector1, selector2, resultSelector) {
        firstNum = document.querySelector(selector1);
        secondNum = document.querySelector(selector2);
        resultNum = document.querySelector(resultSelector);
    }

    function add() {
        const sumResult = Number(firstNum.value) + Number(secondNum.value);
        resultNum.value = sumResult;
    }

    function subtract() {
        const sumResult = Number(firstNum.value) - Number(secondNum.value);
        resultNum.value = sumResult;
    }

    return funcs;
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result'); 

/*
// Shorter version with IvoD guidances
function calculator() {
    let firstNum;
    let secondNum;
    let resultNum;

    function init(selector1, selector2, resultSelector) {
        firstNum = document.querySelector(selector1);
        secondNum = document.querySelector(selector2);
        resultNum = document.querySelector(resultSelector);
    }

    function add() {
        resultNum.value = Number(firstNum.value) + Number(secondNum.value);
    }

    function subtract() {
        resultNum.value = Number(firstNum.value) - Number(secondNum.value);
    }

    return {
        init,
        add,
        subtract
    };
}
*/