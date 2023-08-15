function addItem() {
    let liElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let newLiItem = document.createElement('li');
    newLiItem.textContent = inputElement.value;
    inputElement.value = '';
    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    deleteElement.addEventListener('click', (e) => {
        e.target.parentNode.remove();
    });
    
    newLiItem.appendChild(deleteElement);
    liElement.appendChild(newLiItem);
}