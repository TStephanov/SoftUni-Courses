function extract(content) {
    let string = document.getElementById('content').textContent;
    let pattern = /(?:\(([A-Za-z ]*)\))/g;
    let strings = string.match(pattern); // return array with matches, e.g. => [(Bulgaria), (Kazanlak), ...]

    console.log(strings);

    // trim first and last characters - e.g. "(" and ")"
    let result = strings.map(el => {
        let trimmedElement = el.substring(1, el.length - 1);

        return trimmedElement;
    });

    return result.join('; ');
}