function toggle() {
    let button = document.querySelector('.button');
    let hiddenText = document.querySelector('#extra');

    switch (button.textContent) {
        case 'More': {
            hiddenText.style.display = 'block';
            button.textContent = 'Less';
        }; break;

        case 'Less': {
            hiddenText.style.display = 'none';
            button.textContent = 'More';
        }; break;
    }
}