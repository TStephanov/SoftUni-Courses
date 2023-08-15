function deleteByEmail() {
    let inputTextElement = document.querySelector('input[name="email"]');
    let rowsElement = document.querySelectorAll('tbody tr');
    let resultElement = document.getElementById('result');
    let isDeleted = false;

    Array.from(rowsElement).forEach(row => {
        
        if (row.querySelector('td:nth-of-type(2)').textContent === inputTextElement.value) {
            row.remove();
            isDeleted = true;
        }
    });

    isDeleted ? resultElement.textContent = 'Deleted.' : resultElement.textContent = 'Not found.';
}