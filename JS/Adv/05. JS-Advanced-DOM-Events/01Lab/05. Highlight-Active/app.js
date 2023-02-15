function focused() {
    let inputElements = document.querySelectorAll('div div');

    for (let element of inputElements) {
        element.addEventListener('click', (e) => {
            // remove 'focused' class for all elements
            for (let div of inputElements) {
                div.classList.remove('focused');
            }

            // set focused class for click event element
            element.classList.add('focused');
        });
    }
}