function calculator() {
    let resultElements = {};

    function init(selector1, selector2, resultSelector) {
        let inputOne = document.querySelector(selector1);
        let inputTwo = document.querySelector(selector2);
        let resultElement = document.querySelector(resultSelector);

        resultElements.inputOne = inputOne;
        resultElements.inputTwo = inputTwo;
        resultElements.resultElement = resultElement;

        console.log(resultElements);
    }

    function add() {
        let result = Number(resultElements.inputOne.value) + Number(resultElements.inputTwo.value);
        resultElements.resultElement.value = result;
    }

    function subtract() {
        let result = Number(resultElements.inputOne.value) - Number(resultElements.inputTwo.value);
        resultElements.resultElement.value = result;
    }


    return {
        init,
        add,
        subtract,
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result'); 