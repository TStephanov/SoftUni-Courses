function colorize() {
    // let result = document.querySelectorAll('tr:nth-of-type(2n) td');

    // result.forEach(row => {
    //     row.style.backgroundColor = 'green';
    // });

    let tableRows = document.getElementsByTagName('tr');
    
    let rows = Array.from(tableRows);
    
    rows.forEach((row, index) => {
        if (index % 2 === 1) {
            row.style.backgroundColor = 'teal';
        }
    });
}
