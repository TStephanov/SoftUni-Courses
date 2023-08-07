function addItem() {
    let textElement = document.getElementById('newItemText');
    let valueElement = document.getElementById('newItemValue');
    let selectElement = document.getElementsByTagName('select')[0];
    
    let newOption = document.createElement('option');
    newOption.textContent = textElement.value;
    newOption.value = valueElement.value;

    selectElement.appendChild(newOption);

    textElement.value = '';
    valueElement.value = '';
}