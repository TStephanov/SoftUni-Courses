function attachGradientEvents() {
    let gradientBoxElement = document.getElementById('gradient');
    let printField = document.getElementById('result');

    gradientBoxElement.addEventListener('mousemove', (e) => {
        console.log(e);
        let elementWidth = e.target.clientWidth;
        let currentCursorPosition = e.offsetX;
        let percentagePosition = Math.floor(currentCursorPosition * 100 / elementWidth); // comment: Math.floor reach to 99%, while Math.round to 100%
        printField.textContent = percentagePosition + '%';
    });
}