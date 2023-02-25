function solve() {
    // add event listeners to "generate" and "buy" buttons
    let generateBtnElements = Array.from(document.querySelectorAll('button'));
    generateBtnElements.forEach(button => {
        if (button.textContent === 'Generate') {
            button.addEventListener('click', addFurniture);
        } else if (button.textContent === 'Buy') {
            button.addEventListener('click', buyFurniture);
        }
    });

    // take textarea input and parse it to object
    function addFurniture() {
        let inputElement = document.querySelector('#exercise textarea:nth-of-type(1)').value;
        let elements = JSON.parse(inputElement);
        console.log(elements);
    
        // enable existing furntiure checkbox element - not by a task description
        // document.querySelector('tbody tr td input[type="checkbox"]').removeAttribute('disabled');

        // add furniture(s) to the list
        for (let furnitureObject of elements) { // img, name, price, decFactor
            // create new row with each object property as separate cell
            let newRow = document.createElement('tr');
    
            let tdImg = document.createElement('td');
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', furnitureObject.img);
            tdImg.appendChild(imgEl);
    
            let tdName = document.createElement('td');
            let pName = document.createElement('p')
            pName.appendChild(document.createTextNode(furnitureObject['name']));
            tdName.appendChild(pName);
    
            let tdPrice = document.createElement('td');
            let pPrice = document.createElement('p');
            pPrice.textContent = furnitureObject['price'];
            tdPrice.appendChild(pPrice);
    
            let tdDecFactor = document.createElement('td');
            let pDecFactor = document.createElement('p');
            pDecFactor.textContent = furnitureObject.decFactor;
            tdDecFactor.appendChild(pDecFactor);
    
            let tdCheckbox = document.createElement('td');
            let inputCheckBoxElement = document.createElement('input')
            inputCheckBoxElement.setAttribute('type', 'checkbox');
            tdCheckbox.appendChild(inputCheckBoxElement);
    
            newRow.appendChild(tdImg);
            newRow.appendChild(tdName);
            newRow.appendChild(tdPrice);
            newRow.appendChild(tdDecFactor);
            newRow.appendChild(tdCheckbox);
    
            let tableElement = document.querySelector('tbody');
            tableElement.appendChild(newRow);
        }
    }

    function buyFurniture() {
        // take rows with checked boxes
        let checkboxElements = Array.from(document.querySelectorAll('tbody tr td input[type="checkbox"]'));
        let checkedNames = [];
        let checkedTotalPrice = 0;
        let checkedDecFactorSum = 0;
        let checkedDecFactorAvgAmount = 0;
        let counter = 0;

        checkboxElements.forEach(checkbox => {
            if (checkbox.checked) {
                counter++;
                let trData = checkbox.parentElement.parentElement;
                let name = trData.querySelector('td:nth-of-type(2) p').textContent;
                let price = trData.querySelector('td:nth-of-type(3) p').textContent;
                let decorationFactor = trData.querySelector('td:nth-of-type(4) p').textContent;
                
                checkedNames.push(name); // save names of the selected furniture into array
                checkedTotalPrice += Number(price); // calculate total amount of the checked furniture
                checkedDecFactorSum += Number(decorationFactor) // calculate total decoration factor
            }
        });

        (counter !== 0) ? (checkedDecFactorAvgAmount = checkedDecFactorSum / counter) : (checkedDecFactorAvgAmount);

        let outputElement = document.querySelector('#exercise textarea:nth-of-type(2)');
        outputElement.appendChild(document.createTextNode(`Bought furniture: ${checkedNames.join(', ')}\nTotal price: ${checkedTotalPrice.toFixed(2)}\nAverage decoration factor: ${checkedDecFactorAvgAmount}`));
    }
}