function validate() {
    let userInput = document.getElementById('email'); 

    userInput.addEventListener('change', (e) => {
        let pattern = /([a-z]+\@[a-z]+\.[a-z]+)/g;
        let result = pattern.test(userInput.value);
        
        if (result === false) {
            userInput.classList.add('error');
        } else {
            userInput.classList.remove('error');
        }
    });
}