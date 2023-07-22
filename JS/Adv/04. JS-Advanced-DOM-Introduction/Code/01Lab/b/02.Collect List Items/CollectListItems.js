function extractText() {
    let itemsList = document.querySelectorAll('ul li');
    let items = Array.from(itemsList);
    let resultElement = document.getElementById('result');
    resultElement.textContent = items.map(el => el.textContent).join('\n');
}