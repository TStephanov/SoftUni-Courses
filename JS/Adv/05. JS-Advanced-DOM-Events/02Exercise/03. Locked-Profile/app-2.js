function lockedProfile() {
    // take 'Show more' buttons element and add event listener to each of them
    let buttons = Array.from(document.getElementsByTagName('button'))
        .forEach(button => button.addEventListener('click', reveal));

    //  craete a function, to check value if a profile is locked or unlocked
    function reveal(ev) {
        let profile = ev.target.parentElement;
        let isActive = profile.querySelector('input[value="unlock"]').checked;

        // - unlocked
        if (isActive) {
            if (ev.target.textContent === 'Show more') {
                // - click 'Show more':
                // -- expand hidden field and change button name to 'Hide it'
                profile.querySelector('div').style.display = 'block';
                ev.target.textContent = 'Hide it';
            } else if (ev.target.textContent === 'Hide it') {
                // - click 'Hide it':
                // -- collapse fields to be hidden and change button name to 'Show more'
                profile.querySelector('div').style.display = 'none';
                ev.target.textContent = 'Show more';
            }
        }
        // - if lock - do nothing;
    }
}