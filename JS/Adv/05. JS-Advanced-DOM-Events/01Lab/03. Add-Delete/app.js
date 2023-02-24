function addItem() {
    // take input
    const userInputElement = document.getElementById('newItemText');
    // create new li element with:
    const newLiElement = document.createElement('li');
    // input element
    newLiElement.textContent = userInputElement.value;
    const newAElement = document.createElement('a');
    newAElement.textContent = '[Delete]';
    newAElement.href = '#';
    // delete element with added event listener
    newAElement.addEventListener('click', (e) => {
       e.currentTarget.parentNode.remove(e.currentTarget.parentNode);
    });
    newLiElement.appendChild(newAElement);

    let listElement = document.getElementById('items');
    listElement.appendChild(newLiElement);
    userInputElement.value = '';
}