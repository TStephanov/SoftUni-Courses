function extractText() {
    let liElements = document.querySelectorAll('ul#items li');
    let outputElement = document.querySelector('#result');

    Array.from(liElements).forEach(el => {
        outputElement.textContent += `${el.textContent}\n`;
    });    
}