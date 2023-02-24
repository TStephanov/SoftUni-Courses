function lockedProfile() {
    let [...buttons] = document.getElementsByTagName('button');
    buttons.forEach(button => button.addEventListener('click', reveal));

    function reveal(ev) {
        let unlRadioMark = ev.target.parentNode.querySelector('input[value="unlock"]');
        
        if (unlRadioMark.checked) {
            if (ev.target.textContent === 'Show more') {
                ev.target.parentNode.querySelector('div div').style = 'display: inline';
                ev.target.textContent = 'Hide it';
            } else if (ev.target.textContent === 'Hide it') {
                ev.target.parentNode.querySelector('div div').removeAttribute('style');
                ev.target.textContent = 'Show more';
            }
        }
    }
}