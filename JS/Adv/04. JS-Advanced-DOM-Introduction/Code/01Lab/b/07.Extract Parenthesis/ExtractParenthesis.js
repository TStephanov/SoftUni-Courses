function extract(content) {
    const p = document.getElementById(content);
    let pattern = /\([A-Za-z ]+\)/g;
    let matchElements = p.textContent.match(pattern);
    let result = matchElements
        .map(el => {
            return el.substring(1, el.length - 1);
        })
        .join('; ');
    console.log(result);
    return result;
}