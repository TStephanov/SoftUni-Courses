function solve() {
    let tableBodyElement = document.querySelector('table tbody');
    let buttonsElement = document.getElementsByTagName('button');
    let generateBtn = buttonsElement[0];
    let buyBtn = buttonsElement[1];
    let textElements = document.getElementsByTagName('textarea');
    let customerInputElement = textElements[0];
    let resultElement = textElements[1];
    let textToPrint = '';

    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);

    function generate(ev) {
        // take customers input and add new furniture to the table
        let customerInput = JSON.parse(customerInputElement.value);
        customerInput.forEach(input => {
            // create new table row with info to append it to existing table
            let newTr = document.createElement('tr');
            
            let newTdProductImg = document.createElement('td');
            let newImgTag = document.createElement('img');
            newImgTag.src = input.img;
            newTdProductImg.appendChild(newImgTag);
            
            let newTdProductName = document.createElement('td');
            newTdProductName.classList.add('name');
            newTdProductName.textContent = input.name;
            
            let newTdProductPrice = document.createElement('td');
            newTdProductPrice.classList.add('price');
            newTdProductPrice.textContent = input.price;
            
            let newTdProductDecFactor = document.createElement('td');
            newTdProductDecFactor.classList.add('decorationFactor');
            newTdProductDecFactor.textContent = input.decFactor;
    
            let newTdCheckbox = document.createElement('td');
            let newCheckbox = document.createElement('input');
            newCheckbox.type='checkbox';
            newTdCheckbox.appendChild(newCheckbox);
    
            newTr.appendChild(newTdProductImg);
            newTr.appendChild(newTdProductName);
            newTr.appendChild(newTdProductPrice);
            newTr.appendChild(newTdProductDecFactor);
            newTr.appendChild(newTdCheckbox);
            tableBodyElement.appendChild(newTr);
        });
    }

    function buy(ev) {
        // take all items with checked checkbox
        let checkboxElements = ev.target.parentNode.querySelectorAll('input[type="checkbox"]');
        let selectedProducts = {
            productsNames: [],
            totalPrice: 0,
            totalDecorationFactor: 0,
        };

        // put all products into an object
        Array.from(checkboxElements).forEach(checkbox => {
            if (checkbox.checked) {
                let rowElement = checkbox.parentNode.parentNode;
                selectedProducts.productsNames.push(rowElement.querySelector('.name').textContent);
                selectedProducts.totalPrice += Number(rowElement.querySelector('.price').textContent);
                selectedProducts.totalDecorationFactor += Number(rowElement.querySelector('.decorationFactor').textContent);
            }
        });


        // print products names - Bought furniture: {furniture1}, {furniture2}…
        textToPrint += `Bought furniture: ${selectedProducts.productsNames.join(', ')}\n`;        

        // print total price - Total price: {totalPrice}
        textToPrint += `Total price: ${selectedProducts.totalPrice.toFixed(2)}\n`;

        // print avg decoration factor - Average decoration factor: {decFactor}
        textToPrint += `Average decoration factor: ${selectedProducts.totalDecorationFactor / selectedProducts.productsNames.length}`;

        resultElement.textContent = textToPrint;
        textToPrint = '';
    }
}