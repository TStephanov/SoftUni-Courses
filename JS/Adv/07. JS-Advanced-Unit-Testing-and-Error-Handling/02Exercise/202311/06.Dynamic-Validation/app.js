function validate() {
    let inputElement = document.getElementById('email');
    
    inputElement.addEventListener('change', (ev) => {
        let pattern = /[a-z]+\@[a-z]+\.[a-z]+/g;

        if (pattern.test(ev.target.value)) {
            console.log('Patern is ok');
            ev.target.classList.remove('error');
        } else {
            console.log(ev.target.value);
            console.log('Patern is NOT ok');
            ev.target.classList.add('error');
        }
    });
}