function solve() {
    // define input and output fields
    let textAreaElements = document.getElementsByTagName('textarea');
    let inputField = textAreaElements[0];
    let outputField = textAreaElements[1];
    let tableBodyElement = document.getElementsByTagName('tbody')[0];
    // add event listener to each button
    Array.from(document.getElementsByTagName('button'))
        .forEach(btn => {
            if (btn.textContent === 'Generate') {
                btn.addEventListener('click', addNewFurniture);
            } else if (btn.textContent === 'Buy') {
                btn.addEventListener('click', finalizeDeal);
            }
        });

    function addNewFurniture() {
        // parse input
        const newFurnitures = JSON.parse(inputField.value);
        for (let furniture of newFurnitures) {
        // add furnitures to the table - table strc: tr, td <img>, td p-name, td p-price, td p input-checkbox

            const newTr = document.createElement('tr');
            const newTdImgEl = document.createElement('td');
            const newImgEl = document.createElement('img');
            newImgEl.setAttribute('src', furniture.img);
            newTdImgEl.appendChild(newImgEl);
            newTr.appendChild(newTdImgEl);

            const newTdName = document.createElement('td');
            const newPName = document.createElement('p');
            newPName.textContent = furniture.name;
            newTdName.appendChild(newPName);
            newTr.appendChild(newTdName);

            const newTdPrice = document.createElement('td');
            const newPPrice = document.createElement('p');
            newPPrice.textContent = furniture.price;
            newTdPrice.appendChild(newPPrice);
            newTr.appendChild(newTdPrice);

            const newTdDecFactor = document.createElement('td');
            const newPDecFactor = document.createElement('p');
            newPDecFactor.textContent = furniture.decFactor;
            newTdDecFactor.appendChild(newPDecFactor);
            newTr.appendChild(newTdDecFactor);

            const newTdInput = document.createElement('td');
            const newInputEl = document.createElement('input');
            newInputEl.setAttribute('type', 'checkbox');
            newTdInput.appendChild(newInputEl);
            newTr.appendChild(newTdInput);

            tableBodyElement.appendChild(newTr);
        }
    }

    function finalizeDeal() {
        let totalPrice = 0;
        let productsList = [];
        let avgDecFactor = 0;
        let counter = 0;

        // read data for every checked furniture
        let checkMarks = document.getElementsByTagName('input');
        Array.from(checkMarks).forEach(box => {
            if (box.checked) {
                let furnitureData = box.parentNode.parentNode;
                totalPrice += Number(furnitureData.querySelector('td:nth-of-type(3) p').textContent);
                productsList.push(furnitureData.querySelector('td:nth-of-type(2) p').textContent);
                avgDecFactor += Number(furnitureData.querySelector('td:nth-of-type(4) p').textContent);
                counter++;
            }
        });
        avgDecFactor /= counter;

        // Bought furniture: {furniture1}, {furniture2}
        // Total price: {totalPrice} - toFixed(2)
        // Average decoration factor: {decFactor}
        outputField.value = `Bought furniture: ${productsList.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor}`;
    }
}