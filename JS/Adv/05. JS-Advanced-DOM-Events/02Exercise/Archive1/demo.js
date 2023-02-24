function demo() {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    
    for (let i = 0; i < matrix.length; i++) {
        let rowA = matrix[i];
        let col = matrix.map(row => row[i]);
        console.log(rowA);
        console.log(col);
        console.log('-----------');
    }
}

demo();