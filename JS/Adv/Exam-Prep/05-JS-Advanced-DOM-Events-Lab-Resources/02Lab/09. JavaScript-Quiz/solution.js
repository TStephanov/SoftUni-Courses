function solve() {
    const buttons = document.querySelectorAll('.answer-text');
    let resultsElement = document.querySelector('#results');
    let resultsContentElement = document.querySelector('#quizzie #results h1');
    let correctAnswersCount = 0;
    Array.from(buttons).forEach(button => button.addEventListener('click', check));
    const answers = {
        "#1": 'onclick',
        "#2": 'JSON.stringify()',
        "#3": 'A programming API for HTML and XML documents',
    }
    // onclick, JSON.stringify(), A programming API for HTML and XML documents

    function check(ev) {
        const questionEl = ev.target.parentNode.parentNode.parentNode.querySelector('h2');
        // console.log(ev.target);

        if (questionEl.textContent.includes('#1')) {
            if (ev.target.textContent === answers['#1']) {
                correctAnswersCount++;
            }

            // resultsContentElement.textContent += ev.target.textContent + ', ';
            // document.querySelector('#quizzie section:nth-of-type(1)').classList.add('hidden');
            // document.querySelector('#quizzie section:nth-of-type(2)').classList.remove('hidden');
            document.querySelector('#quizzie section:nth-of-type(1)').style.display = 'none';
            document.querySelector('#quizzie section:nth-of-type(2)').style.display = 'block';

        } else if (questionEl.textContent.includes('#2')) {
            if (ev.target.textContent === answers['#2']) {
                correctAnswersCount++;
            }

            // resultsContentElement.textContent += ev.target.textContent + ', ';
            // document.querySelector('#quizzie section:nth-of-type(2)').classList.add('hidden');
            // document.querySelector('#quizzie section:nth-of-type(3)').classList.remove('hidden');
            document.querySelector('#quizzie section:nth-of-type(2)').style.display = 'none';
            document.querySelector('#quizzie section:nth-of-type(3)').style.display = 'block';
        } else if (questionEl.textContent.includes('#3')) {
            if (ev.target.textContent === answers['#3']) {
                correctAnswersCount++;
            }

            // resultsContentElement.textContent += ev.target.textContent;
            // document.querySelector('#quizzie section:nth-of-type(3)').classList.add('hidden');
            document.querySelector('#quizzie section:nth-of-type(3)').style.display = 'none';
            resultsElement.style.display = 'block';

            if (correctAnswersCount === 3) {
                resultsContentElement.textContent += '\nYou are recognized as top JavaScript fan!';

            } else {
                resultsContentElement.textContent += `\nYou have ${correctAnswersCount} right answers`;
            }
        }
    }
}