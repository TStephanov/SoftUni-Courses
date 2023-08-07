function attachEventsListeners() {
    let secondsElement = document.getElementById('seconds');
    let minutesElement = document.getElementById('minutes');
    let hoursElement = document.getElementById('hours');
    let daysElement = document.getElementById('days');

    document.getElementById('secondsBtn').addEventListener('click', (event) => {
        secondsInput = Number(secondsElement.value);

        minutesElement.value = secondsInput / 60;
        hoursElement.value = secondsInput / 3600;
        daysElement.value = secondsInput / (3600 * 24);
    });

    document.getElementById('minutesBtn').addEventListener('click', (event) => {
        minutesInput = Number(minutesElement.value);

        secondsElement.value = minutesInput * 60;
        hoursElement.value = minutesInput / 60;
        daysElement.value = minutesInput / 1440;
    });

    document.getElementById('hoursBtn').addEventListener('click', (event) => {
        hoursInput = Number(hoursElement.value);

        secondsElement.value = hoursInput * 3600;
        minutesElement.value = hoursInput * 60;
        daysElement.value = hoursInput / 24;
    });

    document.getElementById('daysBtn').addEventListener('click', (event) => {
        daysInput = Number(daysElement.value);

        secondsElement.value = daysInput * 86400;
        minutesElement.value = daysInput * 1440;
        hoursElement.value = daysInput * 24;
    });
}