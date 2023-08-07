function addItem() {
    // crate new li element
    let newLiElement = document.createElement('li');
    
    // take user input and add it to new element as textContent
    let userInput = document.getElementById('newItemText');
    newLiElement.innerHTML = userInput.value; // possible to insert HTML tag, attributes, etc.
    // newLiElement.appendChild(document.createTextNode(userInput.value)); // HTML is escaped
    
    // append new element to existing ul
    let existingUL = document.getElementById('items');
    existingUL.appendChild(newLiElement);
    userInput.value = '';
}