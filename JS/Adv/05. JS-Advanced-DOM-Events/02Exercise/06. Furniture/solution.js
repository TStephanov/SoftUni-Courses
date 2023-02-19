function solve() {
    // add event listeners to "generate" and "buy" buttons fod adding new elements to the furniture list
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
        console.log('Generate button was clicked');
        let inputElements = document.querySelector('#exercise textarea').value;
        let elements = JSON.parse(inputElements);
    
        // add furniture to the list
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
        console.log('Buy button was clicked');
    }

    // take rows with checked boxes
    let checkboxElements = document.querySelectorAll('tbody tr td input[type="checkbox"]');
    console.log(checkboxElements)

    // - print names of the furnitures checked - save them to an array
    // - calculate total amount of the checked furniture - print
    // - calculate average decoration factor - print
}