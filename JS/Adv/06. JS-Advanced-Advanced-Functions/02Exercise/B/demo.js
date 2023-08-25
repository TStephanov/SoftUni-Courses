function demo() {
    const btn = document.querySelector('form[id="add-new"] div[id="container"] button');
    btn.addEventListener('click', addElement);

    function addElement(e) {
        let newP = document.createElement('p');
        newP.textContent = 'Just added this paragraph';
        console.log(newP, newP.textContent);
        let div = document.querySelector('section[id="movies"]');
        div.appendChild(newP);
        e.preventDefault();
    }
}