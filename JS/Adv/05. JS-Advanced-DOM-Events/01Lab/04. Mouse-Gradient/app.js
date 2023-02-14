function attachGradientEvents() {
    let gradientBoxElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    gradientBoxElement.addEventListener('mousemove', (e) => {
        // console.log(e);
        // console.log(`e.target.offsetLeft: ${e.target.offsetLeft}`);
        // console.log(`e.target.clientWidth: ${e.target.clientWidth}`);
        // console.log(`e.offsetX: ${e.offsetX}`);
        // console.log('------------');
        // console.log(`e.target.clientWidth: ${e.target.clientWidth}`);
        // console.log(`e.target.offsetWidth: ${e.target.offsetWidth}`);

        let boxWidth = e.target.clientWidth;
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