function addItem() {
    let newText = document.getElementById('newItemText').value;
    let newValue = document.getElementById('newItemValue').value;

    if (newText !== '' && newValue !== '') {
        let option = document.createElement('option');
        option.value = newValue;
        option.textContent = newText;

        let dropDownMenu = document.getElementById('menu');
        dropDownMenu.appendChild(option);

        document.getElementById('newItemText').value = '';
        document.getElementById('newItemValue').value = '';
    }
}