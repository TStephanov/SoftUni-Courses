function fromJSONToHTMLTable(input) {
    let resultData = {};


    input.forEach(studentInfo => {
        let keys = Object.keys(studentInfo);

        keys.forEach(key => {
            if (!resultData.hasOwnProperty(key)) {
                resultData[key] = [];
            }
            resultData[key].push(studentInfo[key]);
        });
    });

    // console.log(result); // { Name: [ 'Stamat', 'Rumen' ], Score: [ 5.5, 6 ] }

    // table start
    let toPrint = '<table>';

    // START headers
    let headers = '<tr>';
    Object.keys(resultData).forEach(key => {
        headers += `<th>${key}</th>`;
    });
    headers += '</tr>';
    toPrint += `\n${headers}`;
    // END headers

    // START rows
    const rowsInfo = Object.values(resultData); // [ [ 'Stamat', 'Rumen' ], [ 5.5, 6 ] ] | [ [ 'Pesho', 'Gosho', 'Angel' ], [ 4, 5, 5.5 ], [ 8, 8, 10 ] ]
    let studentInfoToPrint = [];

    for (let i = 0; i < rowsInfo.length; i++) {
        rowsInfo.forEach(row => {
            studentInfoToPrint.push(row[i]);
        });
    }; // [ 'Stamat', 5.5, 'Rumen', 6 ] | ['Pesho', 4, 8, 'Gosho', 5, 8, 'Angel', 5.5, 10]

    while (studentInfoToPrint.length > 0) {
        toPrint += `\n<tr><td>${studentInfoToPrint.shift()}</td><td>${studentInfoToPrint.shift()}</td></tr>`;
    };
    // END rows

    toPrint += '\n</table>';

    // console.log(headers);
    console.log(toPrint);
}

// fromJSONToHTMLTable(['[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]']);
// fromJSONToHTMLTable([
//     { "Name": "Stamat", "Score": 5.5 },
//     { "Name": "Rumen", "Score": 6 }
// ]);
fromJSONToHTMLTable([
    {
        "Name": "Pesho",
        "Score": 4,
        "Grade": 8
    },
    {
        "Name": "Gosho",
        "Score": 5,
        "Grade": 8
    },
    {
        "Name": "Angel",
        "Score": 5.50,
        "Grade": 10
    }]
);

{/* <table>
   <tr><th>Name</th><th>Score</th></tr>
   <tr><td>Stamat</td><td>5.5</td></tr>
   <tr><td>Rumen</td><td>6</td></tr>
</table> */}