function validate() {
    let inputField = document.querySelector('#email');
    const pattern = /(^[a-z]+@[a-z]+.[a-z]+)$/g;

    inputField.addEventListener('change', (e) => {
        console.log(e.target);
        e.target.value.match(pattern) === null ? e.target.classList.add('error') : e.target.classList.remove('error');
    });
}