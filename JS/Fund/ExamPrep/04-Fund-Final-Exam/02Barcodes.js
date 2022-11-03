function barcodes(input) {
    let workArray = input.slice();
    let count = Number(workArray.shift());
    let pattern = /(\@\#{1,})(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(\@\#{1,})/;
    let result = '';
    
    for (let i = 0; i < count; i++) {
        let productGroup = '00';
        let string = workArray[i];
        result = pattern.exec(string);
        console.log(workArray[i]);

        if (result !== null) {
            let barcode = result.groups.barcode;
            let nums = barcode.match(/\d{1,}/g); // return array with all digits. Ex.: Che4s6E ==>> [ '4', '6' ] ==>> join('') ==>> 46

            if (nums !== null) {
                productGroup = nums.join('');
            }

            console.log(`Product group: ${productGroup}`);

        } else {
            console.log('Invalid barcode');
        }
    }
}

// barcodes([
//     "3",
//     "@#FreshFisH@#",
//     "@###Brea0D@###",
//     "@##Che4s6E@##"
// ]);
barcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]);