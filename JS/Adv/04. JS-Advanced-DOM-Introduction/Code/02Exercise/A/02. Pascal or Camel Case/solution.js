function solve() {
    let textParam = document.getElementById('text');
    let commandParam = document.getElementById('naming-convention');

    let textToProccess = textParam.value;
    let command = commandParam.value;
    // console.log(`Command is: ${command}`);
    // console.log(`Text is: ${textToProccess}`);
    let toPrint = '';

    switch (command) {
        case 'Camel Case': {
            let textValues = textToProccess.split(' ');
            let result = textValues
                .shift()
                .toLowerCase(); // to ensure it'll be always small letters

            textValues.forEach(string => {
                string = string.toLowerCase(); // to ensure we'll work with all letters small as a start
                let firstLetter = string.substring(0, 1).toUpperCase();
                let restOfWord = string.substring(1);
                let processedWord = firstLetter + restOfWord;

                result += processedWord;
            });

            toPrint = result;
        }
            break;

        case 'Pascal Case': {
            let textValues = textToProccess.split(' ');
            let result = '';

            textValues.forEach(string => {
                string = string.toLowerCase(); // to ensure we'll work with all letters small as a start
                let firstLetter = string.substring(0, 1).toUpperCase();
                let restOfWord = string.substring(1);
                let processedWord = firstLetter + restOfWord;

                result += processedWord;
            });

            toPrint = result;
        }
            break;

        default: {
            toPrint = 'Error!';
        }
            break;
    }

    console.log(toPrint);

    let resultParam = document.getElementById('result');
    resultParam.textContent = toPrint;
}