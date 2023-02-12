function deleteByEmail() {
    // set result element as empty string - when 'Delete' is pressed more than once
    let resultElement = document.getElementById('result');
    // take user input
    let userInputElement = document.querySelector('input[name="email"]');

    // extact table info
    let emailTableElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let wasDeleted = false;

    for (const cell of emailTableElements) {
        // check if user input is in the table
        if (cell.textContent === userInputElement.value) {
            cell.parentNode.parentNode.removeChild(cell.parentNode);
            wasDeleted = true;
            // breakdown:
            // - cell: 2-nd td element of each row
            // - cell.parentNode - the row of current td element
            // - cell.parentNode.parentNode - the whole table(having the row and td)
            // - .removeChild(cell.parentNode) - remove that row(cell.parentNode) of the whole table, having searched td
        }
    }

    if (wasDeleted) {
        //  - if row(s) was(ere) deleted, set 'Deleted' as content of element with id="result"
        // resultElement.appendChild(document.createTextNode('Deleted.')); // when using appendChild, we should empty the element for each 'Delete' press - otherwise, will be concatenation of results from each press, wheter 'Deleted.' or 'Not found.'
        resultElement.textContent = 'Deleted.'; // therefore, using '.textContent' - to skip the empty step
    } else {
        // - set 'Not found.'
        // resultElement.appendChild(document.createTextNode('Not found.'));
        resultElement.textContent = 'Not found.';
    }
}