function sumTable() {
    let cellElements = document.querySelectorAll('table tr td:nth-of-type(2)');
    let elementsToCalc = Array.from(cellElements);
    let resultElement = elementsToCalc.pop();
    resultElement.textContent = elementsToCalc
        .map(el => Number(el.textContent))
        .reduce((acc, i) => acc + i);
}