function solve() {
    // take input value - number
    let inputValue = document.getElementById('input');
    let numberInput = Number(inputValue.value);
    
    // add binary and hexadecimal elements upon click - actual requirement is, to add them in the HTML prior any other actions
    // let firstOption = document.querySelector('#selectMenuTo option');
    // firstOption.value = 'binary';
    // firstOption.textContent = 'Binary';
    // let secondOption = document.createElement('option');
    // secondOption.selected = 'none';
    // secondOption.value = 'hexadecimal';
    // secondOption.textContent = 'Hexadecimal';

    // let selectMenuTo = document.querySelector('#selectMenuTo');
    // selectMenuTo.appendChild(secondOption);    

    let selected = document.querySelector('#selectMenuTo').value; // .textContent - gives all the text conten inside id='selectMenuTo', while value returns value attribute of currently selected element - e.g. binary or hexadecimal
    let resultField = document.getElementById('result');
    console.log(selected);

    if (selected === 'binary') {
        resultField.value = decimalToBinary(numberInput);
        console.log(decimalToBinary(numberInput));

    } else if (selected === 'hexadecimal') {
        resultField.value = decimalToHexadecimal(numberInput);
        console.log(decimalToHexadecimal(numberInput));
    }


    function decimalToBinary(number) {
        // decimal to binary converter
        let initialBinary = '';
    
        while (number > 0) {
            let result = number % 2;
            number = Math.floor(number / 2);
            initialBinary += result;
        }
    
        let binary = initialBinary.split('').reverse().join('');
    
        // console.log(binary);
        return binary;
    }
    
    function decimalToHexadecimal(number) {
        // decimal to hexadecimal
        let collection = {
            '0000': '0',
            '0001': '1',
            '0010': '2',
            '0011': '3',
            '0100': '4',
            '0101': '5',
            '0110': '6',
            '0111': '7',
            '1000': '8',
            '1001': '9',
            '1010': 'A',
            '1011': 'B',
            '1100': 'C',
            '1101': 'D',
            '1110': 'E',
            '1111': 'F',
        }
        
        // convert decimal to binary
        let binary = decimalToBinary(number);
    
        // convert binary to hexadecimal
        let leftHalf = binary.slice(0, binary.length / 2);
        let rightHalf = binary.slice(binary.length / 2);
        let hexadecimalNum = '';
    
        hexadecimalNum += collection[leftHalf];
        hexadecimalNum += collection[rightHalf];
    
        // console.log(hexadecimalNum);
        return hexadecimalNum;
    }
}