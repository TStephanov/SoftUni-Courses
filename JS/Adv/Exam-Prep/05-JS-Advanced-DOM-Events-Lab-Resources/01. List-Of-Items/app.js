function addItem() {
    let elementsList = document.getElementById('items');
    let userInputElement = document.querySelector('#newItemText');
    let newLi = document.createElement('li');
    newLi.textContent = userInputElement.value;
    elementsList.appendChild(newLi);
    userInputElement.value = '';
}