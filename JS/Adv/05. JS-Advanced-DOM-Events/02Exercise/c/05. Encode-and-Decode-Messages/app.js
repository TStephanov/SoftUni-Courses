function encodeAndDecodeMessages() {
    Array.from(document.querySelectorAll('button'))
        .forEach(btn => {
            if (btn.textContent.includes('Encode')) {
                btn.addEventListener('click', encode);
            } else if (btn.textContent.includes('Decode')) {
                btn.addEventListener('click', decode);
            }
        });

    function encode(ev) {
        let messageToEncode = ev.target.parentNode.querySelector('textarea');
        let encodedMessage = '';
        
        // charCodeAt(index) - return ASCII representation of a symbol
        // String.fromCharCode() - returns alphabetical symbol from an ASCII symbol
        Array.from(messageToEncode.value).forEach(symbol => {
            encodedMessage += String.fromCharCode(symbol.charCodeAt(0) + 1);
        });

        let decodedMsgAreaElement = ev.target.parentNode.parentNode.querySelector('div:nth-of-type(2) textarea');
        decodedMsgAreaElement.value = encodedMessage;
        messageToEncode.value = '';
    }

    function decode(ev) {
        let messageToDecodeField = ev.target.parentNode.querySelector('textarea');
        let decodedMessage = '';

        Array.from(messageToDecodeField.value).forEach(symbol => {
            decodedMessage += String.fromCharCode(symbol.charCodeAt(0) - 1);
        });

        messageToDecodeField.value = decodedMessage;
    }
}