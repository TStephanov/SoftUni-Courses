function solve() {
    const convertBtnElement = document.querySelector('button');
    convertBtnElement.addEventListener('click', clicked);

    const toMenuElement = document.querySelector('#selectMenuTo');
    let optionBinary = document.createElement('option');
    optionBinary.setAttribute('selected', '');
    optionBinary.setAttribute('value', 'binary');
    optionBinary.textContent = 'Binary';
    toMenuElement.appendChild(optionBinary);
    let optionHexadecimal = document.createElement('option');
    optionHexadecimal.setAttribute('selected', '');
    optionHexadecimal.setAttribute('value', 'hexadecimal');
    optionHexadecimal.textContent = 'Hexadecimal';
    toMenuElement.appendChild(optionHexadecimal);

    function clicked() {
        let userInputElement = document.getElementById('input');
        let resultElement = document.getElementById('result');

        switch (toMenuElement.value) {
            case 'binary': {
                resultElement.value = Number(userInputElement.value).toString(2);
            };
                break;
            case 'hexadecimal': {
                resultElement.value = Number(userInputElement.value).toString(16).toUpperCase();
            };
                break;
        }
    }
}