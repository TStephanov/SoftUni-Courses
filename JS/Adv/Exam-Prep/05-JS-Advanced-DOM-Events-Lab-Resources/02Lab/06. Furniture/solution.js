function solve() {
    Array.from(document.querySelectorAll('div#exercise button'))
        .forEach(button => {
            button.textContent === 'Generate' ? button.addEventListener('click', generate) : button.addEventListener('click', buy);
        });

    function generate(e) {
        const inputArea = document.querySelectorAll('textarea')[0].value;
        const furnitureElements = JSON.parse(inputArea);

        furnitureElements.forEach(furniture => {
            // image, name, price, decoration factor, checkbox
            let newRow = document.createElement('tr');

            let newTdImageElement = document.createElement('td');
            let imageElement = document.createElement('img');
            imageElement.src = furniture.img;
            newTdImageElement.appendChild(imageElement);
            newRow.appendChild(newTdImageElement);

            let newNameElement = document.createElement('td');
            let newName = document.createElement('p');
            newName.textContent = furniture.name;
            newNameElement.appendChild(newName);
            newRow.appendChild(newNameElement);

            let newPriceElement = document.createElement('td');
            let newPrice = document.createElement('p');
            newPrice.textContent = Number(furniture.price);
            newPriceElement.appendChild(newPrice);
            newRow.appendChild(newPriceElement);

            let newDecFactorEl = document.createElement('td');
            let newDecFactor = document.createElement('p');
            newDecFactor.textContent = Number(furniture.decFactor);
            newDecFactorEl.appendChild(newDecFactor);
            newRow.appendChild(newDecFactorEl);

            let newCheckbox = document.createElement('td');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            newCheckbox.appendChild(checkbox);
            newRow.appendChild(newCheckbox);

            document.querySelector('tbody').appendChild(newRow);
            // {name: 'Sofa', img: 'https://res.cloudinary.com/maisonsdumonde/image/up…/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg', price: 150, decFactor: 1.2}
        });
    }

    function buy(e) {
        const outputArea = document.querySelectorAll('textarea')[1];
        const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
        let purchasedFurniture = [];
        let totalPrice = 0;
        let totalDecFactor = 0;

        Array.from(checkboxes).forEach(box => {
            if (box.checked) {
                const furnitureName = box.parentNode.parentNode.querySelectorAll('td')[1].textContent;
                const furniturePrice = Number(box.parentNode.parentNode.querySelectorAll('td')[2].textContent);
                const furnitureDecFactor = Number(box.parentNode.parentNode.querySelectorAll('td')[3].textContent);
                purchasedFurniture.push(furnitureName);
                totalPrice += furniturePrice;
                totalDecFactor += furnitureDecFactor;
            }
        });

        outputArea.textContent = `Bought furniture: ${purchasedFurniture.join(', ')}\n`;
        outputArea.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
        outputArea.textContent += `Average decoration factor: ${totalDecFactor / purchasedFurniture.length}`;
    }
}