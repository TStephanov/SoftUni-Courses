function lockedProfile() {
    const buttons = document.querySelectorAll('div.profile button');

    Array.from(buttons).forEach(button => {
        button.addEventListener('click', (e) => {
            const isChecked = e.target.parentNode.querySelector('input[value="unlock"]').checked;

            if (isChecked) {
                if (e.target.textContent === 'Show more') {
                    e.target.parentNode.querySelector('div').style.display = 'block';
                    e.target.textContent = 'Hide it';
                } else {
                    e.target.parentNode.querySelector('div').style.display = 'none';
                    e.target.textContent = 'Show more';
                };
            }
        });
    });
}