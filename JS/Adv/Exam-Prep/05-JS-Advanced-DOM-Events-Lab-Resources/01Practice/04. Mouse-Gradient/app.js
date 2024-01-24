function attachGradientEvents() {
    const gradientBoxElement = document.getElementById('gradient');
    gradientBoxElement.addEventListener('click', position);
    let resultElement = document.querySelector('#result');

    function position(e) {
        let percentage = Math.floor(e.offsetX * 100 / e.target.clientWidth);
        // console.log(percentage);
        // console.log(`offsetLeft: ${e.target.offsetLeft}`);
        // console.log(`clientWidth: ${e.target.clientWidth}`)
        // resultElement.textContent = percentage + '%';
        console.log(e);
        console.log(e.offsetX);
    }
}

// function attachGradientEvents() {
//     let gradientElement = document.getElementById('gradient');
//     let resultElement = document.getElementById('result');

//     const gradientMouseoverHandler = (e) => {
//         let percent = Math.floor((e.offsetX / e.target.offsetWidth) * 100);

//         resultElement.textContent = `${percent}%`;
//     };
    
//     gradientElement.addEventListener('mousemove', gradientMouseoverHandler);
// }