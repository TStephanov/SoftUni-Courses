function attachEventsListeners() {
    // attach event listener to each button
    let buttons = Array.from(document.querySelectorAll('input[type="button"]'));
    buttons.forEach(button => button.addEventListener('click', convert));

    let unitsToSecondsRatio = {
        days: 86400,
        hours: 3600,
        minutes: 60,
        seconds: 1,
    }

    // create a function...
    function convert(ev) {
        // ...that takes current input...
        let valueElement = ev.target.parentElement.querySelector('input[type="text"]');
        let valueToConvert = Number(valueElement.value); // e.g. - 3, 5, 7 ...
        let valueUnit = valueElement.id; // e.g. - days, hours, minutes, seconds
        // ...convert it to seconds...
        let valueInSeconds = valueToConvert * unitsToSecondsRatio[valueUnit];
        // ...calculate all other measures...
        let resultValues = {
            days: valueInSeconds / unitsToSecondsRatio['days'],
            hours: valueInSeconds / unitsToSecondsRatio['hours'],
            minutes: valueInSeconds / unitsToSecondsRatio['minutes'],
            seconds: valueInSeconds / unitsToSecondsRatio['seconds'],
        }

        // ...set all fields their new values
        // let daysField = document.getElementById('days');
        // let hoursField = document.getElementById('hours');
        // let minutesField = document.getElementById('minutes');
        // let secondsField = document.getElementById('seconds');

        // daysField.value = resultValues['days'];
        // hoursField.value = resultValues['hours'];
        // minutesField.value = resultValues['minutes'];
        // secondsField.value = resultValues['seconds'];

        let resultFields = Array.from(document.querySelectorAll('input[type="text"]'));

        resultFields.forEach(field => {
            switch (field.id) {
                case 'days':
                    field.value = resultValues['days'];
                    break;
                case 'hours':
                    field.value = resultValues['hours'];
                    break;
                case 'minutes':
                    field.value = resultValues['minutes'];
                    break;
                case 'seconds':
                    field.value = resultValues['seconds'];
                    break;
            }
        });
    }
}