function fromJSONToHTMLTable(input) {
    let resultInput = JSON.parse(input);
    let resultData = {};


    resultInput.forEach(studentInfo => {
        let keys = Object.keys(studentInfo);

        keys.forEach(key => {
            if (!resultData.hasOwnProperty(key)) {
                resultData[key] = [];
            }
            resultData[key].push(studentInfo[key]);
        });
    });

    // console.log(resultData); // { Name: [ 'Stamat', 'Rumen' ], Score: [ 5.5, 6 ] }

    // START table
    let toPrint = '<table>';

    // START headers
    let headers = '   <tr>';
    Object.keys(resultData).forEach(key => {
        headers += `<th>\\${key}</th>`;
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
        // each student is represtented by x elements, e.g. name, score, grade,..., whose count equals to rowsInfo.length
        // studentInfoToPrint - has all students info - itterate rowsInfo.length to extract specific student info at time
        // add student info to the final result
        // goes to next student while studentInfoToPrint array has no more elements
        let singleStudentInfo = '   <tr>';
        for (let i = 0; i < rowsInfo.length; i++) {
            singleStudentInfo += `<td>${studentInfoToPrint.shift()}</td>`;
        }
        singleStudentInfo += '</tr>'
        toPrint += `\n${singleStudentInfo}`;
    };
    // END rows

    toPrint += '\n</table>';
    // END table

    console.log(toPrint);
}

fromJSONToHTMLTable('[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]');
fromJSONToHTMLTable('[{"Name":"Pesho","Score":4,"Grade":8},{"Name":"Gosho","Score":5,"Grade":8},{"Name":"Angel","Score":5.50,"Grade":10}]');
// fromJSONToHTMLTable([
//     { "Name": "Stamat", "Score": 5.5 },
//     { "Name": "Rumen", "Score": 6 }
// ]);
// console.log('- - -');
// fromJSONToHTMLTable([
//     {
//         "Name": "Pesho",
//         "Score": 4,
//         "Grade": 8
//     },
//     {
//         "Name": "Gosho",
//         "Score": 5,
//         "Grade": 8
//     },
//     {
//         "Name": "Angel",
//         "Score": 5.50,
//         "Grade": 10
//     }]
// );

{/* <table>
   <tr><th>Name</th><th>Score</th></tr>
   <tr><td>Stamat</td><td>5.5</td></tr>
   <tr><td>Rumen</td><td>6</td></tr>
</table> */}