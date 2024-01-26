function encodeAndDecodeMessages() {
    const buttonsElements = document.querySelectorAll('div button');
    Array.from(buttonsElements).forEach(button => {
        if (button.textContent.includes('Encode')) {
            button.addEventListener('click', encode)
        } else if (button.textContent.includes('Decode')) {
            button.addEventListener('click', decode);
        }
    });

    function encode(e) {
        let textInput = e.target.parentNode.querySelector('textarea');
        textInput.value = textInput.value
            .split('')
            .map(el => el.charCodeAt() + 1)
            .map(el => String.fromCharCode(el))
            .join('');
        const outputField = e.target.parentNode.parentNode.querySelector('div:nth-of-type(2) textarea');
        outputField.textContent = textInput.value;
        textInput.value = '';
    }

    function decode(e) {
        const textInput = e.target.parentNode.querySelector('textarea');
        textInput.value = textInput.value.split('')
            .map(el => el.charCodeAt() - 1)
            .map(el => String.fromCharCode(el))
            .join('');
    }
}