function attachEventsListeners() {
    // conversion table
    let unitsT = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    // take CONVERT button element and add event listener
    let convertBtn = document.querySelector('input[type="button"]');
    convertBtn.addEventListener('click', convertAndPrint);

    function convertAndPrint(ev) {
        // take input value and unit
        let inputUnit = ev.target.parentNode.querySelector('select[id="inputUnits"]').value;
        let inputDistance = ev.target.parentNode.querySelector('input[id="inputDistance"]');
        // take output unit
        let outputUnit = ev.target.parentNode.parentNode.querySelector('select[id="outputUnits"]').value;
        let outputDistance = ev.target.parentNode.parentNode.querySelector('input[id="outputDistance"]');
        // convert input to meters
        let inputToMeters = Number(inputDistance.value) * unitsT[inputUnit];
        // calculate output unit value
        let result = inputToMeters / unitsT[outputUnit];
        // print to output field
        outputDistance.value = result;
    }
}