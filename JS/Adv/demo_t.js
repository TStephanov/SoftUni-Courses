function test() {
    const buttonEl = document.querySelector('input[type="button"]');
    buttonEl.addEventListener('click', (ev) => {
        console.log(ev);
        document.querySelector('textarea').textContent = document.querySelector('td').textContent;
    })
}

test();