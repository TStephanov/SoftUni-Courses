function extractText() {
    let ulElements = document.querySelectorAll('li');
    let elements = Array.from(ulElements);
    let result = [];
    
    elements.forEach(el => {
        result.push(el.textContent);
    });

    let textAreaResult = document.getElementById('result');
    textAreaResult.textContent = result.join('\n');
}