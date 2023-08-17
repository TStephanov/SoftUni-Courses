function lockedProfile() {
    let buttonElements = document.querySelectorAll('button');

    Array.from(buttonElements).forEach(btn => {
        btn.addEventListener('click', (e) => {
            let profileElement = e.target.parentNode;
            let lockProfileRdBtn = profileElement.querySelector('input[value="lock"]');
            let unlockProfileRdBtn = profileElement.querySelector('input[value="unlock"]');

            if (unlockProfileRdBtn.checked) {
                let hiddenField = profileElement.querySelector('div');

                // change button label
                switch (btn.textContent) {
                    case 'Show more': {
                        // show & hide hidden content
                        // hiddenField.display = 'block';
                        hiddenField.style.display = 'block';
                        btn.textContent = 'Hide it';
                    };
                        break;
                    case 'Hide it': {
                        // show & hide hidden content
                        hiddenField.style = 'display: none';
                        btn.textContent = 'Show more';
                    };
                        break;
                }
            }
        });
    });
}