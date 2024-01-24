function deleteByEmail() {
    const userInputElement = document.querySelector('input[name="email"]');
    let tableElements = document.querySelectorAll('tbody tr td:nth-of-type(2n)');
    let resultTextElement = document.getElementById('result');
    let deletedElements = 0;

    Array.from(tableElements).forEach(element => {
        if (element.textContent === userInputElement.value) {
            element.parentNode.parentNode.removeChild(element.parentNode);
            deletedElements++;
        }
    });

    if (deletedElements != 0) {
        resultTextElement.textContent = 'Deleted.';
    } else {
        resultTextElement.textContent = 'Not found.';
    }

    userInputElement.value = '';
}