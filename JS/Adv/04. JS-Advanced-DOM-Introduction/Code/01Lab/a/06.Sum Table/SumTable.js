function sumTable() {
    let initialElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let sum = 0;
    let elements = Array.from(initialElements);

    elements.forEach((element, i) => {
        if (i === initialElements.length - 1) {
            return;
        }
        
        let number = Number(element.textContent);
        sum += number;
    });

    let result = document.getElementById('sum');
    result.textContent = sum;
}