function validate() {
    let emailInputElement = document.getElementById('email');
    
    emailInputElement.addEventListener('change', () => {
        let pattern = /[a-z]+\@[a-z]+\.[a-z]+/g;
        let userInput = emailInputElement.value;

        if (pattern.exec(userInput) === null) {
            emailInputElement.classList.add('error');
        } else {
            emailInputElement.value = '';
            emailInputElement.classList.remove('error');
        }
    });
}