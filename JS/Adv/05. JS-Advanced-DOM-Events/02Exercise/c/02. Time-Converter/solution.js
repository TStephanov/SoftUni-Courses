function attachEventsListeners() {
    let buttonElements = document.querySelectorAll('input[type="button"]');
    let daysFieldElement = document.getElementById('days');
    let hoursFieldElement = document.getElementById('hours');
    let minutesFieldElement = document.getElementById('minutes');
    let secondsFieldElement = document.getElementById('seconds');

    // function convert() {

    // }

    Array.from(buttonElements).forEach(button => {
        button.addEventListener('click', (e) => {
            let inputElement = e.target.parentNode.querySelector('input[type="text"]');
            let inputElementUnit = inputElement.id; // equals to "e.target.parentNode.querySelector('input[type="text"]').id"
            let inputElementValue = Number(inputElement.value);

            switch (inputElementUnit) {
                case 'days': {
                    hoursFieldElement.value = inputElementValue * 24;
                    minutesFieldElement.value = inputElementValue * 24 * 60;
                    secondsFieldElement.value = inputElementValue * 24 * 3600;
                };
                    break;
                case 'hours': {
                    daysFieldElement.value = inputElementValue / 24;
                    minutesFieldElement.value = inputElementValue * 60;
                    secondsFieldElement.value = inputElementValue * 3600;
                };
                    break;
                case 'minutes': {
                    daysFieldElement.value = inputElementValue / 60 / 24;
                    hoursFieldElement.value = inputElementValue / 60;
                    secondsFieldElement.value = inputElementValue * 60;
                };
                    break;
                case 'seconds': {
                    daysFieldElement.value = inputElementValue / 3600 / 24;
                    hoursFieldElement.value = inputElementValue / 3600;
                    minutesFieldElement.value = inputElementValue / 60;
                };
                    break;
            }
        });
    })
}