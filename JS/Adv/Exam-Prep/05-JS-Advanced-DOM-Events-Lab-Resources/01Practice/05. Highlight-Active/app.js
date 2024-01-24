function focused() {
    let inputElements = document.querySelectorAll('div div input[type="text"]');
    
    Array.from(inputElements).forEach(input => {
        input.addEventListener('focus', (e) => {
            e.target.parentNode.classList.add('focused');
        });
        input.addEventListener('blur', (e) => {
            e.target.parentNode.classList.remove('focused');
        });
    });
}
