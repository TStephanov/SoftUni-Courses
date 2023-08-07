function addItem() {
    let input = document.getElementById('newItemText');
    let list = document.getElementById('items');
    let newLi = document.createElement('li');
    newLi.textContent = input.value;
    list.appendChild(newLi);
}