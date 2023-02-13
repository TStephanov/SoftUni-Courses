function addItem() {
    // take ul element
    let listElements = document.getElementById('items');

    // take user input
    let userInputElement = document.getElementById('newItemText');

    // create li element with a element - [Delete]
    let newLiElement = document.createElement('li');
    newLiElement.textContent = userInputElement.value;
    userInputElement.value = ''; // empty the input field uppon each click of 'Add' button

    let newInsideAElement = document.createElement('a');
    newInsideAElement.textContent = '[Delete]';
    newInsideAElement.href = '#';
    newInsideAElement.addEventListener('click', () => {
        newInsideAElement.parentNode.parentNode.removeChild(newInsideAElement.parentNode);
    });

    newLiElement.appendChild(newInsideAElement);

    // append newly created element to the list
    listElements.appendChild(newLiElement);
}