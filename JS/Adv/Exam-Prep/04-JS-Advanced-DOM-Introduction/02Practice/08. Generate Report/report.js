function generateReport() {
    const outputElement = document.querySelector('#output');

    const tableHeadersElement = document.querySelectorAll('th input[type="checkbox"]'); // NodeList(7) [ th, th, th, th, th, th, th ]
    const tableHeadersCollectionArr = Array.from(tableHeadersElement).map(el => el.name); // changed to extract "name" attribute for each th. Change in the above row too
    const tableRowsElement = document.querySelectorAll('tbody tr');
    let result = [];
    let checkedColumnIndicies = [];

    Array.from(document.querySelectorAll('th')).forEach((th, i) => {
        const checkBox = th.querySelector('input');
        if (checkBox.checked) {
            checkedColumnIndicies.push(i);
        }
    });

    if (checkedColumnIndicies.length > 0) { // if there is something in the array, than we have something checked
        Array.from(tableRowsElement).forEach(row => {
            const cells = row.querySelectorAll('td');
            let resultObject = {};

            checkedColumnIndicies.forEach(index => {
                const propertyName = tableHeadersCollectionArr[index];
                const propertyValue = cells[index].textContent;
                resultObject[propertyName] = propertyValue;
            });
            result.push(resultObject);
        });
    }

    outputElement.textContent = JSON.stringify(result);
    console.log(JSON.stringify(result));
}