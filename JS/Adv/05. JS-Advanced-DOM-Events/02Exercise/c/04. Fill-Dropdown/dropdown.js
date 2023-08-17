function addItem() {
    // <option value="dog">Dog</option>
    let menuElement = document.getElementById('menu');
    let inputTextElement = document.getElementById('newItemText');
    let inputValueElement = document.getElementById('newItemValue');

    let newOptionEl = document.createElement('option');
    newOptionEl.value = inputValueElement.value;
    newOptionEl.textContent = inputTextElement.value;

    menuElement.appendChild(newOptionEl);

    inputTextElement.value = '';
    inputValueElement.value = '';
}