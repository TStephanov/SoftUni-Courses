function generateReport() {
    // collect checked columns
    let keysCollection = {
        0: 'Employee',
        1: 'Deparment',
        2: 'Status',
        3: 'Date Hired',
        4: 'Benefits',
        5: 'Compensation',
        6: 'Rating',
    };

    let emplChecked = document.querySelector('input[name="employee"]').checked;
    let depChecked = document.querySelector('input[name="deparment"]').checked;
    let statusChecked = document.querySelector('input[name="status"]').checked;
    let dateHiredChecked = document.querySelector('input[name="dateHired"]').checked;
    let benefitsChecked = document.querySelector('input[name="benefits"]').checked;
    let salaryChecked = document.querySelector('input[name="salary"]').checked;
    let ratingChecked = document.querySelector('input[name="rating"]').checked;

    let columnsChecked = []; // array with indexes of checked columns, starting from 0

    emplChecked ? columnsChecked.push(0) : columnsChecked;
    depChecked ? columnsChecked.push(1) : columnsChecked;
    statusChecked ? columnsChecked.push(2) : columnsChecked;
    dateHiredChecked ? columnsChecked.push(3) : columnsChecked;
    benefitsChecked ? columnsChecked.push(4) : columnsChecked;
    salaryChecked ? columnsChecked.push(5) : columnsChecked;
    ratingChecked ? columnsChecked.push(6) : columnsChecked;

    // take table rows(header excl.)
    let table = document.querySelectorAll('tbody tr');

    // store values for respective columns of each row into and object and push them into array
    let resultArray = [];
    
    table.forEach((row) => {
        let rowCellsArray = row.querySelectorAll('td');
        let currentDataObj = {};

        columnsChecked.forEach((columnIndex) => {
            currentDataObj[keysCollection[columnIndex]] = rowCellsArray[columnIndex].textContent;
        });

        resultArray.push(currentDataObj);
    });
    
    let print = document.querySelector('#output');
    print.value = JSON.stringify(resultArray, null, 2);
}