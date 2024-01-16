function sumTable() {
    let priceElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let sum = 0;
    let sumElement = document.getElementById('sum');

    Array.from(priceElements).forEach(price => {
        if (!isNaN(price.textContent)) {
            sum += Number(price.textContent);
        }
    });

    sumElement.textContent = sum;
}