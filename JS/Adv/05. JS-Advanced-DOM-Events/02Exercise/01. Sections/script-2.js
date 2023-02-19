function create(input) {
    for (let element of input) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.textContent = element;
        p.style.display = 'none';
        console.log(p);
        div.addEventListener('click', (ev) => {
            // ev.target.style.display = 'block';
            ev.target.querySelector('p').style.display = 'block';
            console.log(ev.target.querySelector('p'));
        });

        div.appendChild(p);
        document.getElementById('content').appendChild(div);
    }
}