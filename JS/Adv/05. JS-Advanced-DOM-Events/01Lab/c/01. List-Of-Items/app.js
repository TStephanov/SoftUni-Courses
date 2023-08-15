function addItem() {
    let listItemsElement = document.getElementById('items');
    let inputTextElement = document.getElementById('newItemText');
    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputTextElement.value;
    inputTextElement.value = '';
    
    listItemsElement.appendChild(newLiElement);
}