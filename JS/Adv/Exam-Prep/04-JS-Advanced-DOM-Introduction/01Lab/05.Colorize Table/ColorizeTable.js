function colorize() {
    const trElements = document.querySelectorAll('tr');
    Array.from(trElements).forEach((row, i) => {
        if (i % 2 !== 0 && i !== 0) {
            console.log(row);
            row.style.background = 'teal';
        }
    });
}