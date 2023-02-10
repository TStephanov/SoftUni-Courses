function solve() {
    let textToFormat = document.getElementById('input').value;
    let elements = textToFormat.split('.');
    elements = elements.filter(el => el.length > 0); // remove empty sentences, e.g. < 1 symbol
    let counter = 0;
    let result = document.getElementById('output');
    let sentences = '';
    let paragraphs = '';

    for (let i = 0; i < elements.length; i++) {
        counter++;
        sentences += elements[i] + '.'; // adding "." to the end of each sentence

        if (counter === 3) {
            counter = 0;
            paragraphs += `<p>${sentences}</p>`;
            sentences = '';
        }
        // when less than 3 sentences left to be added to "paragraphs"
        if (i === elements.length - 1) {
            paragraphs += `<p>${sentences}</p>`;
        }
    }

    result.innerHTML = paragraphs;
}