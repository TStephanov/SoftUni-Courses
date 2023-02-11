function decimalToBinary(num) {
    // decimal to binary converter
    let initialBinary = '';

    while (num > 0) {
        let result = num % 2;
        num = Math.floor(num / 2);
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
    let binary = demo(number);

    // convert binary to hexadecimal
    let firstHalf = binary.slice(0, binary.length / 2);
    let secondHalf = binary.slice(binary.length / 2);
    let hexadecimalNum = '';

    hexadecimalNum += collection[firstHalf];
    hexadecimalNum += collection[secondHalf];

    // console.log(hexadecimalNum);
    return hexadecimalNum;
}

demo2(179);