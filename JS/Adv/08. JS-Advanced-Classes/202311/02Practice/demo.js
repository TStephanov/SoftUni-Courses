function test() {
    // Convert decimal to hexadecimal => hexString = number.toString(16);
    // Convert hexadecimal to decimal => number = parseInt(hexString, 16);
    let num = 15;
    let hex = '0X' + num.toString(16);
    let hexToNum = parseInt(hex, 16);
    
    console.log(hex);
    console.log(hexToNum);
}

test();