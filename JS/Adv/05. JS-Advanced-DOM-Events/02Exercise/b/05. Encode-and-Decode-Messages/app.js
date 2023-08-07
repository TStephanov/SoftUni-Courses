function encodeAndDecodeMessages() {
    let textElements = document.getElementsByTagName('textarea');
    let toEncodeEl = textElements[0];
    let toDecodeEl = textElements[1];

    let buttons = Array.from(document.getElementsByTagName('button'));
    buttons.forEach(button => {
        if (button.textContent.includes('Encode')) {
            button.addEventListener('click', encode);
        } else if (button.textContent.includes('Decode')) {
            button.addEventListener('click', decode);
        }
    });

    function encode() {
        let encodedMsg = toEncodeEl.value
        .split('')
        .map(letter => {
            return String.fromCharCode(letter.charCodeAt() + 1);
        })
        .join('');
        
        toDecodeEl.value = encodedMsg;
        toEncodeEl.value = '';
    }

    function decode() {
        let decodedMsg = toDecodeEl.value
        .split('')
        .map(letter => {
            return String.fromCharCode(letter.charCodeAt() - 1);
        })
        .join('');

        toDecodeEl.value = decodedMsg;
    }
}