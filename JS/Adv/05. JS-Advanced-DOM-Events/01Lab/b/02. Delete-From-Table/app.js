function deleteByEmail() {
    let list = document.querySelectorAll('tbody tr');
    let userInput = document.querySelector('input[name="email"]');
    let deleted = false;

    [...list].forEach(x => {
        if (x.querySelector('td:nth-of-type(2)').textContent === userInput.value) {
            x.remove();
            deleted = true;
        }
    });

    if (deleted) {
        document.getElementById('result').textContent = 'Deleted.';
    } else {
        document.getElementById('result').textContent = 'Not found.';
    }
}