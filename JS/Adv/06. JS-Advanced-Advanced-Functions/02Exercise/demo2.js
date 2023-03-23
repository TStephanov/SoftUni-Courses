function demo() {
    const btn = document.querySelector('button');
    btn.addEventListener('click', addElement);

    function addElement(e) {
        console.log(e.buttons);
        let newP = document.createElement('p');
        newP.textContent = 'Just added this paragraph';
        // console.log(newP, newP.textContent);
        let div = document.querySelector('div[class="final"]');
        div.appendChild(newP);
        e.preventDefault();
    }
}