function lockedProfile() {
    let unlockRadioElements = document.querySelectorAll('input[type="radio"]');
    let unlockStatus = '';
    for (let el of unlockRadioElements) {
        console.log(el.value);
    }

    // take status button pressed - LOCK or UNLOCK
    // - add eventListener to UNLOCK buttons - limit all actions only when unlock is pressed
    for (let radioButton of unlockRadioElements) {
        radioButton.addEventListener('click', (e) => {
            if (radioButton.value === 'unlock') {
                radioButton.setAttribute('checked', '');
                let lockButton = radioButton.parentElement.querySelector('input[value="lock"]');
                lockButton.removeAttribute('checked');

                console.log(radioButton);
                let parentDiv = e.target.parentNode;
                let button = parentDiv.querySelector('button');

                button.addEventListener('click', (e) => {
                    if (button.textContent === 'Show more') {
                        // descriptive way:
                        parentDiv.querySelector('div').style.display = 'block';
                        // longer way: e.target.parentNode.querySelector('div').style.display = 'block';

                        button.textContent = 'Hide it';

                    } else if (button.textContent === 'Hide it') {
                        parentDiv.querySelector('div').style.display = 'none';
                        button.textContent = 'Show more';
                    }
                });
            } else {
                radioButton.removeAttribute('checked');

                let lockButton = radioButton.parentElement.querySelector('input[value="lock"]');
                lockButton.setAttribute('checked', '');
            }
        });
    }

    // if UNLOCK, do other stuff, else don't ;)
    // expand hidden info and change button label to "Hide it"
    // when expanded and press "Hide it", collapse additional info and change button label to "Show more"
}