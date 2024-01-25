function attachEventsListeners() {
    const buttonsElements = document.querySelectorAll('input[type="button"]');
    const unitsToSeconds = {
        'seconds': 1,
        'minutes': 60,
        'hours': 3600,
        'days': 86400
    };

    Array.from(buttonsElements).forEach(button => {
        button.addEventListener('click', convert);
    });

    function convert(e) {
        
        // convert inupt to seconds;
        const pressedButtonType = e.target.id;
        const inputElement = e.target.parentNode.querySelector('input[type="text"]');
        let inputToSeconds = Number(inputElement.value) * unitsToSeconds[inputElement.id];
        
        // document.querySelector('input[id="seconds"]').textContent = 'What';
        document.querySelector('input[id="seconds"]').value = inputToSeconds / unitsToSeconds['seconds'];
        document.querySelector('input[id="minutes"]').value = inputToSeconds / unitsToSeconds['minutes'];
        document.querySelector('input[id="hours"]').value = inputToSeconds / unitsToSeconds['hours'];
        document.querySelector('input[id="days"]').value = inputToSeconds / unitsToSeconds['days'];
    };
}