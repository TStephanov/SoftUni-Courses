function extract(content) {
    const textElement = document.querySelector(`#${content}`);
    let pattern = /\([A-Za-z ]+\)/g;
    let result = textElement.textContent.match(pattern);
    result = result.map(el => {
        return el.substring(1, el.length - 1);
    });

    return result.join('; ');

    // return textElement.textContent
    //     .match(pattern)
    //     .map(el => {
    //         return el.substring(1, el.length - 1);
    //     })
    //     .join('; ');
}