function addItem() {
    const dropDownMenu = document.querySelector('div select[id="menu"]');
    const inputElementText = document.querySelector('#newItemText');
    const inputElementValue = document.querySelector('#newItemValue');

    if (inputElementText.value.length !== 0 && inputElementValue.value.length !== 0) {
        let newOption = document.createElement('option');
        newOption.value = inputElementValue.value;
        newOption.textContent = inputElementText.value;
        dropDownMenu.appendChild(newOption);
        inputElementValue.value = '';
        inputElementText.value = '';
    }
}