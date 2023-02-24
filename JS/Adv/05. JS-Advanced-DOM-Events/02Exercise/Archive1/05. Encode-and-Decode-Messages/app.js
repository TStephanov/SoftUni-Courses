function encodeAndDecodeMessages() {
    // add event listeners to each button - Encode and Decode
    let buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(button => {
        if (button.textContent.includes('Encode')) {
            button.addEventListener('click', encodeMsg);

        } else if (button.textContent.includes('Decode')) {
            button.addEventListener('click', decodeMsg);
        }
    });

    function encodeMsg(ev) {
        console.log(`encodeMsg is called`);
        let divElement = ev.target.parentElement;
        let textElToEncode = divElement.querySelector('textarea').value;
        let encodedMsg = '';
        
        for (let i = 0; i < textElToEncode.length; i++) {
            let encSymbol = textElToEncode.charCodeAt(i) + 1;
            encodedMsg += String.fromCharCode(encSymbol);
        }

        // append encoded message to decoded text area
        let mainDiv = divElement.parentElement;
        let decodedTextArea = mainDiv.querySelector('div:nth-of-type(2) textArea');
        decodedTextArea.value = encodedMsg;
        
        // null encode text area
        divElement.querySelector('textarea').value = '';
    }

    function decodeMsg(ev) {
        console.log(`decodeMsg is called`);
        let divElement = ev.target.parentElement;
        let textElToDecode = divElement.querySelector('textarea').value;
        let decodedMsg = '';
        
        for (let i = 0; i < textElToDecode.length; i++) {
            let decSymbol = textElToDecode.charCodeAt(i) - 1;
            decodedMsg += String.fromCharCode(decSymbol);
        }

        divElement.querySelector('textarea').value = decodedMsg;
    }    

    // create functions for each button press
}