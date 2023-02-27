function solve() {
    // attache event listeners to each button
    Array.from(document.querySelectorAll('button'))
        .forEach(button => {
            if (button.textContent === 'Quick Check') {
                button.addEventListener('click', check);
                button.style.cursor = 'pointer';
            } else if (button.textContent === 'Clear') {
                button.addEventListener('click', clear);
                button.style.cursor = 'pointer';
            }
        });

    function check(e) {
        let isSolved = true;
        let length = document.querySelectorAll('tbody tr:nth-of-type(1) td').length;

        // take rows and columns
        // check for any duplicate numbers in each row/column
        for (let i = 1; i <= length; i++) {
            const row = Array.from(document.querySelectorAll(`tbody tr:nth-of-type(${i}) td input`));
            const rowArr = row.map(el => Number(el.value));
            const rowResult = new Set(rowArr);

            const col = Array.from(document.querySelectorAll(`tbody tr td:nth-of-type(${i}) input`));
            const colArr = col.map(el => Number(el.value));
            const colResult = new Set(colArr);

            if (row.length !== [...new Set(rowResult)].length || col.length !== [...new Set(colResult)].length) {
                isSolved = false;
                break;
            }
        }

        if (isSolved) {
            // - if no duplicates -> solve
            let table = e.target.parentNode.parentNode.parentNode.parentNode;
            table.setAttribute('style', 'border: 2px solid green');
            document.querySelector('div[id="check"] p').setAttribute('style', 'color: green')
            document.querySelector('div[id="check"] p').textContent = 'You solve it! Congratulations!';
        } else {
            // - if yes duplicates -> not solve
            let table = e.target.parentNode.parentNode.parentNode.parentNode;
            table.setAttribute('style', 'border: 2px solid red');
            // table.style.border = '2px solid red'; // a colleague way
            document.querySelector('div[id="check"] p').setAttribute('style', 'color: red')
            // document.querySelector('div[id="check"] p').style.color = 'red'; // a colleague way
            document.querySelector('div[id="check"] p').textContent = 'NOP! You are not done yet...';
        }
    }

    function clear(e) {
        const table = e.target.parentNode.parentNode.parentNode.parentNode;
        // clear cell values
        Array.from(table.querySelectorAll('tbody tr'))
            .forEach(row => {
                Array.from(row.querySelectorAll('td input'))
                    .forEach(cell => cell.value = '');
            });
            
        table.setAttribute('style', 'border: none');
        document.querySelector('div[id="check"] p').textContent = '';
        document.querySelector('div[id="check"]').removeAttribute('style');
    }
}