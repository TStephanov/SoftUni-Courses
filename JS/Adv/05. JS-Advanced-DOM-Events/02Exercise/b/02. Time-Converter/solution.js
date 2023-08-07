function attachEventsListeners() {
    let units = {
        seconds: 1,
        minutes: 60,
        hours: 3600,
        days: 86400
    }

    // let buttonElement = document.querySelectorAll('input[type="button"]');
    Array.from(document.querySelectorAll('input[type="button"]'))
        .forEach(button => {
            button.addEventListener('click', convert);
        });

    function convert(e) {
        // convert value to seconds
        let inputElement = e.target.parentNode.querySelector('input[type="text"]');
        let inputValue = Number(inputElement.value);
        let inputUnit = inputElement.id;
        let valueInSeconds = inputValue * units[inputUnit];
        
        // calculate all fields values
        Array.from(e.target.parentNode.parentNode.querySelectorAll('input[type="text"]'))
            .forEach(inputField => {
                // print all values
                inputField.value = valueInSeconds / units[inputField.id];
            });
    }
}