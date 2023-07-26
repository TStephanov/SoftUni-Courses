function toggle() {
    let btnElement = document.querySelector('.button');
    let textElement = document.getElementById('extra');

    switch (btnElement.textContent) {
        case 'More': {
            textElement.style.display = 'block';
            btnElement.textContent = 'Less';
        };
            break;
        case 'Less': {
            textElement.style.display = 'none';
            btnElement.textContent = 'More';
        };
            break;
    }
}