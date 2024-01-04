function fromJSONToHTMLTable(input) {
    // parse input to array
    // create table
    // create headings of the table - keys of the 1st element(object) in the array - if Object.keys()
    // create rows of the table - values of all array elements(objects)
    // print

    let headingsContent = '';
    Object.keys(JSON.parse(input)[0]).forEach(key => {
        headingsContent += `<th>${key}</th>`;
    });
    headingsContent = '<tr>'+ headingsContent + '</tr>';
    let tableContent = `<table>\n   ${headingsContent}`;

    JSON.parse(input).forEach(object => {
        let rowContent = '';
        Object.values(object).forEach(value => {
            rowContent += `<td>${value}</td>`;
        });
        rowContent = '<tr>' + rowContent + '</tr>';
        tableContent += `\n   ${rowContent}`;
    });
    tableContent += '\n</table>';

    console.log(tableContent);
}

fromJSONToHTMLTable('[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]');
console.log('- - -');
fromJSONToHTMLTable('[{"Name":"Pesho","Score":4,"Grade":8},{"Name":"Gosho","Score":5,"Grade":8},{"Name":"Angel","Score":5.50,"Grade":10}]');

/*
<table>
    <tr><th>Name</th><th>Score</th></tr>
    <tr><td>Stamat</td><td>5.5</td></tr>
    <tr><td>Rumen</td><td>6</td></tr>
</table>
*/

/*
 [
     { Name: 'Pesho', Score: 4, Grade: 8 },
     { Name: 'Gosho', Score: 5, Grade: 8 },
     { Name: 'Angel', Score: 5.5, Grade: 10 }
 ]
*/