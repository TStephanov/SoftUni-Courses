function focused() {
    let divElements = document.querySelectorAll('div div');

    for (let div of divElements) {
        const inputElement = div.querySelector('input[type="text"]');
        
        inputElement.addEventListener('mouseover', (e) => {
            console.log('focused');
            inputElement.parentNode.classList.remove('blurred');
            inputElement.parentNode.classList.add('focused');
        }, true);
        
        inputElement.addEventListener('mouseout', (e) => {
            console.log('blured');
            inputElement.parentNode.classList.remove('focused');
            inputElement.parentNode.classList.add('blurred');
        }, true);
    }
}