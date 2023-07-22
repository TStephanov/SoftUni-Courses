function colorize() {
    const rowElements = document.querySelectorAll('tr');
    Array.from(rowElements).forEach((row, i) => {
        if (i % 2 == 1) {
            row.style.backgroundColor = 'teal';
        }
    });
}