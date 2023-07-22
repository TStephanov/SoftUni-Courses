function colorize() {
    let initialRows = document.querySelectorAll('tr');
    let rows = Array.from(initialRows);
    
    rows.forEach((row, i) => {
        if (i % 2 === 1) {
            row.style.backgroundColor = 'teal';
        }
    });
    // rows.map((el, i) => {
    //     if (i % 2 === 1) {
    //         el.style.backgroundColor = 'teal'
    //     }
    // })
}