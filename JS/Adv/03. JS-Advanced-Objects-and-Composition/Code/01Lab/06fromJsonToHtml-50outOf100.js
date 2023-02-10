function fromJSONToHTML(string) {
    let studentsArr = JSON.parse(string);
    let result = [];

    // Push open table tag
    result.push('<table>');

    // Columns count, e.g. headers - is dynamic

    // Push table header into result arr
    let studentInfo = studentsArr[0];
    let headerRow = '<tr>'; // open <tr> tag as initial value
    
    for (let key of Object.keys(studentInfo)) {
        headerRow += `<th>${key}</th>`;
    }
    headerRow += '</tr>'; // adding closing </tr> tag
    result.push(headerRow);

    // Push students info into table rows
    studentsArr.forEach(studentInfo => {
        let tableRow = '<tr>'; // open <tr> tag as initial value
        
        for (let value of Object.values(studentInfo)) {
            tableRow += `<td>${value}</td>`;
        }
        tableRow += '</tr>' // adding closing </tr> tag
        result.push(tableRow);
    });

    // Push closed table tag
    result.push('</table>');

    result.forEach(row => console.log(row));
    // console.log(result);
}

// fromJSONToHTML('[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]');
fromJSONToHTML(`[
    { "Name": "Pesho", "Score": 4, "Grade": 8 },
    { "Name": "Gosho", "Score": 5, "Grade": 8 },
    { "Name": "Angel", "Score": 5.50, " Grade": 10 }
]`)