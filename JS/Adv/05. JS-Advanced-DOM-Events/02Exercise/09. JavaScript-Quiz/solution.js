function solve() {
    Array.from(document.getElementsByTagName('section'))
        .forEach(section => {
            Array.from(section.querySelectorAll('p[class="answer-text"]'))
            .forEach(button => {
                button.addEventListener('click', (e) => {
                    console.log(e);
                })
            })
        });
}