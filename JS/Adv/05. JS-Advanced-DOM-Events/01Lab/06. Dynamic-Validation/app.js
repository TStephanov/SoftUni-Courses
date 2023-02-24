function validate() {
    let userInputElement = document.getElementById('email');
    let pattern = /[a-z]+\@[a-z]+\.[a-z]+/g;
    userInputElement.addEventListener('change', (ev) => {
        let result = pattern.test(userInputElement.value);
        if (result) {
            userInputElement.value = '';
            ev.target.classList.remove('error');
        } else {
            ev.target.classList.add('error');
        }
    });
}