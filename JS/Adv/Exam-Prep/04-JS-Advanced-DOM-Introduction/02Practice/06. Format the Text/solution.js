function solve() {
    const textToFormatElement = document.querySelector('textarea#input');
    const resultElement = document.getElementById('output');
    resultElement.textContent = ''; // delete any text of previous invoke of solve(), e.g. "Format" button click

    let sentences = textToFormatElement.value.split('.');
    let singleParagraphText = '';
    let counter = 0;

    sentences.forEach((sentence, i) => {
        if (sentence.length > 0) {
            counter++;
            singleParagraphText += sentence + '.';

            if (counter === 3 || i === sentences.length - 2) {
                let paragraph = document.createElement('p');
                paragraph.textContent = singleParagraphText;
                resultElement.appendChild(paragraph);
                counter = 0;
                singleParagraphText = ''; // null the content
            }
        }
    });
}