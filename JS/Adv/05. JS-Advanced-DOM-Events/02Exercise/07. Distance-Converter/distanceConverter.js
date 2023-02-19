function attachEventsListeners() {
    let dimensions = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    document.querySelector('input[id="convert"]').addEventListener('click', (ev) => {
        let inputUnitRaw = document.getElementById('inputUnits').selectedOptions; // an array with selected element - our case is 1 element
        let outputUnitRaw = document.getElementById('outputUnits').selectedOptions; // an array with selected element - our case is 1 element

        let inputUnit = inputUnitRaw[0].value;
        let outputUnit = outputUnitRaw[0].value;

        let inputContent = document.getElementById('inputDistance');
        let outputContent = document.getElementById('outputDistance');

        let inputValueToM = Number(inputContent.value) * dimensions[inputUnit]; // convert input unit to meters
        let outputResult = calculate(inputValueToM, outputUnit);

        console.log(outputResult);
        outputContent.removeAttribute('disabled');
        outputContent.value = outputResult.toFixed(3);

    });

    function calculate(number, outputUnit) {
        let options = {
            km: number / dimensions['km'],
            m: number / dimensions['m'],
            cm: number / dimensions['cm'],
            mm: number / dimensions['mm'],
            mi: number / dimensions['mi'],
            yrd: number / dimensions['yrd'],
            ft: number / dimensions['ft'],
            in: number / dimensions['in'],
        }

        return options[outputUnit];
    }
}