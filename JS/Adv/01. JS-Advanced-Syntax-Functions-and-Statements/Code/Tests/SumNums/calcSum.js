function calcSum() {
    let num1 = document.getElementsByName('num1')[0].value;
    let num2 = document.getElementsByName('num2')[0].value;

    let sum = Number(num1) + Number(num2);
    // document.getElementsByName('sum')[0].value = sum;

    if (Number.isInteger(sum)) {
        let sum = Number(num1) + Number(num2);
        document.getElementsByName('sum')[0].value = sum;
    } else {
        showAlert();
    }

    function showAlert() {
        document.getElementsByName('alert')[0].value = 'Please insert a correct number - e.g. using digits 0-9'
    }
}

calcSum(3, 5);