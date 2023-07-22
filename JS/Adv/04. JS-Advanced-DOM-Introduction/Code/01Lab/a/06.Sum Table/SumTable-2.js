function sumTable() {
    let sumElements = document.querySelectorAll('table tbody tr td:nth-of-type(2)');
    let elements = Array.from(sumElements);
    let result = 0;
    
    for (let i = 0; i < elements.length - 1; i++) {
        let currentElement = elements[i].textContent;
        let number = Number(currentElement);
        result += number;
    }

    let sumResult = document.getElementById('sum');
    sumResult.textContent = result;
}