function attachGradientEvents() {
    let gradientElement = document.querySelector('div[id="gradient"]');
    let resultElement = document.getElementById('result');
    
    gradientElement.addEventListener('mousemove', (e) => {
        let percent = Math.floor((e.offsetX / e.target.clientWidth) * 100);
        resultElement.textContent = `${percent}%`;
    });
}