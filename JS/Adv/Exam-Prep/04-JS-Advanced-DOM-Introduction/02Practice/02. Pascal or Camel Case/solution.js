function solve() {
    const textInput = document.getElementById('text');
    const namingConvention = document.querySelector('#naming-convention');
    let resultFld = document.querySelector('#result');

    switch (namingConvention.value) {
        case 'Camel Case': {
            let result = '';
            let words = textInput.value.split(' ');
            result += words.shift().toLowerCase(); // add first word to the result, with small letters only
            words.forEach(word => {
                result += word.split('')[0].toUpperCase(); // made first letter capital
                result += word.split('').splice(1).join('').toLowerCase(); // add rest of the word with small letters
                resultFld.textContent = result;
            });
        };
            break;
        case 'Pascal Case': {
            let result = '';
            textInput.value
                .split(' ')
                .forEach(word => {
                    result += word.split('')[0].toUpperCase(); // made first letter capital
                    result += word.split('').splice(1).join('').toLowerCase(); // add rest of the word with small letters
                    resultFld.textContent = result;
                });
        };
            break;
        default: {
            resultFld.textContent = 'Error!';
        };
    }
}