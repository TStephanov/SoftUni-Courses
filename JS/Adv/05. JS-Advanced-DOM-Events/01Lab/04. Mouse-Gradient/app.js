function attachGradientEvents() {
    let gradientBoxElement = document.getElementById('gradient-box');
    let resultElement = document.getElementById('result');

    gradientBoxElement.addEventListener('mousemove', (e) => {
        console.log(e);

        let boxWidth = e.target.offsetWidth;
        let currentPosition = e.offsetX;
        let percentage = Math.floor((currentPosition / boxWidth) * 100);

        resultElement.textContent = `${percentage}%`;
    });
}

/*
// Ivo Papazov
function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    const gradientMouseoverHandler = (e) => {
        let percent = Math.floor((e.offsetX / e.target.offsetWidth) * 100);

        resultElement.textContent = `${percent}%`;
    };
    
    gradientElement.addEventListener('mousemove', gradientMouseoverHandler);
}
*/